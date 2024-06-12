const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

async function copyAndProtectSheet() {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, 'credentials.json'),
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive.file'
    ],
  });

  const authClient = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: authClient });

  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  const sheetId = parseInt(process.env.GOOGLE_SHEET_ID);
  const newSheetName = process.env.NEW_SHEET_NAME;

  try {
    // Copy the sheet
    const copyResponse = await sheets.spreadsheets.sheets.copyTo({
      spreadsheetId: spreadsheetId,
      sheetId: sheetId,
      resource: { destinationSpreadsheetId: spreadsheetId },
    });

    const newSheetId = copyResponse.data.sheetId;

    // Rename the copied sheet
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      resource: {
        requests: [
          {
            updateSheetProperties: {
              properties: {
                sheetId: newSheetId,
                title: newSheetName,
              },
              fields: 'title',
            },
          },
        ],
      },
    });

    // Get the properties of the new sheet to determine the number of rows and columns
    const sheetPropertiesResponse = await sheets.spreadsheets.get({
      spreadsheetId: spreadsheetId,
      ranges: [],
      includeGridData: false
    });

    const newSheet = sheetPropertiesResponse.data.sheets.find(sheet => sheet.properties.sheetId === newSheetId);
    const rowCount = newSheet.properties.gridProperties.rowCount;
    const columnCount = newSheet.properties.gridProperties.columnCount;

    // Protect the new sheet (make it read-only)
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      resource: {
        requests: [
          {
            addProtectedRange: {
              protectedRange: {
                range: {
                  sheetId: newSheetId,
                  startRowIndex: 0,
                  endRowIndex: rowCount,
                  startColumnIndex: 0,
                  endColumnIndex: columnCount
                },
                description: 'Read-only copy',
                warningOnly: false,
                editors: {
                  users: [], // Ensure this is empty
                  groups: [], // Ensure this is empty
                  domainUsersCanEdit: false,
                }
              }
            }
          }
        ]
      }
    });

    console.log(`Copied and protected sheet: ${newSheetName}`);
  } catch (error) {
    console.error('Error copying and protecting sheet:', error);
  }
}

copyAndProtectSheet();
