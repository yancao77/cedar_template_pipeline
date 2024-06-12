/**
 * Copies a sheet within a Google Spreadsheet, renames the copy, and makes it read-only.
 *
 * @param {string} spreadsheetId The ID of the Google Spreadsheet.
 * @param {number} sheetId The ID of the sheet to copy.
 * @param {string} newSheetName The name for the new sheet.
 */
function copyAndProtectSheet(spreadsheetId, sheetId, newSheetName) {
  const ss = SpreadsheetApp.openById(spreadsheetId);
  const sheets = ss.getSheets();
  let sheet;

  // Find the sheet by ID
  for (let i = 0; i < sheets.length; i++) {
    if (sheets[i].getSheetId() == sheetId) {
      sheet = sheets[i];
      break;
    }
  }

  if (sheet) {
    // Make a copy of the sheet
    const newSheet = sheet.copyTo(ss);
    newSheet.setName(newSheetName);

    // Protect the entire sheet to make it read-only
    const protection = newSheet.protect().setDescription('Read-only copy');

    // Remove any editors to make it read-only for everyone except the owner
    const me = Session.getEffectiveUser();
    protection.addEditor(me);
    protection.removeEditors(protection.getEditors());
    if (protection.canDomainEdit()) {
      protection.setDomainEdit(false);
    }

    SpreadsheetApp.getUi().alert("A copy of the sheet has been created as '" + newSheetName + "' and made read-only.");
  } else {
    SpreadsheetApp.getUi().alert("Sheet with ID '" + sheetId + "' does not exist.");
  }
}
