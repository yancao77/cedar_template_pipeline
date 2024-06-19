<!-- This file has been generated from a spreadsheet.  Do not edit by hand because it will be overwritten. -->

<link rel="stylesheet" href="../specification.css"/>


# Specification

<div class="controls"><button id="jsonld-example-visibility-toggle">Hide JSON-LD Examples</button></div>


<h2 plain>Required fields</h2>
The following fields are required fields.  These fields MUST be filled out in a metadata instance for the instance to be valid.

[](#)  >>  [Data File Titles](#data-file-titles)  >>  [Title](#title)

[](#)  >>  [Data File Parent Studies](#data-file-parent-studies)  >>  [PHS Identifier](#phs-identifier)
<h2 plain>Recommended fields</h2>
The following fields are recommended fields.  These fields SHOULD be filled out in a metadata instance to greatly increase the likelihood of the associated data file being found by interested parties and to provide proper accreditation for the creators of the file.

[](#)  >>  [Data File Identity](#data-file-identity)  >>  [Identifier](#identifier)

[](#)  >>  [Data File Identity](#data-file-identity)  >>  [File Name](#file-name)

[](#)  >>  [Data File Identity](#data-file-identity)  >>  [Version](#version)

[](#)  >>  [Data File Identity](#data-file-identity)  >>  [SHA256 digest](#sha256-digest)

[](#)  >>  [Data File Subjects](#data-file-subjects)  >>  [Subject Identifier](#subject-identifier)

[](#)  >>  [Data File Descriptions](#data-file-descriptions)  >>  [Description](#description)

[](#)  >>  [Data File Descriptions](#data-file-descriptions)  >>  [Type Of Content](#type-of-content)

[](#)  >>  [Data File Creators](#data-file-creators)  >>  [Creator Type](#creator-type)

[](#)  >>  [Data File Creators](#data-file-creators)  >>  [Creator Name](#creator-name)

[](#)  >>  [Data File Creators](#data-file-creators)  >>  [Creator Given Name](#creator-given-name)

[](#)  >>  [Data File Creators](#data-file-creators)  >>  [Creator Family Name](#creator-family-name)

[](#)  >>  [Data File Creators](#data-file-creators)  >>  [Creator Identifier](#creator-identifier)

[](#)  >>  [Data File Creators](#data-file-creators)  >>  [Creator Email](#creator-email)

[](#)  >>  [Data File Creators](#data-file-creators)  >>  [Creator Affiliation](#creator-affiliation)

[](#)  >>  [Data File Creators](#data-file-creators)  >>  [Creator Role](#creator-role)

[](#)  >>  [Data File Parent Studies](#data-file-parent-studies)  >>  [Study Identifier](#study-identifier)

[](#)  >>  [Data File Parent Studies](#data-file-parent-studies)  >>  [Study Name](#study-name)

[](#)  >>  [Data File Funding Sources](#data-file-funding-sources)  >>  [Award Local Identifier](#award-local-identifier)

[](#)  >>  [Data File Funding Sources](#data-file-funding-sources)  >>  [Funder Name](#funder-name)

[](#)  >>  [Data File Funding Sources](#data-file-funding-sources)  >>  [Funder Identifier](#funder-identifier)

## Data File Titles
<span class="badge badge--multi">Multi-valued</span>

A list of names or titles of the Data File being described. At least one Data File Title is required.  Mutliple values may be specified to provide titles in different languages.

### Title
<span class="badge badge--required">Required</span>

A title or descriptive name by which the Data File being described is known. This is a presentation name (i.e. title case with appropriate spacing) and is typically different from the actual file name of the data file.

Multiple titles and different languages may be specified by repeating this element. The language for a given title is specified with the Language field.

<div class="example">
<div class="example-heading">Example</div>
<p>COVID-19 Booster Shot Side Effects Survey Responses</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Title" : {
    "@value" : "COVID-19 Booster Shot Side Effects Survey Responses"
  },
  "@context" : {
    "Title" : "http://purl.org/radx-terms/metadata-terms/title"
  }
}
```

</div>
### Language
<span class="badge badge--optional">Optional</span>

The language tag that identifies the language in which the Data File Title is provided. Languages are identified using codes that are structured in accordance with [RFC 5646](https://www.rfc-editor.org/rfc/rfc5646). If no value is specified then the default code of `en` for English is assumed.

The value of this field is a language code.  See the [language code table](language-codes.md) for a list of possible language codes.

<div class="example">
<div class="example-heading">Example</div>
<p>en</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Language" : {
    "@value" : "en"
  },
  "@context" : {
    "Language" : "http://purl.org/radx-terms/metadata-terms/language"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Titles" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/bc2bfad6-d7f0-45ed-a834-df1d704290fa",
    "Title" : {
      "@value" : "COVID-19 Booster Shot Side Effects Survey Responses"
    },
    "Language" : {
      "@value" : "en"
    },
    "@context" : {
      "Title" : "http://purl.org/radx-terms/metadata-terms/title",
      "Language" : "http://purl.org/radx-terms/metadata-terms/language"
    }
  } ],
  "@context" : {
    "Data File Titles" : "http://purl.org/radx-terms/metadata-terms/titleDescriptor"
  }
}
```

</div>
## Data File Identity

Information used to identify the Data File being described.

### Identifier
<span class="badge badge--recommended">Recommended</span>

A globally unique string that identifies the Data File being described. It is typically a DOI (Digital Object Identifier) or IRI (International Resource Identifier, or Web address). The identifier is typically generated by data providers or data publishers who wish to have a citable and Web-accessible resource.

Example DOIs are `doi:10.1000/182` or `https://doi.org/10.1000/182`, both of which identify the DOI Handbook, which has a DOI of 10.1000/182

See also:  [https://en.wikipedia.org/wiki/Digital_object_identifier](https://en.wikipedia.org/wiki/Digital_object_identifier)

<div class="example">
<div class="example-heading">Example</div>
<p>http://doi.org/10.1000/182</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Identifier" : {
    "@value" : "http://doi.org/10.1000/182"
  },
  "@context" : {
    "Identifier" : "http://purl.org/radx-terms/metadata-terms/identifier"
  }
}
```

</div>
### Identifier Type
<span class="badge badge--optional">Optional</span>

The identifier type used to identify the resource being described.

This need not be provided if the identifier is either a DOI that begins with "doi:" or "https://doi.org/", or it is an IRI that begins with either "http://" or "https://" 

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/IdentifierType).

[ARK](http://vocab.fairdatacollective.org/gdmt/ARK)  |  [arXiv](http://vocab.fairdatacollective.org/gdmt/arXiv)  |  [bibcode](http://vocab.fairdatacollective.org/gdmt/bibcode)  |  [DOI](http://vocab.fairdatacollective.org/gdmt/DOI)  |  [EAN13](http://vocab.fairdatacollective.org/gdmt/EAN13)  |  [EISSN](http://vocab.fairdatacollective.org/gdmt/EISSN)  |  [Handle](http://vocab.fairdatacollective.org/gdmt/Handle)  |  [IGSN](http://vocab.fairdatacollective.org/gdmt/IGSN)  |  [IRI](http://vocab.fairdatacollective.org/gdmt/IRI)  |  [ISBN](http://vocab.fairdatacollective.org/gdmt/ISBN)  |  [ISSN](http://vocab.fairdatacollective.org/gdmt/ISSN)  |  [ISTC](http://vocab.fairdatacollective.org/gdmt/ISTC)  |  [LISSN](http://vocab.fairdatacollective.org/gdmt/LISSN)  |  [LSID](http://vocab.fairdatacollective.org/gdmt/LSID)  |  [PMID](http://vocab.fairdatacollective.org/gdmt/PMID)  |  [PURL](http://vocab.fairdatacollective.org/gdmt/PURL)  |  [UPC](http://vocab.fairdatacollective.org/gdmt/UPC)  |  [URI](http://vocab.fairdatacollective.org/gdmt/URI)  |  [URL](http://vocab.fairdatacollective.org/gdmt/URL)  |  [URN](http://vocab.fairdatacollective.org/gdmt/URN)  |  [w3id](http://vocab.fairdatacollective.org/gdmt/w3id)
<div class="example">
<div class="example-heading">Example</div>
<p><a href="http://vocab.fairdatacollective.org/gdmt/DOI">DOI</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Identifier Type" : {
    "@id" : "http://vocab.fairdatacollective.org/gdmt/DOI",
    "rdfs:label" : "DOI"
  },
  "@context" : {
    "Identifier Type" : "http://purl.org/radx-terms/metadata-terms/identifierType"
  }
}
```

</div>
### File Name
<span class="badge badge--recommended">Recommended</span>

The local name of the resource (for example, in a file-based operating system or web service).

<div class="example">
<div class="example-heading">Example</div>
<p>COVID-19_Booster_Shot_June_2022_Responses.csv</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "File Name" : {
    "@value" : "COVID-19_Booster_Shot_June_2022_Responses.csv"
  },
  "@context" : {
    "File Name" : "http://purl.org/radx-terms/metadata-terms/fileName"
  }
}
```

</div>
### Version
<span class="badge badge--recommended">Recommended</span>

The string identifying the version of the data file or other resource being described.

This field accepts any version string, but we suggest that you use semantic versioning of the form `major.minor.patch`. for example, `2.1.4`.

<div class="example">
<div class="example-heading">Example</div>
<p>1.0.1</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Version" : {
    "@value" : "1.0.1"
  },
  "@context" : {
    "Version" : "http://purl.org/radx-terms/metadata-terms/version"
  }
}
```

</div>
### SHA256 digest
<span class="badge badge--recommended">Recommended</span>

A SHA256 digest of the Data File contents. This is a 64 characters long hexadecimal string. 

For example, the SHA256 digest of the string, "RADx Data Hub" is `ebff8d3da88b292622d3bfc36bdac4c4537ddc56cb07f344c5223d6b6f9cd011`.

On macOS the following command may be used to generate the SHA256 digest of a file.

```
shasum -a 256 /path/to/file
```

<div class="example">
<div class="example-heading">Example</div>
<p>ebff8d3da88b292622d3bfc36bdac4c4537ddc56cb07f344c5223d6b6f9cd011</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "SHA256 digest" : {
    "@value" : "ebff8d3da88b292622d3bfc36bdac4c4537ddc56cb07f344c5223d6b6f9cd011"
  },
  "@context" : {
    "SHA256 digest" : "https://purl.org/radx-terms/sha256"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Identity" : {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/590f9b55-50d8-4d51-9ccc-a2ec3b15f399",
    "Identifier" : {
      "@value" : "http://doi.org/10.1000/182"
    },
    "Identifier Type" : {
      "@id" : "http://vocab.fairdatacollective.org/gdmt/DOI",
      "rdfs:label" : "DOI"
    },
    "File Name" : {
      "@value" : "COVID-19_Booster_Shot_June_2022_Responses.csv"
    },
    "Version" : {
      "@value" : "1.0.1"
    },
    "SHA256 digest" : {
      "@value" : "ebff8d3da88b292622d3bfc36bdac4c4537ddc56cb07f344c5223d6b6f9cd011"
    },
    "@context" : {
      "File Name" : "http://purl.org/radx-terms/metadata-terms/fileName",
      "Version" : "http://purl.org/radx-terms/metadata-terms/version",
      "SHA256 digest" : "https://purl.org/radx-terms/sha256",
      "Identifier" : "http://purl.org/radx-terms/metadata-terms/identifier",
      "Identifier Type" : "http://purl.org/radx-terms/metadata-terms/identifierType"
    }
  },
  "@context" : {
    "Data File Identity" : "http://purl.org/radx-terms/metadata-terms/identityDescriptor"
  }
}
```

</div>
## Data File Language

Language in which the data file being described is provided.

### Primary Language
<span class="badge badge--optional">Optional</span>

Primary language used to present the data file (if multiple languages are present, the _Other Languages_ field may be used to add additional languages).

The value of this field is a language code.  See the [language code table](language-codes.md) for a list of possible language codes.

<div class="example">
<div class="example-heading">Example</div>
<p>en</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Primary Language" : {
    "@value" : "en"
  },
  "@context" : {
    "Primary Language" : "http://purl.org/radx-terms/metadata-terms/primaryLanguage"
  }
}
```

</div>
### Other Languages
<span class="badge badge--optional">Optional</span>
<span class="badge badge--multi">Multi-valued</span>

A list of other, non-primary, languages in which the data file being described is provided.

The value of this field is a language code.  See the [language code table](language-codes.md) for a list of possible language codes.

<div class="example">
<div class="example-heading">Example</div>
<p>es</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Other Languages" : [ {
    "@value" : "es"
  } ],
  "@context" : {
    "Other Languages" : "http://purl.org/radx-terms/metadata-terms/otherLanguage"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Language" : {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/78ce55d4-913a-4dc8-8838-c6bfc40a76de",
    "Primary Language" : {
      "@value" : "en"
    },
    "Other Languages" : [ {
      "@value" : "es"
    } ],
    "@context" : {
      "Other Languages" : "http://purl.org/radx-terms/metadata-terms/otherLanguage",
      "Primary Language" : "http://purl.org/radx-terms/metadata-terms/primaryLanguage"
    }
  },
  "@context" : {
    "Data File Language" : "http://purl.org/radx-terms/metadata-terms/languageDescriptor"
  }
}
```

</div>
## Data File Subjects
<span class="badge badge--multi">Multi-valued</span>

A list of concepts (keywords, classification, or free text terms) that define the data file or purpose (subjects which can be addressed) using the data file.

### Subject Identifier
<span class="badge badge--recommended">Recommended</span>

The Medical Subject Headings (MeSH) subject code that identifies a classification subject that is pertinent to the data file.

Values for this field are taken from the MESH ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/MESH/?p=classes).

<div class="example">
<div class="example-heading">Example</div>
<p><a href="http://purl.bioontology.org/ontology/MESH/C000719227">COVID-19 vaccine booster shot</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Subject Identifier" : {
    "@id" : "http://purl.bioontology.org/ontology/MESH/C000719227",
    "rdfs:label" : "COVID-19 vaccine booster shot"
  },
  "@context" : {
    "Subject Identifier" : "http://purl.org/radx-terms/metadata-terms/subjectIdentifier"
  }
}
```

</div>
### Subject Identifier Scheme
<span class="badge badge--derived">Derived</span>
<span class="badge badge--optional">Optional</span>

This value is derived  This field should not be manually specified or edited.

The name of the scheme or authority used for the Subject Identifier.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Subject Identifier Scheme" : {
    "@value" : "http://purl.bioontology.org/ontology/MESH"
  },
  "@context" : {
    "Subject Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/subjectIdentifierScheme"
  }
}
```

</div>
### Keyword
<span class="badge badge--optional">Optional</span>

Free text subject, keyword, classification code, or key phrase describing the data file or purpose for which the data file can be used. While MeSH codes are the preferred form of specifying subjects this free text field may be used for codes or subject keywords that do not have a corresponding MeSH terms.

<div class="example">
<div class="example-heading">Example</div>
<p>COVID-19 vaccine booster shot</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Keyword" : {
    "@value" : "COVID-19 vaccine booster shot"
  },
  "@context" : {
    "Keyword" : "http://purl.org/radx-terms/metadata-terms/keyword"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Subjects" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/b52fbd7c-1f3f-45df-ac7c-10175cc3770b",
    "Subject Identifier" : {
      "@id" : "http://purl.bioontology.org/ontology/MESH/C000719227",
      "rdfs:label" : "COVID-19 vaccine booster shot"
    },
    "Subject Identifier Scheme" : {
      "@value" : "http://purl.bioontology.org/ontology/MESH"
    },
    "Keyword" : {
      "@value" : "COVID-19 vaccine booster shot"
    },
    "@context" : {
      "Subject Identifier" : "http://purl.org/radx-terms/metadata-terms/subjectIdentifier",
      "Keyword" : "http://purl.org/radx-terms/metadata-terms/keyword",
      "Subject Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/subjectIdentifierScheme"
    }
  } ],
  "@context" : {
    "Data File Subjects" : "http://purl.org/radx-terms/metadata-terms/subjectsAndKeywordsDescriptor"
  }
}
```

</div>
## Data File Descriptions
<span class="badge badge--multi">Multi-valued</span>

A list of summaries of the Data File and its contents.

### Description
<span class="badge badge--recommended">Recommended</span>

An account of the resource contained in the Data File; may include but is not limited to: an abstract, a table of contents, a graphical representation, or a free-text account of the resource.

<div class="example">
<div class="example-heading">Example</div>
<p>This dataset provides responses from a survey carried out in June 2022 whose purpose was to ascertain side-effects of receiving the COVID-19 booster shot.</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Description" : {
    "@value" : "This dataset provides responses from a survey carried out in June 2022 whose purpose was to ascertain side-effects of receiving the COVID-19 booster shot."
  },
  "@context" : {
    "Description" : "http://purl.org/radx-terms/metadata-terms/description"
  }
}
```

</div>
### Description Language
<span class="badge badge--optional">Optional</span>

Language in which the Data File description is provided. The default value is `en` for English.

The value of this field is a language code.  See the [language code table](language-codes.md) for a list of possible language codes.

<div class="example">
<div class="example-heading">Example</div>
<p>en</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Description Language" : {
    "@value" : "en"
  },
  "@context" : {
    "Description Language" : "http://purl.org/radx-terms/metadata-terms/language"
  }
}
```

</div>
### Type Of Content
<span class="badge badge--derived">Derived</span>
<span class="badge badge--recommended">Recommended</span>

This value is always the same.  This field should not be manually specified or edited.

This is the type of digital object being described, which for RADx Data Files is always [Dataset](http://vocab.fairdatacollective.org/gdmt/Dataset). 

<div class="example">
<div class="example-heading">Example</div>
<p><a href="http://vocab.fairdatacollective.org/gdmt/Dataset">Dataset</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Type Of Content" : {
    "@id" : "http://vocab.fairdatacollective.org/gdmt/Dataset",
    "rdfs:label" : "Dataset"
  },
  "@context" : {
    "Type Of Content" : "http://purl.org/radx-terms/metadata-terms/typeOfContent"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Descriptions" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/d9602e2f-af0b-4dca-91c1-d12149effcbc",
    "Description" : {
      "@value" : "This dataset provides responses from a survey carried out in June 2022 whose purpose was to ascertain side-effects of receiving the COVID-19 booster shot."
    },
    "Description Language" : {
      "@value" : "en"
    },
    "Type Of Content" : {
      "@id" : "http://vocab.fairdatacollective.org/gdmt/Dataset",
      "rdfs:label" : "Dataset"
    },
    "@context" : {
      "Description Language" : "http://purl.org/radx-terms/metadata-terms/language",
      "Description" : "http://purl.org/radx-terms/metadata-terms/description",
      "Type Of Content" : "http://purl.org/radx-terms/metadata-terms/typeOfContent"
    }
  } ],
  "@context" : {
    "Data File Descriptions" : "http://purl.org/radx-terms/metadata-terms/descriptionDescriptor"
  }
}
```

</div>
## Data File Data Dictionary

Information about the Data Dictionary associated with the Data File

### Data Dictionary File Name
<span class="badge badge--optional">Optional</span>

The file name of the Data Dictionary file that defines the Data File's data elements.

Each Data File submitted should have its own data dictionary. For example, survery_results_origcopy.csv and survery_results_transformcopy.csv should both have data dictionary files (survery_results_origcopy_DICT.csv and survery_results_transformcopy_DICT.csv) associated with them. 

<div class="example">
<div class="example-heading">Example</div>
<p>COVID-19_Booster_Shot_June_2022_Responses--DICT.csv</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data Dictionary File Name" : {
    "@value" : "COVID-19_Booster_Shot_June_2022_Responses--DICT.csv"
  },
  "@context" : {
    "Data Dictionary File Name" : "http://purl.org/radx-terms/metadata-terms/dataDictionaryFileName"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Data Dictionary" : {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/b24bbeef-1aee-411b-9917-b798b8c7cab1",
    "Data Dictionary File Name" : {
      "@value" : "COVID-19_Booster_Shot_June_2022_Responses--DICT.csv"
    },
    "@context" : {
      "Data Dictionary File Name" : "http://purl.org/radx-terms/metadata-terms/dataDictionaryFileName"
    }
  },
  "@context" : {
    "Data File Data Dictionary" : "http://purl.org/radx-terms/metadata-terms/dataDictionaryDescriptor"
  }
}
```

</div>
## Data File Creators
<span class="badge badge--multi">Multi-valued</span>

A list of people and/or organizations that created the data file.

### Creator Type
<span class="badge badge--recommended">Recommended</span>

The type of the creator. This is either a Person or an Organization.

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/ResourceCreatorType).

[Organization](http://vocab.fairdatacollective.org/gdmt/Organization)  |  [Person](http://vocab.fairdatacollective.org/gdmt/Person)
<div class="example">
<div class="example-heading">Example</div>
<p><a href="http://vocab.fairdatacollective.org/gdmt/Person">Person</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Creator Type" : {
    "@id" : "http://vocab.fairdatacollective.org/gdmt/Person",
    "rdfs:label" : "Person"
  },
  "@context" : {
    "Creator Type" : "http://purl.org/radx-terms/metadata-terms/creatorType"
  }
}
```

</div>
### Creator Name
<span class="badge badge--recommended">Recommended</span>

The full name of the creator. For a person this is the combination of the given name and family name, in the appropriate order.

<div class="example">
<div class="example-heading">Example</div>
<p>Josiah Carberry</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Creator Name" : {
    "@value" : "Josiah Carberry"
  },
  "@context" : {
    "Creator Name" : "http://purl.org/radx-terms/metadata-terms/creatorName"
  }
}
```

</div>
### Creator Given Name
<span class="badge badge--recommended">Recommended</span>

If the creator is a person, the personal name(s) of the creator (e.g., first and optionally middle name in Western languagues, optionally middle and last name in Asian languages).

<div class="example">
<div class="example-heading">Example</div>
<p>Josiah</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Creator Given Name" : {
    "@value" : "Josiah"
  },
  "@context" : {
    "Creator Given Name" : "http://purl.org/radx-terms/metadata-terms/creatorGivenName"
  }
}
```

</div>
### Creator Family Name
<span class="badge badge--recommended">Recommended</span>

If the creator is a person, the surname(s) of the creator (e.g., last name in Western languagues, first name in Asian languages).

<div class="example">
<div class="example-heading">Example</div>
<p>Carberry</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Creator Family Name" : {
    "@value" : "Carberry"
  },
  "@context" : {
    "Creator Family Name" : "http://purl.org/radx-terms/metadata-terms/creatorFamilyName"
  }
}
```

</div>
### Creator Identifier
<span class="badge badge--recommended">Recommended</span>

Globally unique string that identifies the creator (an individual or legal entity). For individuals, this is typically an ORCID; for research organizations, it is typically an ROR.

The ORCID iD is an https IRI with a 16-digit number that is compatible with the ISO Standard (ISO 27729), also known as the International Standard Name Identifier (ISNI), e.g. https://orcid.org/0000-0001-2345-6789 

_[ORCID](https://orcid.org) provides a persistent digital identifier (an ORCID iD) that distinguishes each researcher from every other researcher. You can connect your iD with your professional information—affiliations, grants, publications, peer review, and more. You can use your iD to share your information with other systems, ensuring you get recognition for all your contributions, saving you time and hassle, and reducing the risk of errors._

The ROR is an https IRI that uniquely identifies most research organizatiions. 

_The [Research Organization Registry (ROR)](https://ror.org) is a community-led project to develop an open, sustainable, usable, and unique identifier for every research organization in the world._

<div class="example">
<div class="example-heading">Example</div>
<p>https://orcid.org/0000-0002-1825-0097</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Creator Identifier" : {
    "@value" : "https://orcid.org/0000-0002-1825-0097"
  },
  "@context" : {
    "Creator Identifier" : "http://purl.org/radx-terms/metadata-terms/creatorIdentifier"
  }
}
```

</div>
### Creator Identifier Scheme
<span class="badge badge--optional">Optional</span>



Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/IdentifierScheme).

[GRID](https://www.grid.ac/)  |  [ISNI](https://isni.org/)  |  [LinkedIn ID](https://www.linkedin.com/)  |  [ORCiD](https://orcid.org/)  |  [ResearcherID](http://www.researcherid.com/)  |  [ROR](https://ror.org/)  |  [Scopus](https://www.scopus.com/)
<div class="example">
<div class="example-heading">Example</div>
<p><a href="https://orcid.org/">ORCID</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Creator Identifier Scheme" : {
    "@id" : "https://orcid.org/",
    "rdfs:label" : "ORCID"
  },
  "@context" : {
    "Creator Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/creatorIdentifierScheme"
  }
}
```

</div>
### Creator Email
<span class="badge badge--recommended">Recommended</span>

The email address of the creator.

<div class="example">
<div class="example-heading">Example</div>
<p>josiah.carberry@example.com</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Creator Email" : {
    "@value" : "josiah.carberry@example.com"
  },
  "@context" : {
    "Creator Email" : "http://purl.org/radx-terms/metadata-terms/creatorEmail"
  }
}
```

</div>
### Creator Affiliation
<span class="badge badge--recommended">Recommended</span>

If the creator is a Person who is affiliated with an instition then this field should specify the institution.

<div class="example">
<div class="example-heading">Example</div>
<p>Brown University</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Creator Affiliation" : {
    "@value" : "Brown University"
  },
  "@context" : {
    "Creator Affiliation" : "http://purl.org/radx-terms/metadata-terms/creatorAffiliation"
  }
}
```

</div>
### Creator Affiliation Identifier
<span class="badge badge--optional">Optional</span>

Globally unique string that identifies the organizational affiliation of the contributor.  

We suggest that you an identifier from the [Research Organization Registry (ROR)](https://ror.org), a community-led project to develop an open, sustainable, usable, and unique identifier for every research organization in the world.

<div class="example">
<div class="example-heading">Example</div>
<p>https://ror.org/05gq02987</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Creator Affiliation Identifier" : {
    "@value" : "https://ror.org/05gq02987"
  },
  "@context" : {
    "Creator Affiliation Identifier" : "http://purl.org/radx-terms/metadata-terms/creatorAffiliationIdentifier"
  }
}
```

</div>
### Creator Affiliation Identifier Scheme
<span class="badge badge--optional">Optional</span>

The name of the scheme or authority used for the Creator Affiliation Identifier.

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/IdentifierScheme).

[GRID](https://www.grid.ac/)  |  [ISNI](https://isni.org/)  |  [LinkedIn ID](https://www.linkedin.com/)  |  [ORCiD](https://orcid.org/)  |  [ResearcherID](http://www.researcherid.com/)  |  [ROR](https://ror.org/)  |  [Scopus](https://www.scopus.com/)
<div class="example">
<div class="example-heading">Example</div>
<p><a href="https://ror.org">ROR</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Creator Affiliation Identifier Scheme" : {
    "@id" : "https://ror.org",
    "rdfs:label" : "ROR"
  },
  "@context" : {
    "Creator Affiliation Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/creatorAffiliationIdentifierScheme"
  }
}
```

</div>
### Creator Role
<span class="badge badge--recommended">Recommended</span>

The role of the Person or the Organization in relation to the data file creation.

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/ContributorRole).

[Contact Person](http://vocab.fairdatacollective.org/gdmt/ContactPerson)  |  [Data Collector](http://vocab.fairdatacollective.org/gdmt/DataCollector)  |  [Data Curator](http://vocab.fairdatacollective.org/gdmt/DataCurator)  |  [Data Manager](http://vocab.fairdatacollective.org/gdmt/DataManager)  |  [Distributor](http://vocab.fairdatacollective.org/gdmt/Distributor)  |  [Editor](http://vocab.fairdatacollective.org/gdmt/Editor)  |  [Hosting Institution](http://vocab.fairdatacollective.org/gdmt/HostingInstitution)  |  [Other Role](http://vocab.fairdatacollective.org/gdmt/OtherRole)  |  [Producer](http://vocab.fairdatacollective.org/gdmt/Producer)  |  [Project Leader](http://vocab.fairdatacollective.org/gdmt/ProjectLeader)  |  [Project Manager](http://vocab.fairdatacollective.org/gdmt/ProjectManager)  |  [Project Member](http://vocab.fairdatacollective.org/gdmt/ProjectMember)  |  [Registration Agency](http://vocab.fairdatacollective.org/gdmt/RegistrationAgency)  |  [Registration Authority](http://vocab.fairdatacollective.org/gdmt/RegistrationAuthority)  |  [Related Person](http://vocab.fairdatacollective.org/gdmt/RelatedPerson)  |  [Research Group](http://vocab.fairdatacollective.org/gdmt/ResearchGroup)  |  [Researcher](http://vocab.fairdatacollective.org/gdmt/Researcher)  |  [Rights Holder](http://vocab.fairdatacollective.org/gdmt/RightsHolder)  |  [Sponsor](http://vocab.fairdatacollective.org/gdmt/Sponsor)  |  [Supervisor](http://vocab.fairdatacollective.org/gdmt/Supervisor)  |  [Work Package Leader](http://vocab.fairdatacollective.org/gdmt/WorkPackageLeader)
<div class="example">
<div class="example-heading">Example</div>
<p><a href="http://vocab.fairdatacollective.org/gdmt/DataManager">Data Manager</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Creator Role" : {
    "@id" : "http://vocab.fairdatacollective.org/gdmt/DataManager",
    "rdfs:label" : "Data Manager"
  },
  "@context" : {
    "Creator Role" : "http://purl.org/radx-terms/metadata-terms/creatorRole"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Creators" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/f5a8e566-8402-450e-bebe-11babf7fb14b",
    "Creator Type" : {
      "@id" : "http://vocab.fairdatacollective.org/gdmt/Person",
      "rdfs:label" : "Person"
    },
    "Creator Name" : {
      "@value" : "Josiah Carberry"
    },
    "Creator Given Name" : {
      "@value" : "Josiah"
    },
    "Creator Family Name" : {
      "@value" : "Carberry"
    },
    "Creator Identifier" : {
      "@value" : "https://orcid.org/0000-0002-1825-0097"
    },
    "Creator Identifier Scheme" : {
      "@id" : "https://orcid.org/",
      "rdfs:label" : "ORCID"
    },
    "Creator Email" : {
      "@value" : "josiah.carberry@example.com"
    },
    "Creator Affiliation" : {
      "@value" : "Brown University"
    },
    "Creator Affiliation Identifier" : {
      "@value" : "https://ror.org/05gq02987"
    },
    "Creator Affiliation Identifier Scheme" : {
      "@id" : "https://ror.org",
      "rdfs:label" : "ROR"
    },
    "Creator Role" : {
      "@id" : "http://vocab.fairdatacollective.org/gdmt/DataManager",
      "rdfs:label" : "Data Manager"
    },
    "@context" : {
      "Creator Given Name" : "http://purl.org/radx-terms/metadata-terms/creatorGivenName",
      "Creator Family Name" : "http://purl.org/radx-terms/metadata-terms/creatorFamilyName",
      "Creator Name" : "http://purl.org/radx-terms/metadata-terms/creatorName",
      "Creator Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/creatorIdentifierScheme",
      "Creator Role" : "http://purl.org/radx-terms/metadata-terms/creatorRole",
      "Creator Affiliation" : "http://purl.org/radx-terms/metadata-terms/creatorAffiliation",
      "Creator Identifier" : "http://purl.org/radx-terms/metadata-terms/creatorIdentifier",
      "Creator Type" : "http://purl.org/radx-terms/metadata-terms/creatorType",
      "Creator Affiliation Identifier" : "http://purl.org/radx-terms/metadata-terms/creatorAffiliationIdentifier",
      "Creator Affiliation Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/creatorAffiliationIdentifierScheme",
      "Creator Email" : "http://purl.org/radx-terms/metadata-terms/creatorEmail"
    }
  } ],
  "@context" : {
    "Data File Creators" : "http://purl.org/radx-terms/metadata-terms/creatorDescriptor"
  }
}
```

</div>
## Data File Related Resources
<span class="badge badge--multi">Multi-valued</span>

A list of resources related to the Data File being described. Resources may be publications, manuals, depositories, web pages, or other entities that related to this data set and its creation and use.

### Related Resource Identifier
<span class="badge badge--optional">Optional</span>

A globally unique string that identifies a resource that is related to the data file being described. Typically this is an IRI representing a Web page, but it can be some other type of unique identifier that identifies any digital or non-digital resource.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Related Resource Identifier" : { },
  "@context" : {
    "Related Resource Identifier" : "http://purl.org/radx-terms/metadata-terms/relatedResourceIdentifier"
  }
}
```

</div>
### Related Resource Identifier Type
<span class="badge badge--optional">Optional</span>

The identifier type used to identify the related resource.

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/IdentifierType).

[ARK](http://vocab.fairdatacollective.org/gdmt/ARK)  |  [arXiv](http://vocab.fairdatacollective.org/gdmt/arXiv)  |  [bibcode](http://vocab.fairdatacollective.org/gdmt/bibcode)  |  [DOI](http://vocab.fairdatacollective.org/gdmt/DOI)  |  [EAN13](http://vocab.fairdatacollective.org/gdmt/EAN13)  |  [EISSN](http://vocab.fairdatacollective.org/gdmt/EISSN)  |  [Handle](http://vocab.fairdatacollective.org/gdmt/Handle)  |  [IGSN](http://vocab.fairdatacollective.org/gdmt/IGSN)  |  [IRI](http://vocab.fairdatacollective.org/gdmt/IRI)  |  [ISBN](http://vocab.fairdatacollective.org/gdmt/ISBN)  |  [ISSN](http://vocab.fairdatacollective.org/gdmt/ISSN)  |  [ISTC](http://vocab.fairdatacollective.org/gdmt/ISTC)  |  [LISSN](http://vocab.fairdatacollective.org/gdmt/LISSN)  |  [LSID](http://vocab.fairdatacollective.org/gdmt/LSID)  |  [PMID](http://vocab.fairdatacollective.org/gdmt/PMID)  |  [PURL](http://vocab.fairdatacollective.org/gdmt/PURL)  |  [UPC](http://vocab.fairdatacollective.org/gdmt/UPC)  |  [URI](http://vocab.fairdatacollective.org/gdmt/URI)  |  [URL](http://vocab.fairdatacollective.org/gdmt/URL)  |  [URN](http://vocab.fairdatacollective.org/gdmt/URN)  |  [w3id](http://vocab.fairdatacollective.org/gdmt/w3id)
<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Related Resource Identifier Type" : { },
  "@context" : {
    "Related Resource Identifier Type" : "http://purl.org/radx-terms/metadata-terms/relatedResourceIdentifierType"
  }
}
```

</div>
### Related Resource File Name
<span class="badge badge--optional">Optional</span>

The local name of the related resource file (given by the operating system or web service), or for non-digital resources, the local name used to refer to it.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Related Resource File Name" : { },
  "@context" : {
    "Related Resource File Name" : "http://purl.org/radx-terms/metadata-terms/relatedResourceFileName"
  }
}
```

</div>
### Related Resource Type Category
<span class="badge badge--optional">Optional</span>

Categorical type of the resource being described. (Corresponds to DataCite's resourceTypeGeneral.) For publications about the Data File, choose Text; for any other related publications, choose Text. For the Data Dictionary, choose Other Resource. 

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/ResourceTypeCategory).

[Audiovisual](http://vocab.fairdatacollective.org/gdmt/Audiovisual)  |  [Collection](http://vocab.fairdatacollective.org/gdmt/Collection)  |  [Data Catalog](http://vocab.fairdatacollective.org/gdmt/DataCatalog)  |  [Data Paper](http://vocab.fairdatacollective.org/gdmt/DataPaper)  |  [Data Stream](http://vocab.fairdatacollective.org/gdmt/DataStream)  |  [Dataset](http://vocab.fairdatacollective.org/gdmt/Dataset)  |  [Event](http://vocab.fairdatacollective.org/gdmt/Event)  |  [Image](http://vocab.fairdatacollective.org/gdmt/Image)  |  [Interactive Resource](http://vocab.fairdatacollective.org/gdmt/InteractiveResource)  |  [Model](http://vocab.fairdatacollective.org/gdmt/Model)  |  [Other Resource](http://vocab.fairdatacollective.org/gdmt/OtherResource)  |  [Physical Object](http://vocab.fairdatacollective.org/gdmt/PhysicalObject)  |  [Service](http://vocab.fairdatacollective.org/gdmt/Service)  |  [Software](http://vocab.fairdatacollective.org/gdmt/Software)  |  [Sound](http://vocab.fairdatacollective.org/gdmt/Sound)  |  [Text](http://vocab.fairdatacollective.org/gdmt/Text)  |  [Workflow](http://vocab.fairdatacollective.org/gdmt/Workflow)
<div class="example">
<div class="example-heading">Example</div>
<p><a href="http://vocab.fairdatacollective.org/gdmt/Text">Text</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Related Resource Type Category" : {
    "@id" : "http://vocab.fairdatacollective.org/gdmt/Text",
    "rdfs:label" : "Text"
  },
  "@context" : {
    "Related Resource Type Category" : "http://purl.org/radx-terms/metadata-terms/relatedResourceTypeCategory"
  }
}
```

</div>
### Related Resource Relation
<span class="badge badge--optional">Optional</span>

Description of the relationship of the related resource to the Data File being described.

<div class="example">
<div class="example-heading">Example</div>
<p>The publication describes how the data file is constructed and can be used.</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Related Resource Relation" : {
    "@value" : "The publication describes how the data file is constructed and can be used."
  },
  "@context" : {
    "Related Resource Relation" : "http://purl.org/radx-terms/metadata-terms/relatedResourceRelation"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Related Resources" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/64673af2-558c-49f1-a55f-ff87c090f4ad",
    "Related Resource Identifier" : { },
    "Related Resource Identifier Type" : { },
    "Related Resource File Name" : { },
    "Related Resource Type Category" : {
      "@id" : "http://vocab.fairdatacollective.org/gdmt/Text",
      "rdfs:label" : "Text"
    },
    "Related Resource Relation" : {
      "@value" : "The publication describes how the data file is constructed and can be used."
    },
    "@context" : {
      "Related Resource Identifier" : "http://purl.org/radx-terms/metadata-terms/relatedResourceIdentifier",
      "Related Resource Relation" : "http://purl.org/radx-terms/metadata-terms/relatedResourceRelation",
      "Related Resource File Name" : "http://purl.org/radx-terms/metadata-terms/relatedResourceFileName",
      "Related Resource Type Category" : "http://purl.org/radx-terms/metadata-terms/relatedResourceTypeCategory",
      "Related Resource Identifier Type" : "http://purl.org/radx-terms/metadata-terms/relatedResourceIdentifierType"
    }
  } ],
  "@context" : {
    "Data File Related Resources" : "http://purl.org/radx-terms/metadata-terms/relatedResourceDescriptor"
  }
}
```

</div>
## Data File Contributors
<span class="badge badge--multi">Multi-valued</span>

A list of people and/or organizations that contributed in bringing into existence the data file being described. While data file creators are also contributors, data file creators should be provided in the Data File Creator section instead of here

### Contributor Type
<span class="badge badge--optional">Optional</span>

The type of the contributor of the described data file (person or organization).

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/ResourceCreatorType).

[Organization](http://vocab.fairdatacollective.org/gdmt/Organization)  |  [Person](http://vocab.fairdatacollective.org/gdmt/Person)
<div class="example">
<div class="example-heading">Example</div>
<p><a href="http://vocab.fairdatacollective.org/gdmt/Person">Person</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Contributor Type" : {
    "@id" : "http://vocab.fairdatacollective.org/gdmt/Person",
    "rdfs:label" : "Person"
  },
  "@context" : {
    "Contributor Type" : "http://purl.org/radx-terms/metadata-terms/contributorType"
  }
}
```

</div>
### Contributor Name
<span class="badge badge--optional">Optional</span>

The full name of the contributor.

<div class="example">
<div class="example-heading">Example</div>
<p>Josiah Carberry</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Contributor Name" : {
    "@value" : "Josiah Carberry"
  },
  "@context" : {
    "Contributor Name" : "http://purl.org/radx-terms/metadata-terms/contributorName"
  }
}
```

</div>
### Contributor Given Name
<span class="badge badge--optional">Optional</span>

If the contributor is a person, the personal name(s) of the contributor (e.g., first and optionally middle name in Western languagues, optionally middle and last name in Asian languages).

<div class="example">
<div class="example-heading">Example</div>
<p>Josiah</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Contributor Given Name" : {
    "@value" : "Josiah"
  },
  "@context" : {
    "Contributor Given Name" : "http://purl.org/radx-terms/metadata-terms/contributorGivenName"
  }
}
```

</div>
### Contributor Family Name
<span class="badge badge--optional">Optional</span>

If the contributor is a person, the surname(s) of the conributor (e.g., last name in Western languagues, first name in Asian languages).

<div class="example">
<div class="example-heading">Example</div>
<p>Carberry</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Contributor Family Name" : {
    "@value" : "Carberry"
  },
  "@context" : {
    "Contributor Family Name" : "http://purl.org/radx-terms/metadata-terms/contributorFamilyName"
  }
}
```

</div>
### Contributor Identifier
<span class="badge badge--optional">Optional</span>

Globally unique string that identifies the contributor (an individual or legal entity). For individuals, this is typically an ORCID; for research organizations, it is typically an ROR.

The ORCID iD is an https IRI with a 16-digit number that is compatible with the ISO Standard (ISO 27729), also known as the International Standard Name Identifier (ISNI), e.g. https://orcid.org/0000-0001-2345-6789 

_[ORCID](https://orcid.org) provides a persistent digital identifier (an ORCID iD) that distinguishes each researcher from every other researcher. You can connect your iD with your professional information—affiliations, grants, publications, peer review, and more. You can use your iD to share your information with other systems, ensuring you get recognition for all your contributions, saving you time and hassle, and reducing the risk of errors._

The ROR is an https IRI that uniquely identifies most research organizatiions. 

_The [Research Organization Registry (ROR)](https://ror.org) is a community-led project to develop an open, sustainable, usable, and unique identifier for every research organization in the world._

<div class="example">
<div class="example-heading">Example</div>
<p>https://orcid.org/0000-0002-1825-0097</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Contributor Identifier" : {
    "@value" : "https://orcid.org/0000-0002-1825-0097"
  },
  "@context" : {
    "Contributor Identifier" : "http://purl.org/radx-terms/metadata-terms/contributorIdentifier"
  }
}
```

</div>
### Contributor Identifier Scheme
<span class="badge badge--optional">Optional</span>

The name of the scheme or authority used for the Contributor Identifier.

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/IdentifierScheme).

[GRID](https://www.grid.ac/)  |  [ISNI](https://isni.org/)  |  [LinkedIn ID](https://www.linkedin.com/)  |  [ORCiD](https://orcid.org/)  |  [ResearcherID](http://www.researcherid.com/)  |  [ROR](https://ror.org/)  |  [Scopus](https://www.scopus.com/)
<div class="example">
<div class="example-heading">Example</div>
<p><a href="https://orcid.org">ORCID</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Contributor Identifier Scheme" : {
    "@id" : "https://orcid.org",
    "rdfs:label" : "ORCID"
  },
  "@context" : {
    "Contributor Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/contributorIdentifierScheme"
  }
}
```

</div>
### Contributor Affiliation
<span class="badge badge--optional">Optional</span>

If the contributor is a person, the organizational or institutional affiliation of the contributor.

<div class="example">
<div class="example-heading">Example</div>
<p>Brown University</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Contributor Affiliation" : {
    "@value" : "Brown University"
  },
  "@context" : {
    "Contributor Affiliation" : "http://purl.org/radx-terms/metadata-terms/contributorAffiliation"
  }
}
```

</div>
### Contributor Affiliation Identifier
<span class="badge badge--optional">Optional</span>

Globally unique string that identifies the organizational affiliation of the contributor.  

We suggest that you an identifier from the [Research Organization Registry (ROR)](https://ror.org), a community-led project to develop an open, sustainable, usable, and unique identifier for every research organization in the world.

<div class="example">
<div class="example-heading">Example</div>
<p>https://ror.org/05gq02987</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Contributor Affiliation Identifier" : {
    "@value" : "https://ror.org/05gq02987"
  },
  "@context" : {
    "Contributor Affiliation Identifier" : "http://purl.org/radx-terms/metadata-terms/contributorAffiliationIdentifier"
  }
}
```

</div>
### Contributor Affiliation Identifier Scheme
<span class="badge badge--optional">Optional</span>

The name of the scheme or authority used for the Contributor Affiliation Identifier.

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/IdentifierScheme).

[GRID](https://www.grid.ac/)  |  [ISNI](https://isni.org/)  |  [LinkedIn ID](https://www.linkedin.com/)  |  [ORCiD](https://orcid.org/)  |  [ResearcherID](http://www.researcherid.com/)  |  [ROR](https://ror.org/)  |  [Scopus](https://www.scopus.com/)
<div class="example">
<div class="example-heading">Example</div>
<p><a href="https://ror.org">ROR</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Contributor Affiliation Identifier Scheme" : {
    "@id" : "https://ror.org",
    "rdfs:label" : "ROR"
  },
  "@context" : {
    "Contributor Affiliation Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/contributorAffiliationIdentifierScheme"
  }
}
```

</div>
### Contributor Email
<span class="badge badge--optional">Optional</span>

An email address of the contributor.

<div class="example">
<div class="example-heading">Example</div>
<p>josiah.carberry@example.com</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Contributor Email" : {
    "@value" : "josiah.carberry@example.com"
  },
  "@context" : {
    "Contributor Email" : "http://purl.org/radx-terms/metadata-terms/contributorEmail"
  }
}
```

</div>
### Contributor Role
<span class="badge badge--optional">Optional</span>

The role of the contributor in bringing the described data file into existence.

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/ContributorRole).

[Contact Person](http://vocab.fairdatacollective.org/gdmt/ContactPerson)  |  [Data Collector](http://vocab.fairdatacollective.org/gdmt/DataCollector)  |  [Data Curator](http://vocab.fairdatacollective.org/gdmt/DataCurator)  |  [Data Manager](http://vocab.fairdatacollective.org/gdmt/DataManager)  |  [Distributor](http://vocab.fairdatacollective.org/gdmt/Distributor)  |  [Editor](http://vocab.fairdatacollective.org/gdmt/Editor)  |  [Hosting Institution](http://vocab.fairdatacollective.org/gdmt/HostingInstitution)  |  [Other Role](http://vocab.fairdatacollective.org/gdmt/OtherRole)  |  [Producer](http://vocab.fairdatacollective.org/gdmt/Producer)  |  [Project Leader](http://vocab.fairdatacollective.org/gdmt/ProjectLeader)  |  [Project Manager](http://vocab.fairdatacollective.org/gdmt/ProjectManager)  |  [Project Member](http://vocab.fairdatacollective.org/gdmt/ProjectMember)  |  [Registration Agency](http://vocab.fairdatacollective.org/gdmt/RegistrationAgency)  |  [Registration Authority](http://vocab.fairdatacollective.org/gdmt/RegistrationAuthority)  |  [Related Person](http://vocab.fairdatacollective.org/gdmt/RelatedPerson)  |  [Research Group](http://vocab.fairdatacollective.org/gdmt/ResearchGroup)  |  [Researcher](http://vocab.fairdatacollective.org/gdmt/Researcher)  |  [Rights Holder](http://vocab.fairdatacollective.org/gdmt/RightsHolder)  |  [Sponsor](http://vocab.fairdatacollective.org/gdmt/Sponsor)  |  [Supervisor](http://vocab.fairdatacollective.org/gdmt/Supervisor)  |  [Work Package Leader](http://vocab.fairdatacollective.org/gdmt/WorkPackageLeader)
<div class="example">
<div class="example-heading">Example</div>
<p><a href="http://vocab.fairdatacollective.org/gdmt/DataCollector">Data Collector</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Contributor Role" : {
    "@id" : "http://vocab.fairdatacollective.org/gdmt/DataCollector",
    "rdfs:label" : "Data Collector"
  },
  "@context" : {
    "Contributor Role" : "http://purl.org/radx-terms/metadata-terms/contributorRole"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Contributors" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/c1cec2b6-3023-4043-bf50-da8dac650da5",
    "Contributor Type" : {
      "@id" : "http://vocab.fairdatacollective.org/gdmt/Person",
      "rdfs:label" : "Person"
    },
    "Contributor Name" : {
      "@value" : "Josiah Carberry"
    },
    "Contributor Given Name" : {
      "@value" : "Josiah"
    },
    "Contributor Family Name" : {
      "@value" : "Carberry"
    },
    "Contributor Identifier" : {
      "@value" : "https://orcid.org/0000-0002-1825-0097"
    },
    "Contributor Identifier Scheme" : {
      "@id" : "https://orcid.org",
      "rdfs:label" : "ORCID"
    },
    "Contributor Affiliation" : {
      "@value" : "Brown University"
    },
    "Contributor Affiliation Identifier" : {
      "@value" : "https://ror.org/05gq02987"
    },
    "Contributor Affiliation Identifier Scheme" : {
      "@id" : "https://ror.org",
      "rdfs:label" : "ROR"
    },
    "Contributor Email" : {
      "@value" : "josiah.carberry@example.com"
    },
    "Contributor Role" : {
      "@id" : "http://vocab.fairdatacollective.org/gdmt/DataCollector",
      "rdfs:label" : "Data Collector"
    },
    "@context" : {
      "Contributor Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/contributorIdentifierScheme",
      "Contributor Role" : "http://purl.org/radx-terms/metadata-terms/contributorRole",
      "Contributor Identifier" : "http://purl.org/radx-terms/metadata-terms/contributorIdentifier",
      "Contributor Email" : "http://purl.org/radx-terms/metadata-terms/contributorEmail",
      "Contributor Affiliation Identifier" : "http://purl.org/radx-terms/metadata-terms/contributorAffiliationIdentifier",
      "Contributor Type" : "http://purl.org/radx-terms/metadata-terms/contributorType",
      "Contributor Given Name" : "http://purl.org/radx-terms/metadata-terms/contributorGivenName",
      "Contributor Affiliation" : "http://purl.org/radx-terms/metadata-terms/contributorAffiliation",
      "Contributor Family Name" : "http://purl.org/radx-terms/metadata-terms/contributorFamilyName",
      "Contributor Name" : "http://purl.org/radx-terms/metadata-terms/contributorName",
      "Contributor Affiliation Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/contributorAffiliationIdentifierScheme"
    }
  } ],
  "@context" : {
    "Data File Contributors" : "http://purl.org/radx-terms/metadata-terms/contributorDescriptor"
  }
}
```

</div>
## Data File Rights
<span class="badge badge--multi">Multi-valued</span>

A list of ways in which the data file may or may not be accessed and used.

### License Name
<span class="badge badge--optional">Optional</span>

A standardized version of the license name.

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/LicenseIdentifier).

[0BSD](http://vocab.fairdatacollective.org/gdmt/0BSD)  |  [AAL](http://vocab.fairdatacollective.org/gdmt/AAL)  |  [Abstyles](http://vocab.fairdatacollective.org/gdmt/Abstyles)  |  [Adobe-2006](http://vocab.fairdatacollective.org/gdmt/Adobe2006)  |  [Adobe-Glyph](http://vocab.fairdatacollective.org/gdmt/AdobeGlyph)  |  [ADSL](http://vocab.fairdatacollective.org/gdmt/ADSL)  |  [AFL-1.1](http://vocab.fairdatacollective.org/gdmt/AFL1.1)  |  [AFL-1.2](http://vocab.fairdatacollective.org/gdmt/AFL1.2)  |  [AFL-2.0](http://vocab.fairdatacollective.org/gdmt/AFL2.0)  |  [AFL-2.1](http://vocab.fairdatacollective.org/gdmt/AFL2.1)  |  [AFL-3.0](http://vocab.fairdatacollective.org/gdmt/AFL3.0)  |  [Afmparse](http://vocab.fairdatacollective.org/gdmt/Afmparse)  |  [AGPL-1.0-only](http://vocab.fairdatacollective.org/gdmt/AGPL1.0only)  |  [AGPL-1.0-or-later](http://vocab.fairdatacollective.org/gdmt/AGPL1.0orlater)  |  [AGPL-3.0-only](http://vocab.fairdatacollective.org/gdmt/AGPL3.0only)  |  [AGPL-3.0-or-later](http://vocab.fairdatacollective.org/gdmt/AGPL3.0orlater)  |  [Aladdin](http://vocab.fairdatacollective.org/gdmt/Aladdin)  |  [AMDPLPA](http://vocab.fairdatacollective.org/gdmt/AMDPLPA)  |  [AML](http://vocab.fairdatacollective.org/gdmt/AML)  |  [AMPAS](http://vocab.fairdatacollective.org/gdmt/AMPAS)  |  [ANTLR-PD-fallback](http://vocab.fairdatacollective.org/gdmt/ANTLRPDfallback)  |  [ANTLR-PD](http://vocab.fairdatacollective.org/gdmt/ANTLRPD)  |  [Apache-1.0](http://vocab.fairdatacollective.org/gdmt/Apache1.0)  |  [Apache-1.1](http://vocab.fairdatacollective.org/gdmt/Apache1.1)  |  [Apache-2.0](http://vocab.fairdatacollective.org/gdmt/Apache2.0)  |  [APAFML](http://vocab.fairdatacollective.org/gdmt/APAFML)  |  [APL-1.0](http://vocab.fairdatacollective.org/gdmt/APL1.0)  |  [APSL-1.0](http://vocab.fairdatacollective.org/gdmt/APSL1.0)  |  [APSL-1.1](http://vocab.fairdatacollective.org/gdmt/APSL1.1)  |  [APSL-1.2](http://vocab.fairdatacollective.org/gdmt/APSL1.2)  |  [APSL-2.0](http://vocab.fairdatacollective.org/gdmt/APSL2.0)  |  [Artistic-1.0-cl8](http://vocab.fairdatacollective.org/gdmt/Artistic1.0cl8)  |  [Artistic-1.0-Perl](http://vocab.fairdatacollective.org/gdmt/Artistic1.0Perl)  |  [Artistic-1.0](http://vocab.fairdatacollective.org/gdmt/Artistic1.0)  |  [Artistic-2.0](http://vocab.fairdatacollective.org/gdmt/Artistic2.0)  |  [Bahyph](http://vocab.fairdatacollective.org/gdmt/Bahyph)  |  [Barr](http://vocab.fairdatacollective.org/gdmt/Barr)  |  [Beerware](http://vocab.fairdatacollective.org/gdmt/Beerware)  |  [BitTorrent-1.0](http://vocab.fairdatacollective.org/gdmt/BitTorrent1.0)  |  [BitTorrent-1.1](http://vocab.fairdatacollective.org/gdmt/BitTorrent1.1)  |  [blessing](http://vocab.fairdatacollective.org/gdmt/blessing)  |  [BlueOak-1.0.0](http://vocab.fairdatacollective.org/gdmt/BlueOak1.0.0)  |  [Borceux](http://vocab.fairdatacollective.org/gdmt/Borceux)  |  [BSD-1-Clause](http://vocab.fairdatacollective.org/gdmt/BSD1Clause)  |  [BSD-2-Clause-Patent](http://vocab.fairdatacollective.org/gdmt/BSD2ClausePatent)  |  [BSD-2-Clause-Views](http://vocab.fairdatacollective.org/gdmt/BSD2ClauseViews)  |  [BSD-2-Clause](http://vocab.fairdatacollective.org/gdmt/BSD2Clause)  |  [BSD-3-Clause-Attribution](http://vocab.fairdatacollective.org/gdmt/BSD3ClauseAttribution)  |  [BSD-3-Clause-Clear](http://vocab.fairdatacollective.org/gdmt/BSD3ClauseClear)  |  [BSD-3-Clause-LBNL](http://vocab.fairdatacollective.org/gdmt/BSD3ClauseLBNL)  |  [BSD-3-Clause-No-Nuclear-License-2014](http://vocab.fairdatacollective.org/gdmt/BSD3ClauseNoNuclearLicense2014)  |  [BSD-3-Clause-No-Nuclear-License](http://vocab.fairdatacollective.org/gdmt/BSD3ClauseNoNuclearLicense)  |  [BSD-3-Clause-No-Nuclear-Warranty](http://vocab.fairdatacollective.org/gdmt/BSD3ClauseNoNuclearWarranty)  |  [BSD-3-Clause-Open-MPI](http://vocab.fairdatacollective.org/gdmt/BSD3ClauseOpenMPI)  |  [BSD-3-Clause](http://vocab.fairdatacollective.org/gdmt/BSD3Clause)  |  [BSD-4-Clause-UC](http://vocab.fairdatacollective.org/gdmt/BSD4ClauseUC)  |  [BSD-4-Clause](http://vocab.fairdatacollective.org/gdmt/BSD4Clause)  |  [BSD-Protection](http://vocab.fairdatacollective.org/gdmt/BSDProtection)  |  [BSD-Source-Code](http://vocab.fairdatacollective.org/gdmt/BSDSourceCode)  |  [BSL-1.0](http://vocab.fairdatacollective.org/gdmt/BSL1.0)  |  [BUSL-1.1](http://vocab.fairdatacollective.org/gdmt/BUSL1.1)  |  [bzip2-1.0.5](http://vocab.fairdatacollective.org/gdmt/bzip21.0.5)  |  [bzip2-1.0.6](http://vocab.fairdatacollective.org/gdmt/bzip21.0.6)  |  [CAL-1.0-Combined-Work-Exception](http://vocab.fairdatacollective.org/gdmt/CAL1.0CombinedWorkException)  |  [CAL-1.0](http://vocab.fairdatacollective.org/gdmt/CAL1.0)  |  [Caldera](http://vocab.fairdatacollective.org/gdmt/Caldera)  |  [CATOSL-1.1](http://vocab.fairdatacollective.org/gdmt/CATOSL1.1)  |  [CC-BY-1.0](http://vocab.fairdatacollective.org/gdmt/CCBY1.0)  |  [CC-BY-2.0](http://vocab.fairdatacollective.org/gdmt/CCBY2.0)  |  [CC-BY-2.5](http://vocab.fairdatacollective.org/gdmt/CCBY2.5)  |  [CC-BY-3.0-AT](http://vocab.fairdatacollective.org/gdmt/CCBY3.0AT)  |  [CC-BY-3.0-US](http://vocab.fairdatacollective.org/gdmt/CCBY3.0US)  |  [CC-BY-3.0](http://vocab.fairdatacollective.org/gdmt/CCBY3.0)  |  [CC-BY-4.0](http://vocab.fairdatacollective.org/gdmt/CCBY4.0)  |  [CC-BY-NC-1.0](http://vocab.fairdatacollective.org/gdmt/CCBYNC1.0)  |  [CC-BY-NC-2.0](http://vocab.fairdatacollective.org/gdmt/CCBYNC2.0)  |  [CC-BY-NC-2.5](http://vocab.fairdatacollective.org/gdmt/CCBYNC2.5)  |  [CC-BY-NC-3.0](http://vocab.fairdatacollective.org/gdmt/CCBYNC3.0)  |  [CC-BY-NC-4.0](http://vocab.fairdatacollective.org/gdmt/CCBYNC4.0)  |  [CC-BY-NC-ND-1.0](http://vocab.fairdatacollective.org/gdmt/CCBYNCND1.0)  |  [CC-BY-NC-ND-2.0](http://vocab.fairdatacollective.org/gdmt/CCBYNCND2.0)  |  [CC-BY-NC-ND-2.5](http://vocab.fairdatacollective.org/gdmt/CCBYNCND2.5)  |  [CC-BY-NC-ND-3.0-IGO](http://vocab.fairdatacollective.org/gdmt/CCBYNCND3.0IGO)  |  [CC-BY-NC-ND-3.0](http://vocab.fairdatacollective.org/gdmt/CCBYNCND3.0)  |  [CC-BY-NC-ND-4.0](http://vocab.fairdatacollective.org/gdmt/CCBYNCND4.0)  |  [CC-BY-NC-SA-1.0](http://vocab.fairdatacollective.org/gdmt/CCBYNCSA1.0)  |  [CC-BY-NC-SA-2.0](http://vocab.fairdatacollective.org/gdmt/CCBYNCSA2.0)  |  [CC-BY-NC-SA-2.5](http://vocab.fairdatacollective.org/gdmt/CCBYNCSA2.5)  |  [CC-BY-NC-SA-3.0](http://vocab.fairdatacollective.org/gdmt/CCBYNCSA3.0)  |  [CC-BY-NC-SA-4.0](http://vocab.fairdatacollective.org/gdmt/CCBYNCSA4.0)  |  [CC-BY-ND-1.0](http://vocab.fairdatacollective.org/gdmt/CCBYND1.0)  |  [CC-BY-ND-2.0](http://vocab.fairdatacollective.org/gdmt/CCBYND2.0)  |  [CC-BY-ND-2.5](http://vocab.fairdatacollective.org/gdmt/CCBYND2.5)  |  [CC-BY-ND-3.0](http://vocab.fairdatacollective.org/gdmt/CCBYND3.0)  |  [CC-BY-ND-4.0](http://vocab.fairdatacollective.org/gdmt/CCBYND4.0)  |  [CC-BY-SA-1.0](http://vocab.fairdatacollective.org/gdmt/CCBYSA1.0)  |  [CC-BY-SA-2.0-UK](http://vocab.fairdatacollective.org/gdmt/CCBYSA2.0UK)  |  [CC-BY-SA-2.0](http://vocab.fairdatacollective.org/gdmt/CCBYSA2.0)  |  [CC-BY-SA-2.5](http://vocab.fairdatacollective.org/gdmt/CCBYSA2.5)  |  [CC-BY-SA-3.0-AT](http://vocab.fairdatacollective.org/gdmt/CCBYSA3.0AT)  |  [CC-BY-SA-3.0](http://vocab.fairdatacollective.org/gdmt/CCBYSA3.0)  |  [CC-BY-SA-4.0](http://vocab.fairdatacollective.org/gdmt/CCBYSA4.0)  |  [CC-PDDC](http://vocab.fairdatacollective.org/gdmt/CCPDDC)  |  [CC0-1.0](http://vocab.fairdatacollective.org/gdmt/CC01.0)  |  [CDDL-1.0](http://vocab.fairdatacollective.org/gdmt/CDDL1.0)  |  [CDDL-1.1](http://vocab.fairdatacollective.org/gdmt/CDDL1.1)  |  [CDLA-Permissive-1.0](http://vocab.fairdatacollective.org/gdmt/CDLAPermissive1.0)  |  [CDLA-Sharing-1.0](http://vocab.fairdatacollective.org/gdmt/CDLASharing1.0)  |  [CECILL-1.0](http://vocab.fairdatacollective.org/gdmt/CECILL1.0)  |  [CECILL-1.1](http://vocab.fairdatacollective.org/gdmt/CECILL1.1)  |  [CECILL-2.0](http://vocab.fairdatacollective.org/gdmt/CECILL2.0)  |  [CECILL-2.1](http://vocab.fairdatacollective.org/gdmt/CECILL2.1)  |  [CECILL-B](http://vocab.fairdatacollective.org/gdmt/CECILLB)  |  [CECILL-C](http://vocab.fairdatacollective.org/gdmt/CECILLC)  |  [CERN-OHL-1.1](http://vocab.fairdatacollective.org/gdmt/CERNOHL1.1)  |  [CERN-OHL-1.2](http://vocab.fairdatacollective.org/gdmt/CERNOHL1.2)  |  [CERN-OHL-P-2.0](http://vocab.fairdatacollective.org/gdmt/CERNOHLP2.0)  |  [CERN-OHL-S-2.0](http://vocab.fairdatacollective.org/gdmt/CERNOHLS2.0)  |  [CERN-OHL-W-2.0](http://vocab.fairdatacollective.org/gdmt/CERNOHLW2.0)  |  [ClArtistic](http://vocab.fairdatacollective.org/gdmt/ClArtistic)  |  [CNRI-Jython](http://vocab.fairdatacollective.org/gdmt/CNRIJython)  |  [CNRI-Python-GPL-Compatible](http://vocab.fairdatacollective.org/gdmt/CNRIPythonGPLCompatible)  |  [CNRI-Python](http://vocab.fairdatacollective.org/gdmt/CNRIPython)  |  [Condor-1.1](http://vocab.fairdatacollective.org/gdmt/Condor1.1)  |  [copyleft-next-0.3.0](http://vocab.fairdatacollective.org/gdmt/copyleftnext0.3.0)  |  [copyleft-next-0.3.1](http://vocab.fairdatacollective.org/gdmt/copyleftnext0.3.1)  |  [CPAL-1.0](http://vocab.fairdatacollective.org/gdmt/CPAL1.0)  |  [CPL-1.0](http://vocab.fairdatacollective.org/gdmt/CPL1.0)  |  [CPOL-1.02](http://vocab.fairdatacollective.org/gdmt/CPOL1.02)  |  [Crossword](http://vocab.fairdatacollective.org/gdmt/Crossword)  |  [CrystalStacker](http://vocab.fairdatacollective.org/gdmt/CrystalStacker)  |  [CUA-OPL-1.0](http://vocab.fairdatacollective.org/gdmt/CUAOPL1.0)  |  [Cube](http://vocab.fairdatacollective.org/gdmt/Cube)  |  [curl](http://vocab.fairdatacollective.org/gdmt/curl)  |  [D-FSL-1.0](http://vocab.fairdatacollective.org/gdmt/DFSL1.0)  |  [diffmark](http://vocab.fairdatacollective.org/gdmt/diffmark)  |  [DOC](http://vocab.fairdatacollective.org/gdmt/DOC)  |  [Dotseqn](http://vocab.fairdatacollective.org/gdmt/Dotseqn)  |  [DSDP](http://vocab.fairdatacollective.org/gdmt/DSDP)  |  [dvipdfm](http://vocab.fairdatacollective.org/gdmt/dvipdfm)  |  [ECL-1.0](http://vocab.fairdatacollective.org/gdmt/ECL1.0)  |  [ECL-2.0](http://vocab.fairdatacollective.org/gdmt/ECL2.0)  |  [EFL-1.0](http://vocab.fairdatacollective.org/gdmt/EFL1.0)  |  [EFL-2.0](http://vocab.fairdatacollective.org/gdmt/EFL2.0)  |  [eGenix](http://vocab.fairdatacollective.org/gdmt/eGenix)  |  [Entessa](http://vocab.fairdatacollective.org/gdmt/Entessa)  |  [EPICS](http://vocab.fairdatacollective.org/gdmt/EPICS)  |  [EPL-1.0](http://vocab.fairdatacollective.org/gdmt/EPL1.0)  |  [EPL-2.0](http://vocab.fairdatacollective.org/gdmt/EPL2.0)  |  [ErlPL-1.1](http://vocab.fairdatacollective.org/gdmt/ErlPL1.1)  |  [etalab-2.0](http://vocab.fairdatacollective.org/gdmt/etalab2.0)  |  [EUDatagrid](http://vocab.fairdatacollective.org/gdmt/EUDatagrid)  |  [EUPL-1.0](http://vocab.fairdatacollective.org/gdmt/EUPL1.0)  |  [EUPL-1.1](http://vocab.fairdatacollective.org/gdmt/EUPL1.1)  |  [EUPL-1.2](http://vocab.fairdatacollective.org/gdmt/EUPL1.2)  |  [Eurosym](http://vocab.fairdatacollective.org/gdmt/Eurosym)  |  [Fair](http://vocab.fairdatacollective.org/gdmt/Fair)  |  [Frameworx-1.0](http://vocab.fairdatacollective.org/gdmt/Frameworx1.0)  |  [FreeImage](http://vocab.fairdatacollective.org/gdmt/FreeImage)  |  [FSFAP](http://vocab.fairdatacollective.org/gdmt/FSFAP)  |  [FSFUL](http://vocab.fairdatacollective.org/gdmt/FSFUL)  |  [FSFULLR](http://vocab.fairdatacollective.org/gdmt/FSFULLR)  |  [FTL](http://vocab.fairdatacollective.org/gdmt/FTL)  |  [GFDL-1.1-invariants-only](http://vocab.fairdatacollective.org/gdmt/GFDL1.1invariantsonly)  |  [GFDL-1.1-invariants-or-later](http://vocab.fairdatacollective.org/gdmt/GFDL1.1invariantsorlater)  |  [GFDL-1.1-no-invariants-only](http://vocab.fairdatacollective.org/gdmt/GFDL1.1noinvariantsonly)  |  [GFDL-1.1-no-invariants-or-later](http://vocab.fairdatacollective.org/gdmt/GFDL1.1noinvariantsorlater)  |  [GFDL-1.1-only](http://vocab.fairdatacollective.org/gdmt/GFDL1.1only)  |  [GFDL-1.1-or-later](http://vocab.fairdatacollective.org/gdmt/GFDL1.1orlater)  |  [GFDL-1.2-invariants-only](http://vocab.fairdatacollective.org/gdmt/GFDL1.2invariantsonly)  |  [GFDL-1.2-invariants-or-later](http://vocab.fairdatacollective.org/gdmt/GFDL1.2invariantsorlater)  |  [GFDL-1.2-no-invariants-only](http://vocab.fairdatacollective.org/gdmt/GFDL1.2noinvariantsonly)  |  [GFDL-1.2-no-invariants-or-later](http://vocab.fairdatacollective.org/gdmt/GFDL1.2noinvariantsorlater)  |  [GFDL-1.2-only](http://vocab.fairdatacollective.org/gdmt/GFDL1.2only)  |  [GFDL-1.2-or-later](http://vocab.fairdatacollective.org/gdmt/GFDL1.2orlater)  |  [GFDL-1.3-invariants-only](http://vocab.fairdatacollective.org/gdmt/GFDL1.3invariantsonly)  |  [GFDL-1.3-invariants-or-later](http://vocab.fairdatacollective.org/gdmt/GFDL1.3invariantsorlater)  |  [GFDL-1.3-no-invariants-only](http://vocab.fairdatacollective.org/gdmt/GFDL1.3noinvariantsonly)  |  [GFDL-1.3-no-invariants-or-later](http://vocab.fairdatacollective.org/gdmt/GFDL1.3noinvariantsorlater)  |  [GFDL-1.3-only](http://vocab.fairdatacollective.org/gdmt/GFDL1.3only)  |  [GFDL-1.3-or-later](http://vocab.fairdatacollective.org/gdmt/GFDL1.3orlater)  |  [Giftware](http://vocab.fairdatacollective.org/gdmt/Giftware)  |  [GL2PS](http://vocab.fairdatacollective.org/gdmt/GL2PS)  |  [Glide](http://vocab.fairdatacollective.org/gdmt/Glide)  |  [Glulxe](http://vocab.fairdatacollective.org/gdmt/Glulxe)  |  [GLWTPL](http://vocab.fairdatacollective.org/gdmt/GLWTPL)  |  [gnuplot](http://vocab.fairdatacollective.org/gdmt/gnuplot)  |  [GPL-1.0-only](http://vocab.fairdatacollective.org/gdmt/GPL1.0only)  |  [GPL-1.0-or-later](http://vocab.fairdatacollective.org/gdmt/GPL1.0orlater)  |  [GPL-2.0-only](http://vocab.fairdatacollective.org/gdmt/GPL2.0only)  |  [GPL-2.0-or-later](http://vocab.fairdatacollective.org/gdmt/GPL2.0orlater)  |  [GPL-3.0-only](http://vocab.fairdatacollective.org/gdmt/GPL3.0only)  |  [GPL-3.0-or-later](http://vocab.fairdatacollective.org/gdmt/GPL3.0orlater)  |  [gSOAP-1.3b](http://vocab.fairdatacollective.org/gdmt/gSOAP1.3b)  |  [HaskellReport](http://vocab.fairdatacollective.org/gdmt/HaskellReport)  |  [Hippocratic-2.1](http://vocab.fairdatacollective.org/gdmt/Hippocratic2.1)  |  [HPND-sell-variant](http://vocab.fairdatacollective.org/gdmt/HPNDsellvariant)  |  [HPND](http://vocab.fairdatacollective.org/gdmt/HPND)  |  [HTMLTIDY](http://vocab.fairdatacollective.org/gdmt/HTMLTIDY)  |  [IBM-pibs](http://vocab.fairdatacollective.org/gdmt/IBMpibs)  |  [ICU](http://vocab.fairdatacollective.org/gdmt/ICU)  |  [IJG](http://vocab.fairdatacollective.org/gdmt/IJG)  |  [ImageMagick](http://vocab.fairdatacollective.org/gdmt/ImageMagick)  |  [iMatix](http://vocab.fairdatacollective.org/gdmt/iMatix)  |  [Imlib2](http://vocab.fairdatacollective.org/gdmt/Imlib2)  |  [Info-ZIP](http://vocab.fairdatacollective.org/gdmt/InfoZIP)  |  [Intel-ACPI](http://vocab.fairdatacollective.org/gdmt/IntelACPI)  |  [Intel](http://vocab.fairdatacollective.org/gdmt/Intel)  |  [Interbase-1.0](http://vocab.fairdatacollective.org/gdmt/Interbase1.0)  |  [IPA](http://vocab.fairdatacollective.org/gdmt/IPA)  |  [IPL-1.0](http://vocab.fairdatacollective.org/gdmt/IPL1.0)  |  [ISC](http://vocab.fairdatacollective.org/gdmt/ISC)  |  [JasPer-2.0](http://vocab.fairdatacollective.org/gdmt/JasPer2.0)  |  [JPNIC](http://vocab.fairdatacollective.org/gdmt/JPNIC)  |  [JSON](http://vocab.fairdatacollective.org/gdmt/JSON)  |  [LAL-1.2](http://vocab.fairdatacollective.org/gdmt/LAL1.2)  |  [LAL-1.3](http://vocab.fairdatacollective.org/gdmt/LAL1.3)  |  [Latex2e](http://vocab.fairdatacollective.org/gdmt/Latex2e)  |  [Leptonica](http://vocab.fairdatacollective.org/gdmt/Leptonica)  |  [LGPL-2.0-only](http://vocab.fairdatacollective.org/gdmt/LGPL2.0only)  |  [LGPL-2.0-or-later](http://vocab.fairdatacollective.org/gdmt/LGPL2.0orlater)  |  [LGPL-2.1-only](http://vocab.fairdatacollective.org/gdmt/LGPL2.1only)  |  [LGPL-2.1-or-later](http://vocab.fairdatacollective.org/gdmt/LGPL2.1orlater)  |  [LGPL-3.0-only](http://vocab.fairdatacollective.org/gdmt/LGPL3.0only)  |  [LGPL-3.0-or-later](http://vocab.fairdatacollective.org/gdmt/LGPL3.0orlater)  |  [LGPLLR](http://vocab.fairdatacollective.org/gdmt/LGPLLR)  |  [libpng-2.0](http://vocab.fairdatacollective.org/gdmt/libpng2.0)  |  [Libpng](http://vocab.fairdatacollective.org/gdmt/Libpng)  |  [libselinux-1.0](http://vocab.fairdatacollective.org/gdmt/libselinux1.0)  |  [libtiff](http://vocab.fairdatacollective.org/gdmt/libtiff)  |  [LiLiQ-P-1.1](http://vocab.fairdatacollective.org/gdmt/LiLiQP1.1)  |  [LiLiQ-R-1.1](http://vocab.fairdatacollective.org/gdmt/LiLiQR1.1)  |  [LiLiQ-Rplus-1.1](http://vocab.fairdatacollective.org/gdmt/LiLiQRplus1.1)  |  [Linux-OpenIB](http://vocab.fairdatacollective.org/gdmt/LinuxOpenIB)  |  [LPL-1.02](http://vocab.fairdatacollective.org/gdmt/LPL1.02)  |  [LPL-1.0](http://vocab.fairdatacollective.org/gdmt/LPL1.0)  |  [LPPL-1.0](http://vocab.fairdatacollective.org/gdmt/LPPL1.0)  |  [LPPL-1.1](http://vocab.fairdatacollective.org/gdmt/LPPL1.1)  |  [LPPL-1.2](http://vocab.fairdatacollective.org/gdmt/LPPL1.2)  |  [LPPL-1.3a](http://vocab.fairdatacollective.org/gdmt/LPPL1.3a)  |  [LPPL-1.3c](http://vocab.fairdatacollective.org/gdmt/LPPL1.3c)  |  [MakeIndex](http://vocab.fairdatacollective.org/gdmt/MakeIndex)  |  [MirOS](http://vocab.fairdatacollective.org/gdmt/MirOS)  |  [MIT-0](http://vocab.fairdatacollective.org/gdmt/MIT0)  |  [MIT-advertising](http://vocab.fairdatacollective.org/gdmt/MITadvertising)  |  [MIT-CMU](http://vocab.fairdatacollective.org/gdmt/MITCMU)  |  [MIT-enna](http://vocab.fairdatacollective.org/gdmt/MITenna)  |  [MIT-feh](http://vocab.fairdatacollective.org/gdmt/MITfeh)  |  [MIT-open-group](http://vocab.fairdatacollective.org/gdmt/MITopengroup)  |  [MIT](http://vocab.fairdatacollective.org/gdmt/MIT)  |  [MITNFA](http://vocab.fairdatacollective.org/gdmt/MITNFA)  |  [Motosoto](http://vocab.fairdatacollective.org/gdmt/Motosoto)  |  [mpich2](http://vocab.fairdatacollective.org/gdmt/mpich2)  |  [MPL-1.0](http://vocab.fairdatacollective.org/gdmt/MPL1.0)  |  [MPL-1.1](http://vocab.fairdatacollective.org/gdmt/MPL1.1)  |  [MPL-2.0-no-copyleft-exception](http://vocab.fairdatacollective.org/gdmt/MPL2.0nocopyleftexception)  |  [MPL-2.0](http://vocab.fairdatacollective.org/gdmt/MPL2.0)  |  [MS-PL](http://vocab.fairdatacollective.org/gdmt/MSPL)  |  [MS-RL](http://vocab.fairdatacollective.org/gdmt/MSRL)  |  [MTLL](http://vocab.fairdatacollective.org/gdmt/MTLL)  |  [MulanPSL-1.0](http://vocab.fairdatacollective.org/gdmt/MulanPSL1.0)  |  [MulanPSL-2.0](http://vocab.fairdatacollective.org/gdmt/MulanPSL2.0)  |  [Multics](http://vocab.fairdatacollective.org/gdmt/Multics)  |  [Mup](http://vocab.fairdatacollective.org/gdmt/Mup)  |  [NASA-1.3](http://vocab.fairdatacollective.org/gdmt/NASA1.3)  |  [Naumen](http://vocab.fairdatacollective.org/gdmt/Naumen)  |  [NBPL-1.0](http://vocab.fairdatacollective.org/gdmt/NBPL1.0)  |  [NCGL-UK-2.0](http://vocab.fairdatacollective.org/gdmt/NCGLUK2.0)  |  [NCSA](http://vocab.fairdatacollective.org/gdmt/NCSA)  |  [Net-SNMP](http://vocab.fairdatacollective.org/gdmt/NetSNMP)  |  [NetCDF](http://vocab.fairdatacollective.org/gdmt/NetCDF)  |  [Newsletr](http://vocab.fairdatacollective.org/gdmt/Newsletr)  |  [NGPL](http://vocab.fairdatacollective.org/gdmt/NGPL)  |  [NIST-PD-fallback](http://vocab.fairdatacollective.org/gdmt/NISTPDfallback)  |  [NIST-PD](http://vocab.fairdatacollective.org/gdmt/NISTPD)  |  [NLOD-1.0](http://vocab.fairdatacollective.org/gdmt/NLOD1.0)  |  [NLPL](http://vocab.fairdatacollective.org/gdmt/NLPL)  |  [Nokia](http://vocab.fairdatacollective.org/gdmt/Nokia)  |  [NOSL](http://vocab.fairdatacollective.org/gdmt/NOSL)  |  [Noweb](http://vocab.fairdatacollective.org/gdmt/Noweb)  |  [NPL-1.0](http://vocab.fairdatacollective.org/gdmt/NPL1.0)  |  [NPL-1.1](http://vocab.fairdatacollective.org/gdmt/NPL1.1)  |  [NPOSL-3.0](http://vocab.fairdatacollective.org/gdmt/NPOSL3.0)  |  [NRL](http://vocab.fairdatacollective.org/gdmt/NRL)  |  [NTP-0](http://vocab.fairdatacollective.org/gdmt/NTP0)  |  [NTP](http://vocab.fairdatacollective.org/gdmt/NTP)  |  [O-UDA-1.0](http://vocab.fairdatacollective.org/gdmt/OUDA1.0)  |  [OCCT-PL](http://vocab.fairdatacollective.org/gdmt/OCCTPL)  |  [OCLC-2.0](http://vocab.fairdatacollective.org/gdmt/OCLC2.0)  |  [ODbL-1.0](http://vocab.fairdatacollective.org/gdmt/ODbL1.0)  |  [ODC-By-1.0](http://vocab.fairdatacollective.org/gdmt/ODCBy1.0)  |  [OFL-1.0-no-RFN](http://vocab.fairdatacollective.org/gdmt/OFL1.0noRFN)  |  [OFL-1.0-RFN](http://vocab.fairdatacollective.org/gdmt/OFL1.0RFN)  |  [OFL-1.0](http://vocab.fairdatacollective.org/gdmt/OFL1.0)  |  [OFL-1.1-no-RFN](http://vocab.fairdatacollective.org/gdmt/OFL1.1noRFN)  |  [OFL-1.1-RFN](http://vocab.fairdatacollective.org/gdmt/OFL1.1RFN)  |  [OFL-1.1](http://vocab.fairdatacollective.org/gdmt/OFL1.1)  |  [OGC-1.0](http://vocab.fairdatacollective.org/gdmt/OGC1.0)  |  [OGL-Canada-2.0](http://vocab.fairdatacollective.org/gdmt/OGLCanada2.0)  |  [OGL-UK-1.0](http://vocab.fairdatacollective.org/gdmt/OGLUK1.0)  |  [OGL-UK-2.0](http://vocab.fairdatacollective.org/gdmt/OGLUK2.0)  |  [OGL-UK-3.0](http://vocab.fairdatacollective.org/gdmt/OGLUK3.0)  |  [OGTSL](http://vocab.fairdatacollective.org/gdmt/OGTSL)  |  [OLDAP-1.1](http://vocab.fairdatacollective.org/gdmt/OLDAP1.1)  |  [OLDAP-1.2](http://vocab.fairdatacollective.org/gdmt/OLDAP1.2)  |  [OLDAP-1.3](http://vocab.fairdatacollective.org/gdmt/OLDAP1.3)  |  [OLDAP-1.4](http://vocab.fairdatacollective.org/gdmt/OLDAP1.4)  |  [OLDAP-2.0.1](http://vocab.fairdatacollective.org/gdmt/OLDAP2.0.1)  |  [OLDAP-2.0](http://vocab.fairdatacollective.org/gdmt/OLDAP2.0)  |  [OLDAP-2.1](http://vocab.fairdatacollective.org/gdmt/OLDAP2.1)  |  [OLDAP-2.2.1](http://vocab.fairdatacollective.org/gdmt/OLDAP2.2.1)  |  [OLDAP-2.2.2](http://vocab.fairdatacollective.org/gdmt/OLDAP2.2.2)  |  [OLDAP-2.2](http://vocab.fairdatacollective.org/gdmt/OLDAP2.2)  |  [OLDAP-2.3](http://vocab.fairdatacollective.org/gdmt/OLDAP2.3)  |  [OLDAP-2.4](http://vocab.fairdatacollective.org/gdmt/OLDAP2.4)  |  [OLDAP-2.5](http://vocab.fairdatacollective.org/gdmt/OLDAP2.5)  |  [OLDAP-2.6](http://vocab.fairdatacollective.org/gdmt/OLDAP2.6)  |  [OLDAP-2.7](http://vocab.fairdatacollective.org/gdmt/OLDAP2.7)  |  [OLDAP-2.8](http://vocab.fairdatacollective.org/gdmt/OLDAP2.8)  |  [OML](http://vocab.fairdatacollective.org/gdmt/OML)  |  [OpenSSL](http://vocab.fairdatacollective.org/gdmt/OpenSSL)  |  [OPL-1.0](http://vocab.fairdatacollective.org/gdmt/OPL1.0)  |  [OSET-PL-2.1](http://vocab.fairdatacollective.org/gdmt/OSETPL2.1)  |  [OSL-1.0](http://vocab.fairdatacollective.org/gdmt/OSL1.0)  |  [OSL-1.1](http://vocab.fairdatacollective.org/gdmt/OSL1.1)  |  [OSL-2.0](http://vocab.fairdatacollective.org/gdmt/OSL2.0)  |  [OSL-2.1](http://vocab.fairdatacollective.org/gdmt/OSL2.1)  |  [OSL-3.0](http://vocab.fairdatacollective.org/gdmt/OSL3.0)  |  [Parity-6.0.0](http://vocab.fairdatacollective.org/gdmt/Parity6.0.0)  |  [Parity-7.0.0](http://vocab.fairdatacollective.org/gdmt/Parity7.0.0)  |  [PDDL-1.0](http://vocab.fairdatacollective.org/gdmt/PDDL1.0)  |  [PHP-3.01](http://vocab.fairdatacollective.org/gdmt/PHP3.01)  |  [PHP-3.0](http://vocab.fairdatacollective.org/gdmt/PHP3.0)  |  [Plexus](http://vocab.fairdatacollective.org/gdmt/Plexus)  |  [PolyForm-Noncommercial-1.0.0](http://vocab.fairdatacollective.org/gdmt/PolyFormNoncommercial1.0.0)  |  [PolyForm-Small-Business-1.0.0](http://vocab.fairdatacollective.org/gdmt/PolyFormSmallBusiness1.0.0)  |  [PostgreSQL](http://vocab.fairdatacollective.org/gdmt/PostgreSQL)  |  [PSF-2.0](http://vocab.fairdatacollective.org/gdmt/PSF2.0)  |  [psfrag](http://vocab.fairdatacollective.org/gdmt/psfrag)  |  [psutils](http://vocab.fairdatacollective.org/gdmt/psutils)  |  [Python-2.0](http://vocab.fairdatacollective.org/gdmt/Python2.0)  |  [Qhull](http://vocab.fairdatacollective.org/gdmt/Qhull)  |  [QPL-1.0](http://vocab.fairdatacollective.org/gdmt/QPL1.0)  |  [Rdisc](http://vocab.fairdatacollective.org/gdmt/Rdisc)  |  [RHeCos-1.1](http://vocab.fairdatacollective.org/gdmt/RHeCos1.1)  |  [RPL-1.1](http://vocab.fairdatacollective.org/gdmt/RPL1.1)  |  [RPL-1.5](http://vocab.fairdatacollective.org/gdmt/RPL1.5)  |  [RPSL-1.0](http://vocab.fairdatacollective.org/gdmt/RPSL1.0)  |  [RSA-MD](http://vocab.fairdatacollective.org/gdmt/RSAMD)  |  [RSCPL](http://vocab.fairdatacollective.org/gdmt/RSCPL)  |  [Ruby](http://vocab.fairdatacollective.org/gdmt/Ruby)  |  [SAX-PD](http://vocab.fairdatacollective.org/gdmt/SAXPD)  |  [Saxpath](http://vocab.fairdatacollective.org/gdmt/Saxpath)  |  [SCEA](http://vocab.fairdatacollective.org/gdmt/SCEA)  |  [Sendmail-8.23](http://vocab.fairdatacollective.org/gdmt/Sendmail8.23)  |  [Sendmail](http://vocab.fairdatacollective.org/gdmt/Sendmail)  |  [SGI-B-1.0](http://vocab.fairdatacollective.org/gdmt/SGIB1.0)  |  [SGI-B-1.1](http://vocab.fairdatacollective.org/gdmt/SGIB1.1)  |  [SGI-B-2.0](http://vocab.fairdatacollective.org/gdmt/SGIB2.0)  |  [SHL-0.51](http://vocab.fairdatacollective.org/gdmt/SHL0.51)  |  [SHL-0.5](http://vocab.fairdatacollective.org/gdmt/SHL0.5)  |  [SimPL-2.0](http://vocab.fairdatacollective.org/gdmt/SimPL2.0)  |  [SISSL-1.2](http://vocab.fairdatacollective.org/gdmt/SISSL1.2)  |  [SISSL](http://vocab.fairdatacollective.org/gdmt/SISSL)  |  [Sleepycat](http://vocab.fairdatacollective.org/gdmt/Sleepycat)  |  [SMLNJ](http://vocab.fairdatacollective.org/gdmt/SMLNJ)  |  [SMPPL](http://vocab.fairdatacollective.org/gdmt/SMPPL)  |  [SNIA](http://vocab.fairdatacollective.org/gdmt/SNIA)  |  [Spencer-86](http://vocab.fairdatacollective.org/gdmt/Spencer86)  |  [Spencer-94](http://vocab.fairdatacollective.org/gdmt/Spencer94)  |  [Spencer-99](http://vocab.fairdatacollective.org/gdmt/Spencer99)  |  [SPL-1.0](http://vocab.fairdatacollective.org/gdmt/SPL1.0)  |  [SSH-OpenSSH](http://vocab.fairdatacollective.org/gdmt/SSHOpenSSH)  |  [SSH-short](http://vocab.fairdatacollective.org/gdmt/SSHshort)  |  [SSPL-1.0](http://vocab.fairdatacollective.org/gdmt/SSPL1.0)  |  [SugarCRM-1.1.3](http://vocab.fairdatacollective.org/gdmt/SugarCRM1.1.3)  |  [SWL](http://vocab.fairdatacollective.org/gdmt/SWL)  |  [TAPR-OHL-1.0](http://vocab.fairdatacollective.org/gdmt/TAPROHL1.0)  |  [TCL](http://vocab.fairdatacollective.org/gdmt/TCL)  |  [TCP-wrappers](http://vocab.fairdatacollective.org/gdmt/TCPwrappers)  |  [TMate](http://vocab.fairdatacollective.org/gdmt/TMate)  |  [TORQUE-1.1](http://vocab.fairdatacollective.org/gdmt/TORQUE1.1)  |  [TOSL](http://vocab.fairdatacollective.org/gdmt/TOSL)  |  [TU-Berlin-1.0](http://vocab.fairdatacollective.org/gdmt/TUBerlin1.0)  |  [TU-Berlin-2.0](http://vocab.fairdatacollective.org/gdmt/TUBerlin2.0)  |  [UCL-1.0](http://vocab.fairdatacollective.org/gdmt/UCL1.0)  |  [Unicode-DFS-2015](http://vocab.fairdatacollective.org/gdmt/UnicodeDFS2015)  |  [Unicode-DFS-2016](http://vocab.fairdatacollective.org/gdmt/UnicodeDFS2016)  |  [Unicode-TOU](http://vocab.fairdatacollective.org/gdmt/UnicodeTOU)  |  [Unlicense](http://vocab.fairdatacollective.org/gdmt/Unlicense)  |  [UPL-1.0](http://vocab.fairdatacollective.org/gdmt/UPL1.0)  |  [Vim](http://vocab.fairdatacollective.org/gdmt/Vim)  |  [VOSTROM](http://vocab.fairdatacollective.org/gdmt/VOSTROM)  |  [VSL-1.0](http://vocab.fairdatacollective.org/gdmt/VSL1.0)  |  [W3C-19980720](http://vocab.fairdatacollective.org/gdmt/W3C19980720)  |  [W3C-20150513](http://vocab.fairdatacollective.org/gdmt/W3C20150513)  |  [W3C](http://vocab.fairdatacollective.org/gdmt/W3C)  |  [Watcom-1.0](http://vocab.fairdatacollective.org/gdmt/Watcom1.0)  |  [Wsuipa](http://vocab.fairdatacollective.org/gdmt/Wsuipa)  |  [WTFPL](http://vocab.fairdatacollective.org/gdmt/WTFPL)  |  [X11](http://vocab.fairdatacollective.org/gdmt/X11)  |  [Xerox](http://vocab.fairdatacollective.org/gdmt/Xerox)  |  [XFree86-1.1](http://vocab.fairdatacollective.org/gdmt/XFree861.1)  |  [xinetd](http://vocab.fairdatacollective.org/gdmt/xinetd)  |  [Xnet](http://vocab.fairdatacollective.org/gdmt/Xnet)  |  [xpp](http://vocab.fairdatacollective.org/gdmt/xpp)  |  [XSkat](http://vocab.fairdatacollective.org/gdmt/XSkat)  |  [YPL-1.0](http://vocab.fairdatacollective.org/gdmt/YPL1.0)  |  [YPL-1.1](http://vocab.fairdatacollective.org/gdmt/YPL1.1)  |  [Zed](http://vocab.fairdatacollective.org/gdmt/Zed)  |  [Zend-2.0](http://vocab.fairdatacollective.org/gdmt/Zend2.0)  |  [Zimbra-1.3](http://vocab.fairdatacollective.org/gdmt/Zimbra1.3)  |  [Zimbra-1.4](http://vocab.fairdatacollective.org/gdmt/Zimbra1.4)  |  [zlib-acknowledgement](http://vocab.fairdatacollective.org/gdmt/zlibacknowledgement)  |  [Zlib](http://vocab.fairdatacollective.org/gdmt/Zlib)  |  [ZPL-1.1](http://vocab.fairdatacollective.org/gdmt/ZPL1.1)  |  [ZPL-2.0](http://vocab.fairdatacollective.org/gdmt/ZPL2.0)  |  [ZPL-2.1](http://vocab.fairdatacollective.org/gdmt/ZPL2.1)
<div class="example">
<div class="example-heading">Example</div>
<p><a href="http://vocab.fairdatacollective.org/gdmt/CCBYSA4.0">CC BY-SA 4.0</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "License Name" : {
    "@id" : "http://vocab.fairdatacollective.org/gdmt/CCBYSA4.0",
    "rdfs:label" : "CC BY-SA 4.0"
  },
  "@context" : {
    "License Name" : "http://purl.org/radx-terms/metadata-terms/licenseName"
  }
}
```

</div>
### License Text
<span class="badge badge--optional">Optional</span>

Text string describing any rights information for the data file being described.

If a uniquely identiable license is named above, it is not necessary to repeat the text of the license in this field. This field allows additional rights information to be provided, either to expand licensing terms, clarify the license holder, or provide unique license terms that are not available in a standardized license.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "License Text" : { },
  "@context" : {
    "License Text" : "http://purl.org/radx-terms/metadata-terms/licenseText"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Rights" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/37d60d56-ce55-4451-93bf-09ac554a6c99",
    "License Name" : {
      "@id" : "http://vocab.fairdatacollective.org/gdmt/CCBYSA4.0",
      "rdfs:label" : "CC BY-SA 4.0"
    },
    "License Text" : { },
    "@context" : {
      "License Text" : "http://purl.org/radx-terms/metadata-terms/licenseText",
      "License Name" : "http://purl.org/radx-terms/metadata-terms/licenseName"
    }
  } ],
  "@context" : {
    "Data File Rights" : "http://purl.org/radx-terms/metadata-terms/rightsDescriptor"
  }
}
```

</div>
## Data File Dates
<span class="badge badge--multi">Multi-valued</span>

A list of relevant dates related to the data file being described. Such dates pertain to some data-file-related event, for example "creation date", "submission date" etc. Dates are specified as a pair containing the actual date (in ISO-8601 format) and the event that the date relates to. See individual fields for specific examples.

The dates of some types of events can be captured by the RADx Data Hub, for example the "Submitted" date/time.

### Event Type
<span class="badge badge--optional">Optional</span>

Type of Data File event that the date is associated with. The Event Type is usually considered with respect to the corresponding actor; for example, Created is typically the initial creation of the Data File by its originator, Accepted is when an ingested Data File is approved (e.g., by the Data Hub), and Updated is the time of the most recent change to the Data File.

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/DateType).

[Accepted](http://vocab.fairdatacollective.org/gdmt/Accepted)  |  [Available](http://vocab.fairdatacollective.org/gdmt/Available)  |  [Collected](http://vocab.fairdatacollective.org/gdmt/Collected)  |  [Copyrighted](http://vocab.fairdatacollective.org/gdmt/Copyrighted)  |  [Created](http://vocab.fairdatacollective.org/gdmt/Created)  |  [Issued](http://vocab.fairdatacollective.org/gdmt/Issued)  |  [Published](http://vocab.fairdatacollective.org/gdmt/Published)  |  [Submitted](http://vocab.fairdatacollective.org/gdmt/Submitted)  |  [Updated](http://vocab.fairdatacollective.org/gdmt/Updated)  |  [Valid](http://vocab.fairdatacollective.org/gdmt/Valid)  |  [Withdrawn](http://vocab.fairdatacollective.org/gdmt/Withdrawn)
<div class="example">
<div class="example-heading">Example</div>
<p><a href="http://vocab.fairdatacollective.org/gdmt/Created">Created</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Event Type" : {
    "@id" : "http://vocab.fairdatacollective.org/gdmt/Created",
    "rdfs:label" : "Created"
  },
  "@context" : {
    "Event Type" : "http://purl.org/radx-terms/metadata-terms/eventType"
  }
}
```

</div>
### Date
<span class="badge badge--optional">Optional</span>

The date/time that is specific to the associated event. 

Note that dates must be specified in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. This format specifies date/times in a locale neutral way with temporal components ordered largest to smallest, for example year, month, day. Note that times are in 24 hour clock (military time) format, thus 13:43 is 1:43pm. When times are specified a time zone must also be specified (Z or +00:00 indicates Greenwich Mean Time).

The date time 2022-11-23T01:23:45.678-07:00 specifies November 23, 2022 at just past 1:23am Pacific Daylight Time. Hyphens and colons are optional.

The date 2022-09-23 specifies September 23, 2022 (without a time stamp). Dates are assumed GMT if no time zone is specified.

<div class="example">
<div class="example-heading">Example</div>
<p>2022-11-23T01:23:45.678-07:00</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Date" : {
    "@value" : "2022-11-23T01:23:45.678-07:00",
    "@type" : "http://www.w3.org/2001/XMLSchema#date"
  },
  "@context" : {
    "Date" : "http://purl.org/radx-terms/metadata-terms/eventDate"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Dates" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/63ba7b58-1232-456c-9f2f-e9220c7f1412",
    "Event Type" : {
      "@id" : "http://vocab.fairdatacollective.org/gdmt/Created",
      "rdfs:label" : "Created"
    },
    "Date" : {
      "@value" : "2022-11-23T01:23:45.678-07:00",
      "@type" : "http://www.w3.org/2001/XMLSchema#date"
    },
    "@context" : {
      "Event Type" : "http://purl.org/radx-terms/metadata-terms/eventType",
      "Date" : "http://purl.org/radx-terms/metadata-terms/eventDate"
    }
  } ],
  "@context" : {
    "Data File Dates" : "http://purl.org/radx-terms/metadata-terms/eventsDescriptor"
  }
}
```

</div>
## Data File Parent Studies
<span class="badge badge--multi">Multi-valued</span>

A list of research studies for which this data file was created.

### PHS Identifier
<span class="badge badge--required">Required</span>

The PHS number that identifies the study for which this data file was created.

This corresponds to the _local identifier_ in the DataCite standard. All RADx studies are required to have a PHS identifier; if you do not have one, please contact the Data Hub for information on filling out this field.

<div class="example">
<div class="example-heading">Example</div>
<p>phs000296</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "PHS Identifier" : {
    "@value" : "phs000296"
  },
  "@context" : {
    "PHS Identifier" : "http://purl.org/radx-terms/metadata-terms/parentStudyPhsIdentifier"
  }
}
```

</div>
### Study Identifier
<span class="badge badge--recommended">Recommended</span>

Globally unique string that identifies the study for which this data file was created.

<div class="example">
<div class="example-heading">Example</div>
<p>https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs000296</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Study Identifier" : {
    "@value" : "https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs000296"
  },
  "@context" : {
    "Study Identifier" : "http://purl.org/radx-terms/metadata-terms/ParentStudyIdentifier"
  }
}
```

</div>
### Study Identifier Scheme
<span class="badge badge--optional">Optional</span>

The name of the scheme or authority used for the Study Identifier.

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/IdentifierType).

[ARK](http://vocab.fairdatacollective.org/gdmt/ARK)  |  [arXiv](http://vocab.fairdatacollective.org/gdmt/arXiv)  |  [bibcode](http://vocab.fairdatacollective.org/gdmt/bibcode)  |  [DOI](http://vocab.fairdatacollective.org/gdmt/DOI)  |  [EAN13](http://vocab.fairdatacollective.org/gdmt/EAN13)  |  [EISSN](http://vocab.fairdatacollective.org/gdmt/EISSN)  |  [Handle](http://vocab.fairdatacollective.org/gdmt/Handle)  |  [IGSN](http://vocab.fairdatacollective.org/gdmt/IGSN)  |  [IRI](http://vocab.fairdatacollective.org/gdmt/IRI)  |  [ISBN](http://vocab.fairdatacollective.org/gdmt/ISBN)  |  [ISSN](http://vocab.fairdatacollective.org/gdmt/ISSN)  |  [ISTC](http://vocab.fairdatacollective.org/gdmt/ISTC)  |  [LISSN](http://vocab.fairdatacollective.org/gdmt/LISSN)  |  [LSID](http://vocab.fairdatacollective.org/gdmt/LSID)  |  [PMID](http://vocab.fairdatacollective.org/gdmt/PMID)  |  [PURL](http://vocab.fairdatacollective.org/gdmt/PURL)  |  [UPC](http://vocab.fairdatacollective.org/gdmt/UPC)  |  [URI](http://vocab.fairdatacollective.org/gdmt/URI)  |  [URL](http://vocab.fairdatacollective.org/gdmt/URL)  |  [URN](http://vocab.fairdatacollective.org/gdmt/URN)  |  [w3id](http://vocab.fairdatacollective.org/gdmt/w3id)
<div class="example">
<div class="example-heading">Example</div>
<p><a href="http://vocab.fairdatacollective.org/gdmt/IRI">IRI</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Study Identifier Scheme" : {
    "@id" : "http://vocab.fairdatacollective.org/gdmt/IRI",
    "rdfs:label" : "IRI"
  },
  "@context" : {
    "Study Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/parentStudyIdentifierScheme"
  }
}
```

</div>
### Study Name
<span class="badge badge--recommended">Recommended</span>

The name of the research study for which this data file was created.

<div class="example">
<div class="example-heading">Example</div>
<p>NHLBI GO-ESP: Lung Cohorts Exome Sequencing Project (COPDGene)</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Study Name" : {
    "@value" : "NHLBI GO-ESP: Lung Cohorts Exome Sequencing Project (COPDGene)"
  },
  "@context" : {
    "Study Name" : "http://purl.org/radx-terms/metadata-terms/parentStudyName"
  }
}
```

</div>
### Study Start Date
<span class="badge badge--optional">Optional</span>

The official start date for the study for which this data file was created. This date must be in the ISO-8601 format of yyyy-mm-dd. For example, 2022-10-05 specifies October 5, 2022.

This field is considered auxiliary information to the initially registered Study Start Date. It will not update the registered information, but may trigger a verification that the registered Start Date has not changed.

<div class="example">
<div class="example-heading">Example</div>
<p>2021-10-05</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Study Start Date" : {
    "@value" : "2021-10-05",
    "@type" : "http://www.w3.org/2001/XMLSchema#date"
  },
  "@context" : {
    "Study Start Date" : "http://purl.org/radx-terms/metadata-terms/startDate"
  }
}
```

</div>
### Study End Date
<span class="badge badge--optional">Optional</span>

The official end date for the study for which this data file was created. This date must be in the ISO-8601 format of yyyy-mm-dd. For example, 2022-10-05 specifies October 5, 2022.

This field is considered auxiliary information to the initially registered Study End Date. It will not update the registered information, but may trigger a verification that the registered End Date has not changed.

<div class="example">
<div class="example-heading">Example</div>
<p>2022-10-05</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Study End Date" : {
    "@value" : "2022-10-05",
    "@type" : "http://www.w3.org/2001/XMLSchema#date"
  },
  "@context" : {
    "Study End Date" : "http://purl.org/radx-terms/metadata-terms/endDate"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Parent Studies" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/16ef4117-e971-4732-b387-be670f84914a",
    "PHS Identifier" : {
      "@value" : "phs000296"
    },
    "Study Identifier" : {
      "@value" : "https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs000296"
    },
    "Study Identifier Scheme" : {
      "@id" : "http://vocab.fairdatacollective.org/gdmt/IRI",
      "rdfs:label" : "IRI"
    },
    "Study Name" : {
      "@value" : "NHLBI GO-ESP: Lung Cohorts Exome Sequencing Project (COPDGene)"
    },
    "Study Start Date" : {
      "@value" : "2021-10-05",
      "@type" : "http://www.w3.org/2001/XMLSchema#date"
    },
    "Study End Date" : {
      "@value" : "2022-10-05",
      "@type" : "http://www.w3.org/2001/XMLSchema#date"
    },
    "@context" : {
      "Study End Date" : "http://purl.org/radx-terms/metadata-terms/endDate",
      "Study Start Date" : "http://purl.org/radx-terms/metadata-terms/startDate",
      "Study Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/parentStudyIdentifierScheme",
      "Study Name" : "http://purl.org/radx-terms/metadata-terms/parentStudyName",
      "Study Identifier" : "http://purl.org/radx-terms/metadata-terms/ParentStudyIdentifier",
      "PHS Identifier" : "http://purl.org/radx-terms/metadata-terms/parentStudyPhsIdentifier"
    }
  } ],
  "@context" : {
    "Data File Parent Studies" : "http://purl.org/radx-terms/metadata-terms/parentStudyDescriptor"
  }
}
```

</div>
## Data File Funding Sources
<span class="badge badge--multi">Multi-valued</span>

A list of sources of funding that enabled and drove the creation of the data file. (Non-monetary sources are described under Contributor.) Each funding source may be described as a separate element (set of fields).

### Award Title
<span class="badge badge--optional">Optional</span>

The human readable title of the award, grant, or other specific funding mechanism for the described data file.

<div class="example">
<div class="example-heading">Example</div>
<p>Safer At School Early Alert (SASEA)</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Award Title" : {
    "@value" : "Safer At School Early Alert (SASEA)"
  },
  "@context" : {
    "Award Title" : "http://purl.org/radx-terms/metadata-terms/awardTitle"
  }
}
```

</div>
### Award Page URL
<span class="badge badge--optional">Optional</span>

The unique identifier (IRI) leading to a page provided by the funder for more information about the award (grant).

<div class="example">
<div class="example-heading">Example</div>
<p>https://reporter.nih.gov/search/44g5CsIy-EGIvKlnlFwXrA/project-details/10447530</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Award Page URL" : {
    "@id" : "https://reporter.nih.gov/search/44g5CsIy-EGIvKlnlFwXrA/project-details/10447530"
  },
  "@context" : {
    "Award Page URL" : "http://purl.org/radx-terms/metadata-terms/awardPageUrl"
  }
}
```

</div>
### Award Local Identifier
<span class="badge badge--recommended">Recommended</span>

The code assigned by the funding provider to a sponsored award (grant). (This can be an IRI, but typically is not.)

<div class="example">
<div class="example-heading">Example</div>
<p>1U01HD108787-01</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Award Local Identifier" : {
    "@value" : "1U01HD108787-01"
  },
  "@context" : {
    "Award Local Identifier" : "http://purl.org/radx-terms/metadata-terms/awardIdentifier"
  }
}
```

</div>
### Funder Name
<span class="badge badge--recommended">Recommended</span>

Name of the organization providing the funding for the described data file ('funding provider').

This is typically the NIH Institute that awarded the grant.

<div class="example">
<div class="example-heading">Example</div>
<p>Eunice Kennedy Shriver National Institute of Child Health and Human Development</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Funder Name" : {
    "@value" : "Eunice Kennedy Shriver National Institute of Child Health and Human Development"
  },
  "@context" : {
    "Funder Name" : "http://purl.org/radx-terms/metadata-terms/funderName"
  }
}
```

</div>
### Funder Identifier
<span class="badge badge--recommended">Recommended</span>

Globally unique string that identifies the funding provider. A list of NIH Institute identifiers may be found [here](https://ror.org/01cwqze88).

|NIH Institute | Identifier |
|----------|------------|
|Center for Information Technology|[https://ror.org/03jh5a977](https://ror.org/03jh5a977)|
|Center for Scientific Review|[https://ror.org/04r5s4b52](https://ror.org/04r5s4b52)|
|Eunice Kennedy Shriver National Institute of Child Health and Human Development|[https://ror.org/04byxyr05](https://ror.org/04byxyr05)|
|Fogarty International Center|[https://ror.org/02xey9a22](https://ror.org/02xey9a22)|
|National Cancer Institute|[https://ror.org/040gcmg81](https://ror.org/040gcmg81)|
|National Center for Advancing Translational Sciences|[https://ror.org/04pw6fb54](https://ror.org/04pw6fb54)|
|National Center for Complementary and Integrative Health|[https://ror.org/00190t495](https://ror.org/00190t495)|
|National Eye Institute|[https://ror.org/03wkg3b53](https://ror.org/03wkg3b53)|
|National Heart Lung and Blood Institute|[https://ror.org/012pb6c26](https://ror.org/012pb6c26)|
|National Human Genome Research Institute|[https://ror.org/00baak391](https://ror.org/00baak391)|
|National Institute of Allergy and Infectious Diseases|[https://ror.org/043z4tv69](https://ror.org/043z4tv69)|
|National Institute of Arthritis and Musculoskeletal and Skin Diseases|[https://ror.org/006zn3t30](https://ror.org/006zn3t30)|
|National Institute of Biomedical Imaging and Bioengineering|[https://ror.org/00372qc85](https://ror.org/00372qc85)|
|National Institute of Dental and Craniofacial Research|[https://ror.org/004a2wv92](https://ror.org/004a2wv92)|
|National Institute of Diabetes and Digestive and Kidney Diseases|[https://ror.org/00adh9b73](https://ror.org/00adh9b73)|
|National Institute of Environmental Health Sciences|[https://ror.org/00j4k1h63](https://ror.org/00j4k1h63)|
|National Institute of General Medical Sciences|[https://ror.org/04q48ey07](https://ror.org/04q48ey07)|
|National Institute of Mental Health|[https://ror.org/04xeg9z08](https://ror.org/04xeg9z08)|
|National Institute of Neurological Disorders and Stroke|[https://ror.org/01s5ya894](https://ror.org/01s5ya894)|
|National Institute of Nursing Research|[https://ror.org/01y3zfr79](https://ror.org/01y3zfr79)|
|National Institute on Aging|[https://ror.org/049v75w11](https://ror.org/049v75w11)|
|National Institute on Alcohol Abuse and Alcoholism|[https://ror.org/02jzrsm59](https://ror.org/02jzrsm59)|
|National Institute on Deafness and Other Communication Disorders|[https://ror.org/04mhx6838](https://ror.org/04mhx6838)|
|National Institute on Drug Abuse|[https://ror.org/00fq5cm18](https://ror.org/00fq5cm18)|
|National Institute on Minority Health and Health Disparities|[https://ror.org/0493hgw16](https://ror.org/0493hgw16)|
|National Institutes of Health Clinical Center|[https://ror.org/04vfsmv21](https://ror.org/04vfsmv21)|
|Office of the Director|[https://ror.org/00fj8a872](https://ror.org/00fj8a872)|
|United States National Library of Medicine|[https://ror.org/0060t0j89](https://ror.org/0060t0j89)|

<div class="example">
<div class="example-heading">Example</div>
<p>https://ror.org/04byxyr05</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Funder Identifier" : {
    "@value" : "https://ror.org/04byxyr05"
  },
  "@context" : {
    "Funder Identifier" : "http://purl.org/radx-terms/metadata-terms/funderIdentifier"
  }
}
```

</div>
### Funder Identifier Scheme
<span class="badge badge--optional">Optional</span>

Name of the scheme or authority for the Funder Identifier. This field is optional as in most cases it can be determined from the _Funder Identifier_ field.

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/IdentifierScheme).

[GRID](https://www.grid.ac/)  |  [ISNI](https://isni.org/)  |  [LinkedIn ID](https://www.linkedin.com/)  |  [ORCiD](https://orcid.org/)  |  [ResearcherID](http://www.researcherid.com/)  |  [ROR](https://ror.org/)  |  [Scopus](https://www.scopus.com/)
<div class="example">
<div class="example-heading">Example</div>
<p><a href="https://ror.org">ROR</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Funder Identifier Scheme" : {
    "@id" : "https://ror.org",
    "rdfs:label" : "ROR"
  },
  "@context" : {
    "Funder Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/funderIdentifierScheme"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Funding Sources" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/1337f85b-ee71-4f4c-a19f-63f34374bd09",
    "Award Title" : {
      "@value" : "Safer At School Early Alert (SASEA)"
    },
    "Award Page URL" : {
      "@id" : "https://reporter.nih.gov/search/44g5CsIy-EGIvKlnlFwXrA/project-details/10447530"
    },
    "Award Local Identifier" : {
      "@value" : "1U01HD108787-01"
    },
    "Funder Name" : {
      "@value" : "Eunice Kennedy Shriver National Institute of Child Health and Human Development"
    },
    "Funder Identifier" : {
      "@value" : "https://ror.org/04byxyr05"
    },
    "Funder Identifier Scheme" : {
      "@id" : "https://ror.org",
      "rdfs:label" : "ROR"
    },
    "@context" : {
      "Funder Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/funderIdentifierScheme",
      "Award Page URL" : "http://purl.org/radx-terms/metadata-terms/awardPageUrl",
      "Award Local Identifier" : "http://purl.org/radx-terms/metadata-terms/awardIdentifier",
      "Award Title" : "http://purl.org/radx-terms/metadata-terms/awardTitle",
      "Funder Name" : "http://purl.org/radx-terms/metadata-terms/funderName",
      "Funder Identifier" : "http://purl.org/radx-terms/metadata-terms/funderIdentifier"
    }
  } ],
  "@context" : {
    "Data File Funding Sources" : "http://purl.org/radx-terms/metadata-terms/fundingSourceDescriptor"
  }
}
```

</div>
## Data File Distributions
<span class="badge badge--multi">Multi-valued</span>

A list of specific (non-Data Hub) distributions for this data file. If the only available distribution for the Data File is in the RADx Data Hub, there is no need to fill out Distribution information.

### Distribution Publisher
<span class="badge badge--optional">Optional</span>

The organization or resource that provides services to make publicly available this distribution of the data file.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Distribution Publisher" : { },
  "@context" : {
    "Distribution Publisher" : "http://purl.org/radx-terms/metadata-terms/distributionPublisher"
  }
}
```

</div>
### Distribution Publisher Identifier
<span class="badge badge--optional">Optional</span>

Globally unique string that identifies the Distribution Publisher.

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/IdentifierScheme).

[GRID](https://www.grid.ac/)  |  [ISNI](https://isni.org/)  |  [LinkedIn ID](https://www.linkedin.com/)  |  [ORCiD](https://orcid.org/)  |  [ResearcherID](http://www.researcherid.com/)  |  [ROR](https://ror.org/)  |  [Scopus](https://www.scopus.com/)
<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Distribution Publisher Identifier" : { },
  "@context" : {
    "Distribution Publisher Identifier" : "http://purl.org/radx-terms/metadata-terms/distributionPublisherIdentifier"
  }
}
```

</div>
### Distribution Publisher Identifier Scheme
<span class="badge badge--optional">Optional</span>

Name of the scheme or authority for the Distribution Publisher Identifier.

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/IdentifierScheme).

[GRID](https://www.grid.ac/)  |  [ISNI](https://isni.org/)  |  [LinkedIn ID](https://www.linkedin.com/)  |  [ORCiD](https://orcid.org/)  |  [ResearcherID](http://www.researcherid.com/)  |  [ROR](https://ror.org/)  |  [Scopus](https://www.scopus.com/)
<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Distribution Publisher Identifier Scheme" : { },
  "@context" : {
    "Distribution Publisher Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/distributionPublisherIdentifierScheme"
  }
}
```

</div>
### Distribution Identifier
<span class="badge badge--optional">Optional</span>

A globally unique string that identifies the data file distribution.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Distribution Identifier" : { },
  "@context" : {
    "Distribution Identifier" : "http://purl.org/radx-terms/metadata-terms/distributionIdentifier"
  }
}
```

</div>
### Distribution Identifier Type
<span class="badge badge--optional">Optional</span>

The identifier type used to identify the data file distribution.

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/IdentifierType).

[ARK](http://vocab.fairdatacollective.org/gdmt/ARK)  |  [arXiv](http://vocab.fairdatacollective.org/gdmt/arXiv)  |  [bibcode](http://vocab.fairdatacollective.org/gdmt/bibcode)  |  [DOI](http://vocab.fairdatacollective.org/gdmt/DOI)  |  [EAN13](http://vocab.fairdatacollective.org/gdmt/EAN13)  |  [EISSN](http://vocab.fairdatacollective.org/gdmt/EISSN)  |  [Handle](http://vocab.fairdatacollective.org/gdmt/Handle)  |  [IGSN](http://vocab.fairdatacollective.org/gdmt/IGSN)  |  [IRI](http://vocab.fairdatacollective.org/gdmt/IRI)  |  [ISBN](http://vocab.fairdatacollective.org/gdmt/ISBN)  |  [ISSN](http://vocab.fairdatacollective.org/gdmt/ISSN)  |  [ISTC](http://vocab.fairdatacollective.org/gdmt/ISTC)  |  [LISSN](http://vocab.fairdatacollective.org/gdmt/LISSN)  |  [LSID](http://vocab.fairdatacollective.org/gdmt/LSID)  |  [PMID](http://vocab.fairdatacollective.org/gdmt/PMID)  |  [PURL](http://vocab.fairdatacollective.org/gdmt/PURL)  |  [UPC](http://vocab.fairdatacollective.org/gdmt/UPC)  |  [URI](http://vocab.fairdatacollective.org/gdmt/URI)  |  [URL](http://vocab.fairdatacollective.org/gdmt/URL)  |  [URN](http://vocab.fairdatacollective.org/gdmt/URN)  |  [w3id](http://vocab.fairdatacollective.org/gdmt/w3id)
<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Distribution Identifier Type" : { },
  "@context" : {
    "Distribution Identifier Type" : "http://purl.org/radx-terms/metadata-terms/distributionIdentifierType"
  }
}
```

</div>
### Distribution Format
<span class="badge badge--optional">Optional</span>

An established standard to which the data file distribution conforms.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Distribution Format" : { },
  "@context" : {
    "Distribution Format" : "http://purl.org/radx-terms/metadata-terms/distributionFormat"
  }
}
```

</div>
### Distribution Media Type
<span class="badge badge--optional">Optional</span>

A media type (formerly known as a MIME type) of data file distribution. The most common media type for dataset distributions in the RADx Data Hub is [text/css](http://vocab.fairdatacollective.org/gdmt/text-css)

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/MIMEType).

[application/acad](http://vocab.fairdatacollective.org/gdmt/application-acad)  |  [application/arj](http://vocab.fairdatacollective.org/gdmt/application-arj)  |  [application/base64](http://vocab.fairdatacollective.org/gdmt/application-base64)  |  [application/binhex4](http://vocab.fairdatacollective.org/gdmt/application-binhex4)  |  [application/binhex](http://vocab.fairdatacollective.org/gdmt/application-binhex)  |  [application/book](http://vocab.fairdatacollective.org/gdmt/application-book)  |  [application/cdf](http://vocab.fairdatacollective.org/gdmt/application-cdf)  |  [application/clariscad](http://vocab.fairdatacollective.org/gdmt/application-clariscad)  |  [application/commonground](http://vocab.fairdatacollective.org/gdmt/application-commonground)  |  [application/drafting](http://vocab.fairdatacollective.org/gdmt/application-drafting)  |  [application/dsptype](http://vocab.fairdatacollective.org/gdmt/application-dsptype)  |  [application/dxf](http://vocab.fairdatacollective.org/gdmt/application-dxf)  |  [application/ecmascript](http://vocab.fairdatacollective.org/gdmt/application-ecmascript)  |  [application/envoy](http://vocab.fairdatacollective.org/gdmt/application-envoy)  |  [application/epub+zip](http://vocab.fairdatacollective.org/gdmt/application-epub+zip)  |  [application/excel](http://vocab.fairdatacollective.org/gdmt/application-excel)  |  [application/fractals](http://vocab.fairdatacollective.org/gdmt/application-fractals)  |  [application/freeloader](http://vocab.fairdatacollective.org/gdmt/application-freeloader)  |  [application/futuresplash](http://vocab.fairdatacollective.org/gdmt/application-futuresplash)  |  [application/gnutar](http://vocab.fairdatacollective.org/gdmt/application-gnutar)  |  [application/groupwise](http://vocab.fairdatacollective.org/gdmt/application-groupwise)  |  [application/hlp](http://vocab.fairdatacollective.org/gdmt/application-hlp)  |  [application/hta](http://vocab.fairdatacollective.org/gdmt/application-hta)  |  [application/i-deas](http://vocab.fairdatacollective.org/gdmt/application-i-deas)  |  [application/iges](http://vocab.fairdatacollective.org/gdmt/application-iges)  |  [application/inf](http://vocab.fairdatacollective.org/gdmt/application-inf)  |  [application/java-archive](http://vocab.fairdatacollective.org/gdmt/application-java-archive)  |  [application/java-byte-code](http://vocab.fairdatacollective.org/gdmt/application-java-byte-code)  |  [application/java](http://vocab.fairdatacollective.org/gdmt/application-java)  |  [application/javascript](http://vocab.fairdatacollective.org/gdmt/application-javascript)  |  [application/json](http://vocab.fairdatacollective.org/gdmt/application-json)  |  [application/ld+json](http://vocab.fairdatacollective.org/gdmt/application-ld+json)  |  [application/lha](http://vocab.fairdatacollective.org/gdmt/application-lha)  |  [application/lzx](http://vocab.fairdatacollective.org/gdmt/application-lzx)  |  [application/mac-binary](http://vocab.fairdatacollective.org/gdmt/application-mac-binary)  |  [application/mac-binhex40](http://vocab.fairdatacollective.org/gdmt/application-mac-binhex40)  |  [application/mac-binhex](http://vocab.fairdatacollective.org/gdmt/application-mac-binhex)  |  [application/mac-compactpro](http://vocab.fairdatacollective.org/gdmt/application-mac-compactpro)  |  [application/macbinary](http://vocab.fairdatacollective.org/gdmt/application-macbinary)  |  [application/marc](http://vocab.fairdatacollective.org/gdmt/application-marc)  |  [application/mbedlet](http://vocab.fairdatacollective.org/gdmt/application-mbedlet)  |  [application/mcad](http://vocab.fairdatacollective.org/gdmt/application-mcad)  |  [application/mime](http://vocab.fairdatacollective.org/gdmt/application-mime)  |  [application/mspowerpoint](http://vocab.fairdatacollective.org/gdmt/application-mspowerpoint)  |  [application/msword](http://vocab.fairdatacollective.org/gdmt/application-msword)  |  [application/mswrite](http://vocab.fairdatacollective.org/gdmt/application-mswrite)  |  [application/netmc](http://vocab.fairdatacollective.org/gdmt/application-netmc)  |  [application/octet-stream](http://vocab.fairdatacollective.org/gdmt/application-octet-stream)  |  [application/oda](http://vocab.fairdatacollective.org/gdmt/application-oda)  |  [application/ogg](http://vocab.fairdatacollective.org/gdmt/application-ogg)  |  [application/pdf](http://vocab.fairdatacollective.org/gdmt/application-pdf)  |  [application/pkcs-12](http://vocab.fairdatacollective.org/gdmt/application-pkcs-12)  |  [application/pkcs-crl](http://vocab.fairdatacollective.org/gdmt/application-pkcs-crl)  |  [application/pkcs10](http://vocab.fairdatacollective.org/gdmt/application-pkcs10)  |  [application/pkcs7-mime](http://vocab.fairdatacollective.org/gdmt/application-pkcs7-mime)  |  [application/pkcs7-signature](http://vocab.fairdatacollective.org/gdmt/application-pkcs7-signature)  |  [application/pkix-cert](http://vocab.fairdatacollective.org/gdmt/application-pkix-cert)  |  [application/pkix-crl](http://vocab.fairdatacollective.org/gdmt/application-pkix-crl)  |  [application/plain](http://vocab.fairdatacollective.org/gdmt/application-plain)  |  [application/postscript](http://vocab.fairdatacollective.org/gdmt/application-postscript)  |  [application/powerpoint](http://vocab.fairdatacollective.org/gdmt/application-powerpoint)  |  [application/pro_eng](http://vocab.fairdatacollective.org/gdmt/application-pro_eng)  |  [application/ringing-tones](http://vocab.fairdatacollective.org/gdmt/application-ringing-tones)  |  [application/rtf](http://vocab.fairdatacollective.org/gdmt/application-rtf)  |  [application/sdp](http://vocab.fairdatacollective.org/gdmt/application-sdp)  |  [application/sea](http://vocab.fairdatacollective.org/gdmt/application-sea)  |  [application/set](http://vocab.fairdatacollective.org/gdmt/application-set)  |  [application/sla](http://vocab.fairdatacollective.org/gdmt/application-sla)  |  [application/smil](http://vocab.fairdatacollective.org/gdmt/application-smil)  |  [application/solids](http://vocab.fairdatacollective.org/gdmt/application-solids)  |  [application/sounder](http://vocab.fairdatacollective.org/gdmt/application-sounder)  |  [application/step](http://vocab.fairdatacollective.org/gdmt/application-step)  |  [application/streamingmedia](http://vocab.fairdatacollective.org/gdmt/application-streamingmedia)  |  [application/toolbook](http://vocab.fairdatacollective.org/gdmt/application-toolbook)  |  [application/vda](http://vocab.fairdatacollective.org/gdmt/application-vda)  |  [application/vnd.amazon.ebook](http://vocab.fairdatacollective.org/gdmt/application-vnd.amazon.ebook)  |  [application/vnd.android.package-archive](http://vocab.fairdatacollective.org/gdmt/application-vnd.android.package-archive)  |  [application/vnd.apple.installer+xml](http://vocab.fairdatacollective.org/gdmt/application-vnd.apple.installer+xml)  |  [application/vnd.fdf](http://vocab.fairdatacollective.org/gdmt/application-vnd.fdf)  |  [application/vnd.hp-hpgl](http://vocab.fairdatacollective.org/gdmt/application-vnd.hp-hpgl)  |  [application/vnd.hp-pcl](http://vocab.fairdatacollective.org/gdmt/application-vnd.hp-pcl)  |  [application/vnd.mozilla.xul+xml](http://vocab.fairdatacollective.org/gdmt/application-vnd.mozilla.xul+xml)  |  [application/vnd.ms-excel](http://vocab.fairdatacollective.org/gdmt/application-vnd.ms-excel)  |  [application/vnd.ms-fontobject](http://vocab.fairdatacollective.org/gdmt/application-vnd.ms-fontobject)  |  [application/vnd.ms-pki.certstore](http://vocab.fairdatacollective.org/gdmt/application-vnd.ms-pki.certstore)  |  [application/vnd.ms-pki.pko](http://vocab.fairdatacollective.org/gdmt/application-vnd.ms-pki.pko)  |  [application/vnd.ms-pki.seccat](http://vocab.fairdatacollective.org/gdmt/application-vnd.ms-pki.seccat)  |  [application/vnd.ms-pki.stl](http://vocab.fairdatacollective.org/gdmt/application-vnd.ms-pki.stl)  |  [application/vnd.ms-powerpoint](http://vocab.fairdatacollective.org/gdmt/application-vnd.ms-powerpoint)  |  [application/vnd.ms-project](http://vocab.fairdatacollective.org/gdmt/application-vnd.ms-project)  |  [application/vnd.nokia.configuration-message](http://vocab.fairdatacollective.org/gdmt/application-vnd.nokia.configuration-message)  |  [application/vnd.nokia.ringing-tone](http://vocab.fairdatacollective.org/gdmt/application-vnd.nokia.ringing-tone)  |  [application/vnd.oasis.opendocument.presentation](http://vocab.fairdatacollective.org/gdmt/application-vnd.oasis.opendocument.presentation)  |  [application/vnd.oasis.opendocument.spreadsheet](http://vocab.fairdatacollective.org/gdmt/application-vnd.oasis.opendocument.spreadsheet)  |  [application/vnd.oasis.opendocument.text](http://vocab.fairdatacollective.org/gdmt/application-vnd.oasis.opendocument.text)  |  [application/vnd.openxmlformats-officedocument.presentationml.presentation](http://vocab.fairdatacollective.org/gdmt/application-vnd.openxmlformats-officedocument.presentationml.presentation)  |  [application/vnd.openxmlformats-officedocument.spreadsheetml.sheet](http://vocab.fairdatacollective.org/gdmt/application-vnd.openxmlformats-officedocument.spreadsheetml.sheet)  |  [application/vnd.openxmlformats-officedocument.wordprocessingml.document](http://vocab.fairdatacollective.org/gdmt/application-vnd.openxmlformats-officedocument.wordprocessingml.document)  |  [application/vnd.rn-realmedia](http://vocab.fairdatacollective.org/gdmt/application-vnd.rn-realmedia)  |  [application/vnd.rn-realplayer](http://vocab.fairdatacollective.org/gdmt/application-vnd.rn-realplayer)  |  [application/vnd.visio](http://vocab.fairdatacollective.org/gdmt/application-vnd.visio)  |  [application/vnd.wap.wmlc](http://vocab.fairdatacollective.org/gdmt/application-vnd.wap.wmlc)  |  [application/vnd.wap.wmlscriptc](http://vocab.fairdatacollective.org/gdmt/application-vnd.wap.wmlscriptc)  |  [application/vnd.xara](http://vocab.fairdatacollective.org/gdmt/application-vnd.xara)  |  [application/vocaltec-media-desc](http://vocab.fairdatacollective.org/gdmt/application-vocaltec-media-desc)  |  [application/vocaltec-media-file](http://vocab.fairdatacollective.org/gdmt/application-vocaltec-media-file)  |  [application/wordperfect6.0](http://vocab.fairdatacollective.org/gdmt/application-wordperfect6.0)  |  [application/wordperfect6.1](http://vocab.fairdatacollective.org/gdmt/application-wordperfect6.1)  |  [application/wordperfect](http://vocab.fairdatacollective.org/gdmt/application-wordperfect)  |  [application/x-123](http://vocab.fairdatacollective.org/gdmt/application-x-123)  |  [application/x-7z-compressed](http://vocab.fairdatacollective.org/gdmt/application-x-7z-compressed)  |  [application/x-abiword](http://vocab.fairdatacollective.org/gdmt/application-x-abiword)  |  [application/x-aim](http://vocab.fairdatacollective.org/gdmt/application-x-aim)  |  [application/x-authorware-bin](http://vocab.fairdatacollective.org/gdmt/application-x-authorware-bin)  |  [application/x-authorware-map](http://vocab.fairdatacollective.org/gdmt/application-x-authorware-map)  |  [application/x-authorware-seg](http://vocab.fairdatacollective.org/gdmt/application-x-authorware-seg)  |  [application/x-bcpio](http://vocab.fairdatacollective.org/gdmt/application-x-bcpio)  |  [application/x-binary](http://vocab.fairdatacollective.org/gdmt/application-x-binary)  |  [application/x-binhex40](http://vocab.fairdatacollective.org/gdmt/application-x-binhex40)  |  [application/x-bsh](http://vocab.fairdatacollective.org/gdmt/application-x-bsh)  |  [application/x-bytecode.elisp (compiled elisp)](http://vocab.fairdatacollective.org/gdmt/application-x-bytecode.elisp(compiledelisp))  |  [application/x-bytecode.python](http://vocab.fairdatacollective.org/gdmt/application-x-bytecode.python)  |  [application/x-bzip2](http://vocab.fairdatacollective.org/gdmt/application-x-bzip2)  |  [application/x-bzip](http://vocab.fairdatacollective.org/gdmt/application-x-bzip)  |  [application/x-cdf](http://vocab.fairdatacollective.org/gdmt/application-x-cdf)  |  [application/x-cdlink](http://vocab.fairdatacollective.org/gdmt/application-x-cdlink)  |  [application/x-chat](http://vocab.fairdatacollective.org/gdmt/application-x-chat)  |  [application/x-cmu-raster](http://vocab.fairdatacollective.org/gdmt/application-x-cmu-raster)  |  [application/x-cocoa](http://vocab.fairdatacollective.org/gdmt/application-x-cocoa)  |  [application/x-compactpro](http://vocab.fairdatacollective.org/gdmt/application-x-compactpro)  |  [application/x-compress](http://vocab.fairdatacollective.org/gdmt/application-x-compress)  |  [application/x-compressed](http://vocab.fairdatacollective.org/gdmt/application-x-compressed)  |  [application/x-conference](http://vocab.fairdatacollective.org/gdmt/application-x-conference)  |  [application/x-cpio](http://vocab.fairdatacollective.org/gdmt/application-x-cpio)  |  [application/x-cpt](http://vocab.fairdatacollective.org/gdmt/application-x-cpt)  |  [application/x-csh](http://vocab.fairdatacollective.org/gdmt/application-x-csh)  |  [application/x-deepv](http://vocab.fairdatacollective.org/gdmt/application-x-deepv)  |  [application/x-director](http://vocab.fairdatacollective.org/gdmt/application-x-director)  |  [application/x-dvi](http://vocab.fairdatacollective.org/gdmt/application-x-dvi)  |  [application/x-elc](http://vocab.fairdatacollective.org/gdmt/application-x-elc)  |  [application/x-envoy](http://vocab.fairdatacollective.org/gdmt/application-x-envoy)  |  [application/x-esrehber](http://vocab.fairdatacollective.org/gdmt/application-x-esrehber)  |  [application/x-excel](http://vocab.fairdatacollective.org/gdmt/application-x-excel)  |  [application/x-fictionbook](http://vocab.fairdatacollective.org/gdmt/application-x-fictionbook)  |  [application/x-frame](http://vocab.fairdatacollective.org/gdmt/application-x-frame)  |  [application/x-freearc](http://vocab.fairdatacollective.org/gdmt/application-x-freearc)  |  [application/x-freelance](http://vocab.fairdatacollective.org/gdmt/application-x-freelance)  |  [application/x-gsp](http://vocab.fairdatacollective.org/gdmt/application-x-gsp)  |  [application/x-gss](http://vocab.fairdatacollective.org/gdmt/application-x-gss)  |  [application/x-gtar](http://vocab.fairdatacollective.org/gdmt/application-x-gtar)  |  [application/x-gzip](http://vocab.fairdatacollective.org/gdmt/application-x-gzip)  |  [application/x-hdf](http://vocab.fairdatacollective.org/gdmt/application-x-hdf)  |  [application/x-helpfile](http://vocab.fairdatacollective.org/gdmt/application-x-helpfile)  |  [application/x-httpd-imap](http://vocab.fairdatacollective.org/gdmt/application-x-httpd-imap)  |  [application/x-ima](http://vocab.fairdatacollective.org/gdmt/application-x-ima)  |  [application/x-internett-signup](http://vocab.fairdatacollective.org/gdmt/application-x-internett-signup)  |  [application/x-inventor](http://vocab.fairdatacollective.org/gdmt/application-x-inventor)  |  [application/x-ip2](http://vocab.fairdatacollective.org/gdmt/application-x-ip2)  |  [application/x-java-class](http://vocab.fairdatacollective.org/gdmt/application-x-java-class)  |  [application/x-java-commerce](http://vocab.fairdatacollective.org/gdmt/application-x-java-commerce)  |  [application/x-javascript](http://vocab.fairdatacollective.org/gdmt/application-x-javascript)  |  [application/x-koan](http://vocab.fairdatacollective.org/gdmt/application-x-koan)  |  [application/x-ksh](http://vocab.fairdatacollective.org/gdmt/application-x-ksh)  |  [application/x-latex](http://vocab.fairdatacollective.org/gdmt/application-x-latex)  |  [application/x-lha](http://vocab.fairdatacollective.org/gdmt/application-x-lha)  |  [application/x-lisp](http://vocab.fairdatacollective.org/gdmt/application-x-lisp)  |  [application/x-livescreen](http://vocab.fairdatacollective.org/gdmt/application-x-livescreen)  |  [application/x-lotus](http://vocab.fairdatacollective.org/gdmt/application-x-lotus)  |  [application/x-lotusscreencam](http://vocab.fairdatacollective.org/gdmt/application-x-lotusscreencam)  |  [application/x-lzh](http://vocab.fairdatacollective.org/gdmt/application-x-lzh)  |  [application/x-lzx](http://vocab.fairdatacollective.org/gdmt/application-x-lzx)  |  [application/x-mac-binhex40](http://vocab.fairdatacollective.org/gdmt/application-x-mac-binhex40)  |  [application/x-macbinary](http://vocab.fairdatacollective.org/gdmt/application-x-macbinary)  |  [application/x-magic-cap-package-1.0](http://vocab.fairdatacollective.org/gdmt/application-x-magic-cap-package-1.0)  |  [application/x-mathcad](http://vocab.fairdatacollective.org/gdmt/application-x-mathcad)  |  [application/x-meme](http://vocab.fairdatacollective.org/gdmt/application-x-meme)  |  [application/x-midi](http://vocab.fairdatacollective.org/gdmt/application-x-midi)  |  [application/x-mif](http://vocab.fairdatacollective.org/gdmt/application-x-mif)  |  [application/x-mix-transfer](http://vocab.fairdatacollective.org/gdmt/application-x-mix-transfer)  |  [application/x-mplayer2](http://vocab.fairdatacollective.org/gdmt/application-x-mplayer2)  |  [application/x-msexcel](http://vocab.fairdatacollective.org/gdmt/application-x-msexcel)  |  [application/x-mspowerpoint](http://vocab.fairdatacollective.org/gdmt/application-x-mspowerpoint)  |  [application/x-navi-animation](http://vocab.fairdatacollective.org/gdmt/application-x-navi-animation)  |  [application/x-navidoc](http://vocab.fairdatacollective.org/gdmt/application-x-navidoc)  |  [application/x-navimap](http://vocab.fairdatacollective.org/gdmt/application-x-navimap)  |  [application/x-navistyle](http://vocab.fairdatacollective.org/gdmt/application-x-navistyle)  |  [application/x-netcdf](http://vocab.fairdatacollective.org/gdmt/application-x-netcdf)  |  [application/x-newton-compatible-pkg](http://vocab.fairdatacollective.org/gdmt/application-x-newton-compatible-pkg)  |  [application/x-nokia-9000-communicator-add-on-software](http://vocab.fairdatacollective.org/gdmt/application-x-nokia-9000-communicator-add-on-software)  |  [application/x-omc](http://vocab.fairdatacollective.org/gdmt/application-x-omc)  |  [application/x-omcdatamaker](http://vocab.fairdatacollective.org/gdmt/application-x-omcdatamaker)  |  [application/x-omcregerator](http://vocab.fairdatacollective.org/gdmt/application-x-omcregerator)  |  [application/x-pagemaker](http://vocab.fairdatacollective.org/gdmt/application-x-pagemaker)  |  [application/x-pcl](http://vocab.fairdatacollective.org/gdmt/application-x-pcl)  |  [application/x-pixclscript](http://vocab.fairdatacollective.org/gdmt/application-x-pixclscript)  |  [application/x-pkcs10](http://vocab.fairdatacollective.org/gdmt/application-x-pkcs10)  |  [application/x-pkcs12](http://vocab.fairdatacollective.org/gdmt/application-x-pkcs12)  |  [application/x-pkcs7-certificates](http://vocab.fairdatacollective.org/gdmt/application-x-pkcs7-certificates)  |  [application/x-pkcs7-certreqresp](http://vocab.fairdatacollective.org/gdmt/application-x-pkcs7-certreqresp)  |  [application/x-pkcs7-mime](http://vocab.fairdatacollective.org/gdmt/application-x-pkcs7-mime)  |  [application/x-pkcs7-signature](http://vocab.fairdatacollective.org/gdmt/application-x-pkcs7-signature)  |  [application/x-pointplus](http://vocab.fairdatacollective.org/gdmt/application-x-pointplus)  |  [application/x-portable-anymap](http://vocab.fairdatacollective.org/gdmt/application-x-portable-anymap)  |  [application/x-project](http://vocab.fairdatacollective.org/gdmt/application-x-project)  |  [application/x-qpro](http://vocab.fairdatacollective.org/gdmt/application-x-qpro)  |  [application/x-rar-compressed](http://vocab.fairdatacollective.org/gdmt/application-x-rar-compressed)  |  [application/x-rtf](http://vocab.fairdatacollective.org/gdmt/application-x-rtf)  |  [application/x-sdp](http://vocab.fairdatacollective.org/gdmt/application-x-sdp)  |  [application/x-sea](http://vocab.fairdatacollective.org/gdmt/application-x-sea)  |  [application/x-seelogo](http://vocab.fairdatacollective.org/gdmt/application-x-seelogo)  |  [application/x-sh](http://vocab.fairdatacollective.org/gdmt/application-x-sh)  |  [application/x-shar](http://vocab.fairdatacollective.org/gdmt/application-x-shar)  |  [application/x-shockwave-flash](http://vocab.fairdatacollective.org/gdmt/application-x-shockwave-flash)  |  [application/x-sit](http://vocab.fairdatacollective.org/gdmt/application-x-sit)  |  [application/x-sprite](http://vocab.fairdatacollective.org/gdmt/application-x-sprite)  |  [application/x-stuffit](http://vocab.fairdatacollective.org/gdmt/application-x-stuffit)  |  [application/x-sv4cpio](http://vocab.fairdatacollective.org/gdmt/application-x-sv4cpio)  |  [application/x-sv4crc](http://vocab.fairdatacollective.org/gdmt/application-x-sv4crc)  |  [application/x-tar](http://vocab.fairdatacollective.org/gdmt/application-x-tar)  |  [application/x-tbook](http://vocab.fairdatacollective.org/gdmt/application-x-tbook)  |  [application/x-tcl](http://vocab.fairdatacollective.org/gdmt/application-x-tcl)  |  [application/x-tex](http://vocab.fairdatacollective.org/gdmt/application-x-tex)  |  [application/x-texinfo](http://vocab.fairdatacollective.org/gdmt/application-x-texinfo)  |  [application/x-troff-man](http://vocab.fairdatacollective.org/gdmt/application-x-troff-man)  |  [application/x-troff-me](http://vocab.fairdatacollective.org/gdmt/application-x-troff-me)  |  [application/x-troff-ms](http://vocab.fairdatacollective.org/gdmt/application-x-troff-ms)  |  [application/x-troff-msvideo](http://vocab.fairdatacollective.org/gdmt/application-x-troff-msvideo)  |  [application/x-troff](http://vocab.fairdatacollective.org/gdmt/application-x-troff)  |  [application/x-ustar](http://vocab.fairdatacollective.org/gdmt/application-x-ustar)  |  [application/x-visio](http://vocab.fairdatacollective.org/gdmt/application-x-visio)  |  [application/x-vnd.audioexplosion.mzz](http://vocab.fairdatacollective.org/gdmt/application-x-vnd.audioexplosion.mzz)  |  [application/x-vnd.ls-xpix](http://vocab.fairdatacollective.org/gdmt/application-x-vnd.ls-xpix)  |  [application/x-vrml](http://vocab.fairdatacollective.org/gdmt/application-x-vrml)  |  [application/x-wais-source](http://vocab.fairdatacollective.org/gdmt/application-x-wais-source)  |  [application/x-winhelp](http://vocab.fairdatacollective.org/gdmt/application-x-winhelp)  |  [application/x-wintalk](http://vocab.fairdatacollective.org/gdmt/application-x-wintalk)  |  [application/x-world](http://vocab.fairdatacollective.org/gdmt/application-x-world)  |  [application/x-wpwin](http://vocab.fairdatacollective.org/gdmt/application-x-wpwin)  |  [application/x-wri](http://vocab.fairdatacollective.org/gdmt/application-x-wri)  |  [application/x-x509-ca-cert](http://vocab.fairdatacollective.org/gdmt/application-x-x509-ca-cert)  |  [application/x-x509-user-cert](http://vocab.fairdatacollective.org/gdmt/application-x-x509-user-cert)  |  [application/xhtml+xml](http://vocab.fairdatacollective.org/gdmt/application-xhtml+xml)  |  [application/xml](http://vocab.fairdatacollective.org/gdmt/application-xml)  |  [application/zip](http://vocab.fairdatacollective.org/gdmt/application-zip)  |  [audio/aac](http://vocab.fairdatacollective.org/gdmt/audio-aac)  |  [audio/aiff](http://vocab.fairdatacollective.org/gdmt/audio-aiff)  |  [audio/basic](http://vocab.fairdatacollective.org/gdmt/audio-basic)  |  [audio/it](http://vocab.fairdatacollective.org/gdmt/audio-it)  |  [audio/make.my.funk](http://vocab.fairdatacollective.org/gdmt/audio-make.my.funk)  |  [audio/make](http://vocab.fairdatacollective.org/gdmt/audio-make)  |  [audio/mid](http://vocab.fairdatacollective.org/gdmt/audio-mid)  |  [audio/midi](http://vocab.fairdatacollective.org/gdmt/audio-midi)  |  [audio/mod](http://vocab.fairdatacollective.org/gdmt/audio-mod)  |  [audio/mp3](http://vocab.fairdatacollective.org/gdmt/audio-mp3)  |  [audio/mpeg](http://vocab.fairdatacollective.org/gdmt/audio-mpeg)  |  [audio/nspaudio](http://vocab.fairdatacollective.org/gdmt/audio-nspaudio)  |  [audio/ogg](http://vocab.fairdatacollective.org/gdmt/audio-ogg)  |  [audio/s3m](http://vocab.fairdatacollective.org/gdmt/audio-s3m)  |  [audio/tsp-audio](http://vocab.fairdatacollective.org/gdmt/audio-tsp-audio)  |  [audio/tsplayer](http://vocab.fairdatacollective.org/gdmt/audio-tsplayer)  |  [audio/vnd.qcelp](http://vocab.fairdatacollective.org/gdmt/audio-vnd.qcelp)  |  [audio/voc](http://vocab.fairdatacollective.org/gdmt/audio-voc)  |  [audio/voxware](http://vocab.fairdatacollective.org/gdmt/audio-voxware)  |  [audio/wav](http://vocab.fairdatacollective.org/gdmt/audio-wav)  |  [audio/webm](http://vocab.fairdatacollective.org/gdmt/audio-webm)  |  [audio/x-adpcm](http://vocab.fairdatacollective.org/gdmt/audio-x-adpcm)  |  [audio/x-aiff](http://vocab.fairdatacollective.org/gdmt/audio-x-aiff)  |  [audio/x-au](http://vocab.fairdatacollective.org/gdmt/audio-x-au)  |  [audio/x-gsm](http://vocab.fairdatacollective.org/gdmt/audio-x-gsm)  |  [audio/x-jam](http://vocab.fairdatacollective.org/gdmt/audio-x-jam)  |  [audio/x-liveaudio](http://vocab.fairdatacollective.org/gdmt/audio-x-liveaudio)  |  [audio/x-mid](http://vocab.fairdatacollective.org/gdmt/audio-x-mid)  |  [audio/x-midi](http://vocab.fairdatacollective.org/gdmt/audio-x-midi)  |  [audio/x-mod](http://vocab.fairdatacollective.org/gdmt/audio-x-mod)  |  [audio/x-mpeg](http://vocab.fairdatacollective.org/gdmt/audio-x-mpeg)  |  [audio/x-mpequrl](http://vocab.fairdatacollective.org/gdmt/audio-x-mpequrl)  |  [audio/x-nspaudio](http://vocab.fairdatacollective.org/gdmt/audio-x-nspaudio)  |  [audio/x-pn-realaudio-plugin](http://vocab.fairdatacollective.org/gdmt/audio-x-pn-realaudio-plugin)  |  [audio/x-pn-realaudio](http://vocab.fairdatacollective.org/gdmt/audio-x-pn-realaudio)  |  [audio/x-psid](http://vocab.fairdatacollective.org/gdmt/audio-x-psid)  |  [audio/x-realaudio](http://vocab.fairdatacollective.org/gdmt/audio-x-realaudio)  |  [audio/x-twinvq-plugin](http://vocab.fairdatacollective.org/gdmt/audio-x-twinvq-plugin)  |  [audio/x-twinvq](http://vocab.fairdatacollective.org/gdmt/audio-x-twinvq)  |  [audio/x-vnd.audioexplosion.mjuicemediafile](http://vocab.fairdatacollective.org/gdmt/audio-x-vnd.audioexplosion.mjuicemediafile)  |  [audio/x-voc](http://vocab.fairdatacollective.org/gdmt/audio-x-voc)  |  [audio/x-wav](http://vocab.fairdatacollective.org/gdmt/audio-x-wav)  |  [audio/xm](http://vocab.fairdatacollective.org/gdmt/audio-xm)  |  [chemical/x-pdb](http://vocab.fairdatacollective.org/gdmt/chemical-x-pdb)  |  [drawing/x-dwf (old)](http://vocab.fairdatacollective.org/gdmt/drawing-x-dwf(old))  |  [font/otf](http://vocab.fairdatacollective.org/gdmt/font-otf)  |  [font/ttf](http://vocab.fairdatacollective.org/gdmt/font-ttf)  |  [font/woff2](http://vocab.fairdatacollective.org/gdmt/font-woff2)  |  [font/woff](http://vocab.fairdatacollective.org/gdmt/font-woff)  |  [i-world/i-vrml](http://vocab.fairdatacollective.org/gdmt/i-world-i-vrml)  |  [image/bmp](http://vocab.fairdatacollective.org/gdmt/image-bmp)  |  [image/cmu-raster](http://vocab.fairdatacollective.org/gdmt/image-cmu-raster)  |  [image/fif](http://vocab.fairdatacollective.org/gdmt/image-fif)  |  [image/florian](http://vocab.fairdatacollective.org/gdmt/image-florian)  |  [image/g3fax](http://vocab.fairdatacollective.org/gdmt/image-g3fax)  |  [image/gif](http://vocab.fairdatacollective.org/gdmt/image-gif)  |  [image/ief](http://vocab.fairdatacollective.org/gdmt/image-ief)  |  [image/jpeg](http://vocab.fairdatacollective.org/gdmt/image-jpeg)  |  [image/jutvision](http://vocab.fairdatacollective.org/gdmt/image-jutvision)  |  [image/naplps](http://vocab.fairdatacollective.org/gdmt/image-naplps)  |  [image/pict](http://vocab.fairdatacollective.org/gdmt/image-pict)  |  [image/pjpeg](http://vocab.fairdatacollective.org/gdmt/image-pjpeg)  |  [image/png](http://vocab.fairdatacollective.org/gdmt/image-png)  |  [image/svg+xml](http://vocab.fairdatacollective.org/gdmt/image-svg+xml)  |  [image/tiff](http://vocab.fairdatacollective.org/gdmt/image-tiff)  |  [image/vasa](http://vocab.fairdatacollective.org/gdmt/image-vasa)  |  [image/vnd.djvu](http://vocab.fairdatacollective.org/gdmt/image-vnd.djvu)  |  [image/vnd.dwg](http://vocab.fairdatacollective.org/gdmt/image-vnd.dwg)  |  [image/vnd.fpx](http://vocab.fairdatacollective.org/gdmt/image-vnd.fpx)  |  [image/vnd.microsoft.icon](http://vocab.fairdatacollective.org/gdmt/image-vnd.microsoft.icon)  |  [image/vnd.net-fpx](http://vocab.fairdatacollective.org/gdmt/image-vnd.net-fpx)  |  [image/vnd.rn-realflash](http://vocab.fairdatacollective.org/gdmt/image-vnd.rn-realflash)  |  [image/vnd.rn-realpix](http://vocab.fairdatacollective.org/gdmt/image-vnd.rn-realpix)  |  [image/vnd.wap.wbmp](http://vocab.fairdatacollective.org/gdmt/image-vnd.wap.wbmp)  |  [image/vnd.xiff](http://vocab.fairdatacollective.org/gdmt/image-vnd.xiff)  |  [image/webp](http://vocab.fairdatacollective.org/gdmt/image-webp)  |  [image/x-cmu-raster](http://vocab.fairdatacollective.org/gdmt/image-x-cmu-raster)  |  [image/x-dwg](http://vocab.fairdatacollective.org/gdmt/image-x-dwg)  |  [image/x-icon](http://vocab.fairdatacollective.org/gdmt/image-x-icon)  |  [image/x-jg](http://vocab.fairdatacollective.org/gdmt/image-x-jg)  |  [image/x-jps](http://vocab.fairdatacollective.org/gdmt/image-x-jps)  |  [image/x-niff](http://vocab.fairdatacollective.org/gdmt/image-x-niff)  |  [image/x-pcx](http://vocab.fairdatacollective.org/gdmt/image-x-pcx)  |  [image/x-pict](http://vocab.fairdatacollective.org/gdmt/image-x-pict)  |  [image/x-portable-anymap](http://vocab.fairdatacollective.org/gdmt/image-x-portable-anymap)  |  [image/x-portable-bitmap](http://vocab.fairdatacollective.org/gdmt/image-x-portable-bitmap)  |  [image/x-portable-graymap](http://vocab.fairdatacollective.org/gdmt/image-x-portable-graymap)  |  [image/x-portable-greymap](http://vocab.fairdatacollective.org/gdmt/image-x-portable-greymap)  |  [image/x-portable-pixmap](http://vocab.fairdatacollective.org/gdmt/image-x-portable-pixmap)  |  [image/x-quicktime](http://vocab.fairdatacollective.org/gdmt/image-x-quicktime)  |  [image/x-rgb](http://vocab.fairdatacollective.org/gdmt/image-x-rgb)  |  [image/x-tiff](http://vocab.fairdatacollective.org/gdmt/image-x-tiff)  |  [image/x-windows-bmp](http://vocab.fairdatacollective.org/gdmt/image-x-windows-bmp)  |  [image/x-xbitmap](http://vocab.fairdatacollective.org/gdmt/image-x-xbitmap)  |  [image/x-xbm](http://vocab.fairdatacollective.org/gdmt/image-x-xbm)  |  [image/x-xpixmap](http://vocab.fairdatacollective.org/gdmt/image-x-xpixmap)  |  [image/x-xwd](http://vocab.fairdatacollective.org/gdmt/image-x-xwd)  |  [image/x-xwindowdump](http://vocab.fairdatacollective.org/gdmt/image-x-xwindowdump)  |  [image/xbm](http://vocab.fairdatacollective.org/gdmt/image-xbm)  |  [image/xpm](http://vocab.fairdatacollective.org/gdmt/image-xpm)  |  [message/rfc822](http://vocab.fairdatacollective.org/gdmt/message-rfc822)  |  [model/iges](http://vocab.fairdatacollective.org/gdmt/model-iges)  |  [model/vnd.dwf](http://vocab.fairdatacollective.org/gdmt/model-vnd.dwf)  |  [model/vrml](http://vocab.fairdatacollective.org/gdmt/model-vrml)  |  [model/x-pov](http://vocab.fairdatacollective.org/gdmt/model-x-pov)  |  [multipart/x-gzip](http://vocab.fairdatacollective.org/gdmt/multipart-x-gzip)  |  [multipart/x-ustar](http://vocab.fairdatacollective.org/gdmt/multipart-x-ustar)  |  [music/crescendo](http://vocab.fairdatacollective.org/gdmt/music-crescendo)  |  [music/x-karaoke](http://vocab.fairdatacollective.org/gdmt/music-x-karaoke)  |  [paleovu/x-pv](http://vocab.fairdatacollective.org/gdmt/paleovu-x-pv)  |  [text/asp](http://vocab.fairdatacollective.org/gdmt/text-asp)  |  [text/calendar](http://vocab.fairdatacollective.org/gdmt/text-calendar)  |  [text/css](http://vocab.fairdatacollective.org/gdmt/text-css)  |  [text/csv](http://vocab.fairdatacollective.org/gdmt/text-csv)  |  [text/ecmascript](http://vocab.fairdatacollective.org/gdmt/text-ecmascript)  |  [text/fb2](http://vocab.fairdatacollective.org/gdmt/text-fb2)  |  [text/html](http://vocab.fairdatacollective.org/gdmt/text-html)  |  [text/javascript](http://vocab.fairdatacollective.org/gdmt/text-javascript)  |  [text/mcf](http://vocab.fairdatacollective.org/gdmt/text-mcf)  |  [text/pascal](http://vocab.fairdatacollective.org/gdmt/text-pascal)  |  [text/plain](http://vocab.fairdatacollective.org/gdmt/text-plain)  |  [text/richtext](http://vocab.fairdatacollective.org/gdmt/text-richtext)  |  [text/scriplet](http://vocab.fairdatacollective.org/gdmt/text-scriplet)  |  [text/sgml](http://vocab.fairdatacollective.org/gdmt/text-sgml)  |  [text/tab-separated-values](http://vocab.fairdatacollective.org/gdmt/text-tab-separated-values)  |  [text/uri-list](http://vocab.fairdatacollective.org/gdmt/text-uri-list)  |  [text/vnd.abc](http://vocab.fairdatacollective.org/gdmt/text-vnd.abc)  |  [text/vnd.fmi.flexstor](http://vocab.fairdatacollective.org/gdmt/text-vnd.fmi.flexstor)  |  [text/vnd.rn-realtext](http://vocab.fairdatacollective.org/gdmt/text-vnd.rn-realtext)  |  [text/vnd.wap.wml](http://vocab.fairdatacollective.org/gdmt/text-vnd.wap.wml)  |  [text/vnd.wap.wmlscript](http://vocab.fairdatacollective.org/gdmt/text-vnd.wap.wmlscript)  |  [text/webviewhtml](http://vocab.fairdatacollective.org/gdmt/text-webviewhtml)  |  [text/x-asm](http://vocab.fairdatacollective.org/gdmt/text-x-asm)  |  [text/x-audiosoft-intra](http://vocab.fairdatacollective.org/gdmt/text-x-audiosoft-intra)  |  [text/x-c](http://vocab.fairdatacollective.org/gdmt/text-x-c)  |  [text/x-component](http://vocab.fairdatacollective.org/gdmt/text-x-component)  |  [text/x-fortran](http://vocab.fairdatacollective.org/gdmt/text-x-fortran)  |  [text/x-h](http://vocab.fairdatacollective.org/gdmt/text-x-h)  |  [text/x-java-source](http://vocab.fairdatacollective.org/gdmt/text-x-java-source)  |  [text/x-la-asf](http://vocab.fairdatacollective.org/gdmt/text-x-la-asf)  |  [text/x-m](http://vocab.fairdatacollective.org/gdmt/text-x-m)  |  [text/x-pascal](http://vocab.fairdatacollective.org/gdmt/text-x-pascal)  |  [text/x-script.csh](http://vocab.fairdatacollective.org/gdmt/text-x-script.csh)  |  [text/x-script.elisp](http://vocab.fairdatacollective.org/gdmt/text-x-script.elisp)  |  [text/x-script.guile](http://vocab.fairdatacollective.org/gdmt/text-x-script.guile)  |  [text/x-script.ksh](http://vocab.fairdatacollective.org/gdmt/text-x-script.ksh)  |  [text/x-script.lisp](http://vocab.fairdatacollective.org/gdmt/text-x-script.lisp)  |  [text/x-script.perl-module](http://vocab.fairdatacollective.org/gdmt/text-x-script.perl-module)  |  [text/x-script.perl](http://vocab.fairdatacollective.org/gdmt/text-x-script.perl)  |  [text/x-script.phyton](http://vocab.fairdatacollective.org/gdmt/text-x-script.phyton)  |  [text/x-script.rexx](http://vocab.fairdatacollective.org/gdmt/text-x-script.rexx)  |  [text/x-script.scheme](http://vocab.fairdatacollective.org/gdmt/text-x-script.scheme)  |  [text/x-script.sh](http://vocab.fairdatacollective.org/gdmt/text-x-script.sh)  |  [text/x-script.tcl](http://vocab.fairdatacollective.org/gdmt/text-x-script.tcl)  |  [text/x-script.tcsh](http://vocab.fairdatacollective.org/gdmt/text-x-script.tcsh)  |  [text/x-script.zsh](http://vocab.fairdatacollective.org/gdmt/text-x-script.zsh)  |  [text/x-script](http://vocab.fairdatacollective.org/gdmt/text-x-script)  |  [text/x-server-parsed-html](http://vocab.fairdatacollective.org/gdmt/text-x-server-parsed-html)  |  [text/x-setext](http://vocab.fairdatacollective.org/gdmt/text-x-setext)  |  [text/x-sgml](http://vocab.fairdatacollective.org/gdmt/text-x-sgml)  |  [text/x-speech](http://vocab.fairdatacollective.org/gdmt/text-x-speech)  |  [text/x-uil](http://vocab.fairdatacollective.org/gdmt/text-x-uil)  |  [text/x-uuencode](http://vocab.fairdatacollective.org/gdmt/text-x-uuencode)  |  [text/x-vcalendar](http://vocab.fairdatacollective.org/gdmt/text-x-vcalendar)  |  [text/xml](http://vocab.fairdatacollective.org/gdmt/text-xml)  |  [video/3gpp2](http://vocab.fairdatacollective.org/gdmt/video-3gpp2)  |  [video/3gpp](http://vocab.fairdatacollective.org/gdmt/video-3gpp)  |  [video/animaflex](http://vocab.fairdatacollective.org/gdmt/video-animaflex)  |  [video/avi](http://vocab.fairdatacollective.org/gdmt/video-avi)  |  [video/avs-video](http://vocab.fairdatacollective.org/gdmt/video-avs-video)  |  [video/dl](http://vocab.fairdatacollective.org/gdmt/video-dl)  |  [video/fli](http://vocab.fairdatacollective.org/gdmt/video-fli)  |  [video/gl](http://vocab.fairdatacollective.org/gdmt/video-gl)  |  [video/mp2t](http://vocab.fairdatacollective.org/gdmt/video-mp2t)  |  [video/mp4](http://vocab.fairdatacollective.org/gdmt/video-mp4)  |  [video/mpeg](http://vocab.fairdatacollective.org/gdmt/video-mpeg)  |  [video/msvideo](http://vocab.fairdatacollective.org/gdmt/video-msvideo)  |  [video/ogg](http://vocab.fairdatacollective.org/gdmt/video-ogg)  |  [video/quicktime](http://vocab.fairdatacollective.org/gdmt/video-quicktime)  |  [video/vdo](http://vocab.fairdatacollective.org/gdmt/video-vdo)  |  [video/vivo](http://vocab.fairdatacollective.org/gdmt/video-vivo)  |  [video/vnd.rn-realvideo](http://vocab.fairdatacollective.org/gdmt/video-vnd.rn-realvideo)  |  [video/vnd.vivo](http://vocab.fairdatacollective.org/gdmt/video-vnd.vivo)  |  [video/vosaic](http://vocab.fairdatacollective.org/gdmt/video-vosaic)  |  [video/webm](http://vocab.fairdatacollective.org/gdmt/video-webm)  |  [video/x-amt-demorun](http://vocab.fairdatacollective.org/gdmt/video-x-amt-demorun)  |  [video/x-amt-showrun](http://vocab.fairdatacollective.org/gdmt/video-x-amt-showrun)  |  [video/x-atomic3d-feature](http://vocab.fairdatacollective.org/gdmt/video-x-atomic3d-feature)  |  [video/x-dl](http://vocab.fairdatacollective.org/gdmt/video-x-dl)  |  [video/x-dv](http://vocab.fairdatacollective.org/gdmt/video-x-dv)  |  [video/x-fli](http://vocab.fairdatacollective.org/gdmt/video-x-fli)  |  [video/x-gl](http://vocab.fairdatacollective.org/gdmt/video-x-gl)  |  [video/x-isvideo](http://vocab.fairdatacollective.org/gdmt/video-x-isvideo)  |  [video/x-motion-jpeg](http://vocab.fairdatacollective.org/gdmt/video-x-motion-jpeg)  |  [video/x-mpeg](http://vocab.fairdatacollective.org/gdmt/video-x-mpeg)  |  [video/x-mpeq2a](http://vocab.fairdatacollective.org/gdmt/video-x-mpeq2a)  |  [video/x-ms-asf-plugin](http://vocab.fairdatacollective.org/gdmt/video-x-ms-asf-plugin)  |  [video/x-ms-asf](http://vocab.fairdatacollective.org/gdmt/video-x-ms-asf)  |  [video/x-msvideo](http://vocab.fairdatacollective.org/gdmt/video-x-msvideo)  |  [video/x-qtc](http://vocab.fairdatacollective.org/gdmt/video-x-qtc)  |  [video/x-scm](http://vocab.fairdatacollective.org/gdmt/video-x-scm)  |  [video/x-sgi-movie](http://vocab.fairdatacollective.org/gdmt/video-x-sgi-movie)  |  [windows/metafile](http://vocab.fairdatacollective.org/gdmt/windows-metafile)  |  [www/mime](http://vocab.fairdatacollective.org/gdmt/www-mime)  |  [x-conference/x-cooltalk](http://vocab.fairdatacollective.org/gdmt/x-conference-x-cooltalk)  |  [x-music/x-midi](http://vocab.fairdatacollective.org/gdmt/x-music-x-midi)  |  [x-world/x-3dmf](http://vocab.fairdatacollective.org/gdmt/x-world-x-3dmf)  |  [x-world/x-svr](http://vocab.fairdatacollective.org/gdmt/x-world-x-svr)  |  [x-world/x-vrml](http://vocab.fairdatacollective.org/gdmt/x-world-x-vrml)  |  [x-world/x-vrt](http://vocab.fairdatacollective.org/gdmt/x-world-x-vrt)  |  [xgl/drawing](http://vocab.fairdatacollective.org/gdmt/xgl-drawing)  |  [xgl/movie](http://vocab.fairdatacollective.org/gdmt/xgl-movie)
<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Distribution Media Type" : { },
  "@context" : {
    "Distribution Media Type" : "http://purl.org/radx-terms/metadata-terms/distributionMediaType"
  }
}
```

</div>
### Distribution Size
<span class="badge badge--optional">Optional</span>

Total size of data file distribution (in bytes).

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Distribution Size" : { },
  "@context" : {
    "Distribution Size" : "http://purl.org/radx-terms/metadata-terms/distributionSizeInBytes"
  }
}
```

</div>
### Distribution Access Protocol
<span class="badge badge--optional">Optional</span>

The protocol used to access the data file distribution.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Distribution Access Protocol" : { },
  "@context" : {
    "Distribution Access Protocol" : "http://purl.org/radx-terms/metadata-terms/distributionAccessProtocol"
  }
}
```

</div>
### Distribution Access Configuration
<span class="badge badge--optional">Optional</span>

The access protocol configuration for querying the data file distribution.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Distribution Access Configuration" : { },
  "@context" : {
    "Distribution Access Configuration" : "http://purl.org/radx-terms/metadata-terms/distributionAccessConfiguration"
  }
}
```

</div>
### Distribution Query Statement
<span class="badge badge--optional">Optional</span>

Technical statement(s) for querying the data file distribution.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Distribution Query Statement" : { },
  "@context" : {
    "Distribution Query Statement" : "http://purl.org/radx-terms/metadata-terms/distributionQueryStatement"
  }
}
```

</div>
## Data File Publication Date

Publication date of this distribution the data file.

### Data File Publication Date
<span class="badge badge--optional">Optional</span>

Date on which this distribution of the data file was published

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Publication Date" : { },
  "@context" : {
    "Data File Publication Date" : "http://purl.org/radx-terms/metadata-terms/distributionPublicationDate"
  }
}
```

</div>
### Publication Date Type
<span class="badge badge--derived">Derived</span>
<span class="badge badge--optional">Optional</span>

The value of this field is a fixed type and is automatically inserted.  This field should not be manually specified or edited.

Type of the date ('Published') with respect to the data file.  The value of this field is always [Published](http://vocab.fairdatacollective.org/gdmt/Published).

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Publication Date Type" : {
    "@value" : "[Published](http://vocab.fairdatacollective.org/gdmt/Published)"
  },
  "@context" : {
    "Publication Date Type" : "http://purl.org/radx-terms/metadata-terms/distributionPublicationDateType"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Publication Date" : {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/7e6057ce-3d3c-46bd-af9d-9c540aa672a7",
    "Data File Publication Date" : { },
    "Publication Date Type" : {
      "@value" : "[Published](http://vocab.fairdatacollective.org/gdmt/Published)"
    },
    "@context" : {
      "Publication Date Type" : "http://purl.org/radx-terms/metadata-terms/distributionPublicationDateType",
      "Data File Publication Date" : "http://purl.org/radx-terms/metadata-terms/distributionPublicationDate"
    }
  },
  "@context" : {
    "Data File Publication Date" : "http://purl.org/radx-terms/metadata-terms/distributionPublicationDescriptor"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Distributions" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/3d903cf2-a9e9-483d-aeea-0242ed3b95c2",
    "Distribution Publisher" : { },
    "Distribution Publisher Identifier" : { },
    "Distribution Publisher Identifier Scheme" : { },
    "Distribution Identifier" : { },
    "Distribution Identifier Type" : { },
    "Distribution Format" : { },
    "Distribution Media Type" : { },
    "Distribution Size" : { },
    "Distribution Access Protocol" : { },
    "Distribution Access Configuration" : { },
    "Distribution Query Statement" : { },
    "Data File Publication Date" : {
      "@id" : "https://repo.metadatacenter.org/template-element-instances/f0313af2-83f6-439f-8fe0-f311958515e1",
      "Data File Publication Date" : { },
      "Publication Date Type" : {
        "@value" : "[Published](http://vocab.fairdatacollective.org/gdmt/Published)"
      },
      "@context" : {
        "Publication Date Type" : "http://purl.org/radx-terms/metadata-terms/distributionPublicationDateType",
        "Data File Publication Date" : "http://purl.org/radx-terms/metadata-terms/distributionPublicationDate"
      }
    },
    "@context" : {
      "Distribution Format" : "http://purl.org/radx-terms/metadata-terms/distributionFormat",
      "Distribution Access Protocol" : "http://purl.org/radx-terms/metadata-terms/distributionAccessProtocol",
      "Distribution Publisher" : "http://purl.org/radx-terms/metadata-terms/distributionPublisher",
      "Data File Publication Date" : "http://purl.org/radx-terms/metadata-terms/distributionPublicationDescriptor",
      "Distribution Identifier Type" : "http://purl.org/radx-terms/metadata-terms/distributionIdentifierType",
      "Distribution Identifier" : "http://purl.org/radx-terms/metadata-terms/distributionIdentifier",
      "Distribution Publisher Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/distributionPublisherIdentifierScheme",
      "Distribution Query Statement" : "http://purl.org/radx-terms/metadata-terms/distributionQueryStatement",
      "Distribution Media Type" : "http://purl.org/radx-terms/metadata-terms/distributionMediaType",
      "Distribution Publisher Identifier" : "http://purl.org/radx-terms/metadata-terms/distributionPublisherIdentifier",
      "Distribution Access Configuration" : "http://purl.org/radx-terms/metadata-terms/distributionAccessConfiguration",
      "Distribution Size" : "http://purl.org/radx-terms/metadata-terms/distributionSizeInBytes"
    }
  } ],
  "@context" : {
    "Data File Distributions" : "http://purl.org/radx-terms/metadata-terms/distributionDescriptor"
  }
}
```

</div>
## Data Characteristics Summary

Characteristics of the data within the data file, particularly of the cohorts in the data file. This section provides multiple ways to enter such information; it is only necessary to enter the information in one of these formats.

### Data Characteristics Table in HTML
<span class="badge badge--optional">Optional</span>

Formatted HTML code for a table of summary statistics.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data Characteristics Table in HTML" : { },
  "@context" : {
    "Data Characteristics Table in HTML" : "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInHtml"
  }
}
```

</div>
### Data Characteristics Table in CSV
<span class="badge badge--optional">Optional</span>

Enter comma-separated values containing summary statistics characterizing this data file.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data Characteristics Table in CSV" : { },
  "@context" : {
    "Data Characteristics Table in CSV" : "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInCsv"
  }
}
```

</div>
### Data Characteristics Table in TSV
<span class="badge badge--optional">Optional</span>

Enter tab-separated values containing summary statistics characterizing this data file.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data Characteristics Table in TSV" : { },
  "@context" : {
    "Data Characteristics Table in TSV" : "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInTsv"
  }
}
```

</div>
### Data Characteristics Table in Key-Value Pairs
<span class="badge badge--optional">Optional</span>

Enter the name of the characteristic being described in the first (key) field, and the value for that characteristic in the second (value) field. Note this is a repeating field and so can support multiple key-value pairs.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data Characteristics Table in Key-Value Pairs" : [ ],
  "@context" : {
    "Data Characteristics Table in Key-Value Pairs" : "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInKeyValuePairs"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data Characteristics Summary" : {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/d55ef3af-ae60-4322-93c3-7e5bc5400203",
    "Data Characteristics Table in HTML" : { },
    "Data Characteristics Table in CSV" : { },
    "Data Characteristics Table in TSV" : { },
    "Data Characteristics Table in Key-Value Pairs" : [ ],
    "@context" : {
      "Data Characteristics Table in TSV" : "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInTsv",
      "Data Characteristics Table in CSV" : "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInCsv",
      "Data Characteristics Table in Key-Value Pairs" : "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInKeyValuePairs",
      "Data Characteristics Table in HTML" : "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsTableInHtml"
    }
  },
  "@context" : {
    "Data Characteristics Summary" : "http://purl.org/radx-terms/metadata-terms/dataCharacteristicsDescriptor"
  }
}
```

</div>
## Data Sources
<span class="badge badge--multi">Multi-valued</span>

A list of physical or conceptual entities (agents) that create the data streams that make up the described data file. A data source may or may not be associated with a fixed location; for example, a series of discrete sensors deployed over time, either to a single location or to a series of locations, may be considered a single data source in some systems.

### Data Source Name
<span class="badge badge--optional">Optional</span>

Human readable name of data source from which the variable(s) in the data stream(s) originate.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data Source Name" : { },
  "@context" : {
    "Data Source Name" : "http://purl.org/radx-terms/metadata-terms/dataSourceName"
  }
}
```

</div>
### Data Source Identifier
<span class="badge badge--optional">Optional</span>

Globally unique string that identifies the data source (e.g., PID of an instrument). This is a required field if you plan to describe the original source of a given Data Stream.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data Source Identifier" : { },
  "@context" : {
    "Data Source Identifier" : "http://purl.org/radx-terms/metadata-terms/dataSourceIdentifier"
  }
}
```

</div>
### Data Source Identifier Scheme
<span class="badge badge--optional">Optional</span>

The name of the scheme or authority used for the Data Source Identifier.

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/IdentifierType).

[ARK](http://vocab.fairdatacollective.org/gdmt/ARK)  |  [arXiv](http://vocab.fairdatacollective.org/gdmt/arXiv)  |  [bibcode](http://vocab.fairdatacollective.org/gdmt/bibcode)  |  [DOI](http://vocab.fairdatacollective.org/gdmt/DOI)  |  [EAN13](http://vocab.fairdatacollective.org/gdmt/EAN13)  |  [EISSN](http://vocab.fairdatacollective.org/gdmt/EISSN)  |  [Handle](http://vocab.fairdatacollective.org/gdmt/Handle)  |  [IGSN](http://vocab.fairdatacollective.org/gdmt/IGSN)  |  [IRI](http://vocab.fairdatacollective.org/gdmt/IRI)  |  [ISBN](http://vocab.fairdatacollective.org/gdmt/ISBN)  |  [ISSN](http://vocab.fairdatacollective.org/gdmt/ISSN)  |  [ISTC](http://vocab.fairdatacollective.org/gdmt/ISTC)  |  [LISSN](http://vocab.fairdatacollective.org/gdmt/LISSN)  |  [LSID](http://vocab.fairdatacollective.org/gdmt/LSID)  |  [PMID](http://vocab.fairdatacollective.org/gdmt/PMID)  |  [PURL](http://vocab.fairdatacollective.org/gdmt/PURL)  |  [UPC](http://vocab.fairdatacollective.org/gdmt/UPC)  |  [URI](http://vocab.fairdatacollective.org/gdmt/URI)  |  [URL](http://vocab.fairdatacollective.org/gdmt/URL)  |  [URN](http://vocab.fairdatacollective.org/gdmt/URN)  |  [w3id](http://vocab.fairdatacollective.org/gdmt/w3id)
<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data Source Identifier Scheme" : { },
  "@context" : {
    "Data Source Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/dataSourceIdentifierScheme"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data Sources" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/655810bd-1efe-456d-baf6-4d9e66d03169",
    "Data Source Name" : { },
    "Data Source Identifier" : { },
    "Data Source Identifier Scheme" : { },
    "@context" : {
      "Data Source Name" : "http://purl.org/radx-terms/metadata-terms/dataSourceName",
      "Data Source Identifier" : "http://purl.org/radx-terms/metadata-terms/dataSourceIdentifier",
      "Data Source Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/dataSourceIdentifierScheme"
    }
  } ],
  "@context" : {
    "Data Sources" : "http://purl.org/radx-terms/metadata-terms/dataSourceDescriptor"
  }
}
```

</div>
## Data Streams
<span class="badge badge--multi">Multi-valued</span>

A list of one or more variable records that contribute to this data file. Each data stream originates from a single data source (e.g., sensor, process, or person). A data stream can grow over time. 

### Data Stream Name
<span class="badge badge--optional">Optional</span>

Human readable name of collection of records coming from a data source. A data stream is a collection of one or more variable records originating from a single data source (e.g., sensor, process, or person). A data stream can grow over time.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data Stream Name" : { },
  "@context" : {
    "Data Stream Name" : "http://purl.org/radx-terms/metadata-terms/dataStreamName"
  }
}
```

</div>
### Data Stream Identifier
<span class="badge badge--optional">Optional</span>

Globally unique string that identifies the collection of records coming from a data source.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data Stream Identifier" : { },
  "@context" : {
    "Data Stream Identifier" : "http://purl.org/radx-terms/metadata-terms/dataStreamIdentifier"
  }
}
```

</div>
### Data Stream Identifier Scheme
<span class="badge badge--optional">Optional</span>

The name of the scheme or authority used for the Data Stream Identifier.

Values for this field are taken from the FDC-GDMT ontology.  You may [use BioPortal to search for values for this field](https://bioportal.bioontology.org/ontologies/FDC-GDMT/?p=classes&conceptid=http://vocab.fairdatacollective.org/gdmt/IdentifierType).

[ARK](http://vocab.fairdatacollective.org/gdmt/ARK)  |  [arXiv](http://vocab.fairdatacollective.org/gdmt/arXiv)  |  [bibcode](http://vocab.fairdatacollective.org/gdmt/bibcode)  |  [DOI](http://vocab.fairdatacollective.org/gdmt/DOI)  |  [EAN13](http://vocab.fairdatacollective.org/gdmt/EAN13)  |  [EISSN](http://vocab.fairdatacollective.org/gdmt/EISSN)  |  [Handle](http://vocab.fairdatacollective.org/gdmt/Handle)  |  [IGSN](http://vocab.fairdatacollective.org/gdmt/IGSN)  |  [IRI](http://vocab.fairdatacollective.org/gdmt/IRI)  |  [ISBN](http://vocab.fairdatacollective.org/gdmt/ISBN)  |  [ISSN](http://vocab.fairdatacollective.org/gdmt/ISSN)  |  [ISTC](http://vocab.fairdatacollective.org/gdmt/ISTC)  |  [LISSN](http://vocab.fairdatacollective.org/gdmt/LISSN)  |  [LSID](http://vocab.fairdatacollective.org/gdmt/LSID)  |  [PMID](http://vocab.fairdatacollective.org/gdmt/PMID)  |  [PURL](http://vocab.fairdatacollective.org/gdmt/PURL)  |  [UPC](http://vocab.fairdatacollective.org/gdmt/UPC)  |  [URI](http://vocab.fairdatacollective.org/gdmt/URI)  |  [URL](http://vocab.fairdatacollective.org/gdmt/URL)  |  [URN](http://vocab.fairdatacollective.org/gdmt/URN)  |  [w3id](http://vocab.fairdatacollective.org/gdmt/w3id)
<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data Stream Identifier Scheme" : { },
  "@context" : {
    "Data Stream Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/dataStreamIdentifierScheme"
  }
}
```

</div>
### Data Stream Variable Names
<span class="badge badge--optional">Optional</span>
<span class="badge badge--multi">Multi-valued</span>

The local names of variables contained in the data stream.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data Stream Variable Names" : [ { } ],
  "@context" : {
    "Data Stream Variable Names" : "http://purl.org/radx-terms/metadata-terms/dataStreamVariableName"
  }
}
```

</div>
### Data Stream Data Source Identifier
<span class="badge badge--optional">Optional</span>

Globally unique string that identifies the data source (e.g., PID of an instrument) that generated this Data Stream.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data Stream Data Source Identifier" : { },
  "@context" : {
    "Data Stream Data Source Identifier" : "http://purl.org/radx-terms/metadata-terms/dataStreamDataSourceIdentifier"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data Streams" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/f7b8fc9e-06a3-4acd-b990-718634c69cd8",
    "Data Stream Name" : { },
    "Data Stream Identifier" : { },
    "Data Stream Identifier Scheme" : { },
    "Data Stream Variable Names" : [ { } ],
    "Data Stream Data Source Identifier" : { },
    "@context" : {
      "Data Stream Identifier" : "http://purl.org/radx-terms/metadata-terms/dataStreamIdentifier",
      "Data Stream Data Source Identifier" : "http://purl.org/radx-terms/metadata-terms/dataStreamDataSourceIdentifier",
      "Data Stream Identifier Scheme" : "http://purl.org/radx-terms/metadata-terms/dataStreamIdentifierScheme",
      "Data Stream Variable Names" : "http://purl.org/radx-terms/metadata-terms/dataStreamVariableName",
      "Data Stream Name" : "http://purl.org/radx-terms/metadata-terms/dataStreamName"
    }
  } ],
  "@context" : {
    "Data Streams" : "http://purl.org/radx-terms/metadata-terms/dataStreamDescriptor"
  }
}
```

</div>
## Data File Creation Processes
<span class="badge badge--multi">Multi-valued</span>

A list of processes (activities) used to make the data file.

### Process Name
<span class="badge badge--optional">Optional</span>

Full name of the process that operates to make the data file or product.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Process Name" : { },
  "@context" : {
    "Process Name" : "http://purl.org/radx-terms/metadata-terms/creationProcessName"
  }
}
```

</div>
### Process IRI
<span class="badge badge--optional">Optional</span>

Unique identifier (IRI) for the process used to make the data file or product (preferably a resolvable and persistent identifier). 

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Process IRI" : { },
  "@context" : {
    "Process IRI" : "http://purl.org/radx-terms/metadata-terms/creationProcessIri"
  }
}
```

</div>
### Process Version
<span class="badge badge--optional">Optional</span>

Version of the process used to make this data file, typically a string (e.g., '3.0.3'). It may be a software release tag, e.g., in GitHub.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Process Version" : { },
  "@context" : {
    "Process Version" : "http://purl.org/radx-terms/metadata-terms/creationProcessVersion"
  }
}
```

</div>
### Process Execution Identifier
<span class="badge badge--optional">Optional</span>

Identification of the particular run of the process used to make this data file. 

This is a deterministic string; in software, typically it is either a timestamp combined with the machine on which the software was executed; or a unique identifier generated by the controlling software for each run of the process.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Process Execution Identifier" : { },
  "@context" : {
    "Process Execution Identifier" : "http://purl.org/radx-terms/metadata-terms/creationProcessExecutionIdentifier"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Creation Processes" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/19922d03-6346-43c2-ab9c-0d9ed75114db",
    "Process Name" : { },
    "Process IRI" : { },
    "Process Version" : { },
    "Process Execution Identifier" : { },
    "@context" : {
      "Process Name" : "http://purl.org/radx-terms/metadata-terms/creationProcessName",
      "Process Execution Identifier" : "http://purl.org/radx-terms/metadata-terms/creationProcessExecutionIdentifier",
      "Process IRI" : "http://purl.org/radx-terms/metadata-terms/creationProcessIri",
      "Process Version" : "http://purl.org/radx-terms/metadata-terms/creationProcessVersion"
    }
  } ],
  "@context" : {
    "Data File Creation Processes" : "http://purl.org/radx-terms/metadata-terms/dataFileCreationProcessDescriptor"
  }
}
```

</div>
## Data File Temporal Coverage
<span class="badge badge--multi">Multi-valued</span>

A list of temporal descriptions that specify the temporal coverage of the data contained within the data file associated with this metadata.

### Temporal Extent Minimum Value
<span class="badge badge--optional">Optional</span>

The start date (and optionally time) of the data.

Note that dates must be specified in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. This format specifies date/times in a locale neutral way with temporal components ordered largest to smallest, for example year, month, day. Note that times are in 24 hour clock (military time) format, thus 13:43 is 1:43pm. When times are specified a time zone must also be specified (Z or +00:00 indicates Greenwich Mean Time).

The date time 2022-11-23T01:23:45.678-07:00 specifies November 23, 2022 at just past 1:23am Pacific Daylight Time. Hyphens and colons are optional.

The date 2022-09-23 specifies September 23, 2022 (without a time stamp). Dates are assumed GMT if no time zone is specified.

<div class="example">
<div class="example-heading">Example</div>
<p>2022-06-01</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Temporal Extent Minimum Value" : {
    "@value" : "2022-06-01",
    "@type" : "http://www.w3.org/2001/XMLSchema#date"
  },
  "@context" : {
    "Temporal Extent Minimum Value" : "http://purl.org/radx-terms/metadata-terms/temporalExtentMinimumValue"
  }
}
```

</div>
### Temporal Extent Maximum Value
<span class="badge badge--optional">Optional</span>

The end date (and optionally time) of the data.

Note that dates must be specified in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format. This format specifies date/times in a locale neutral way with temporal components ordered largest to smallest, for example year, month, day. Note that times are in 24 hour clock (military time) format, thus 13:43 is 1:43pm. When times are specified a time zone must also be specified (Z or +00:00 indicates Greenwich Mean Time).

The date time 2022-11-23T01:23:45.678-07:00 specifies November 23, 2022 at just past 1:23am Pacific Daylight Time. Hyphens and colons are optional.

The date 2022-09-23 specifies September 23, 2022 (without a time stamp). Dates are assumed GMT if no time zone is specified.

<div class="example">
<div class="example-heading">Example</div>
<p>2022-06-29</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Temporal Extent Maximum Value" : {
    "@value" : "2022-06-29",
    "@type" : "http://www.w3.org/2001/XMLSchema#date"
  },
  "@context" : {
    "Temporal Extent Maximum Value" : "http://purl.org/radx-terms/metadata-terms/temporalExtentMaximumValue"
  }
}
```

</div>
### Temporal Resolution
<span class="badge badge--optional">Optional</span>

The nominal time interval between the measurement time of one data record and that of the following data record, in seconds. Measurement time can be considered as the beginning, end, or other known point in the measurement process.

Most repeating measurement processes have some variation in the interval between measurements. If there is no planned schedule for the measurements, this value can be set to 0.

<div class="example">
<div class="example-heading">Example</div>
<p>3600</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Temporal Resolution" : {
    "@value" : "3600"
  },
  "@context" : {
    "Temporal Resolution" : "http://purl.org/radx-terms/metadata-terms/temporalResolution"
  }
}
```

</div>
### Duration
<span class="badge badge--derived">Derived</span>
<span class="badge badge--optional">Optional</span>

The value of this field is computed from the difference between the _Temporal Extent Minimum Value_ and _Temporal Extent Maximum Value_ fields, if both those fields are available.  This field should not be manually specified or edited.

The total duration of data temporal coverage, specified in in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) duration format.

P is the duration designator (for period) placed at the start of the duration representation.
- Y is the year designator that follows the value for the number of calendar years.
- M is the month designator that follows the value for the number of calendar months.
- W is the week designator that follows the value for the number of weeks.
- D is the day designator that follows the value for the number of calendar days.
T is the time designator that precedes the time components of the representation.
- H is the hour designator that follows the value for the number of hours.
- M is the minute designator that follows the value for the number of minutes.
- S is the second designator that follows the value for the number of seconds.

The duration format must begin with P, and include at least one designator and value; other designators may be dropped. The smallest designator may include a decimal fraction. For example, P8DT1.5H indicates a duration of 8 calendar days + 1.5 hours.

<div class="example">
<div class="example-heading">Example</div>
<p>P8DT1.5H</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Duration" : {
    "@value" : "P8DT1.5H"
  },
  "@context" : {
    "Duration" : "http://purl.org/radx-terms/metadata-terms/temporalCoverageDuration"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Temporal Coverage" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/c597a2b8-b71c-4aab-95eb-530b6a06e994",
    "Temporal Extent Minimum Value" : {
      "@value" : "2022-06-01",
      "@type" : "http://www.w3.org/2001/XMLSchema#date"
    },
    "Temporal Extent Maximum Value" : {
      "@value" : "2022-06-29",
      "@type" : "http://www.w3.org/2001/XMLSchema#date"
    },
    "Temporal Resolution" : {
      "@value" : "3600"
    },
    "Duration" : {
      "@value" : "P8DT1.5H"
    },
    "@context" : {
      "Duration" : "http://purl.org/radx-terms/metadata-terms/temporalCoverageDuration",
      "Temporal Resolution" : "http://purl.org/radx-terms/metadata-terms/temporalResolution",
      "Temporal Extent Maximum Value" : "http://purl.org/radx-terms/metadata-terms/temporalExtentMaximumValue",
      "Temporal Extent Minimum Value" : "http://purl.org/radx-terms/metadata-terms/temporalExtentMinimumValue"
    }
  } ],
  "@context" : {
    "Data File Temporal Coverage" : "http://purl.org/radx-terms/metadata-terms/temporalCoverageDescriptor"
  }
}
```

</div>
## Data File Spatial Coverage
<span class="badge badge--multi">Multi-valued</span>

A list of geospatial descriptions that specify the geographical coverage of the data contained within the data file associated with this metadata.

## Bounding Boxes
<span class="badge badge--multi">Multi-valued</span>

A list of geographical bounding boxes that specifies the geographical coverage of the data contained within the data file associated with this metadata.

### Maximum Latitude
<span class="badge badge--optional">Optional</span>

Location of the maximum, or northernmost, data point in this data file, expressed in decimal degrees (southern latitudes are negative).

37.5 specifies 37.5 degrees North (37 degrees and 30 minutes North)

-5.5  specifies 5.5 degrees South (5 degrees and 30 minutes South)

<div class="example">
<div class="example-heading">Example</div>
<p>-121.208178</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Maximum Latitude" : {
    "@value" : "-121.208178"
  },
  "@context" : {
    "Maximum Latitude" : "http://purl.org/radx-terms/metadata-terms/maxLatitude"
  }
}
```

</div>
### Minimum Latitude
<span class="badge badge--optional">Optional</span>

Location of the minimum, or southernmost, data point in this data file, expressed in decimal degrees (southern latitudes are negative).

37.5 specifies 37.5 degrees North (37 degrees and 30 minutes North)

-5.5  specifies 5.5 degrees South (5 degrees and 30 minutes South)

<div class="example">
<div class="example-heading">Example</div>
<p>-122.202653</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Minimum Latitude" : {
    "@value" : "-122.202653"
  },
  "@context" : {
    "Minimum Latitude" : "http://purl.org/radx-terms/metadata-terms/minLatitude"
  }
}
```

</div>
### Minimum Longitude
<span class="badge badge--optional">Optional</span>

Location of the minimum, or westernmost, data point in this data file, expressed in decimal degrees (western longitudes are negative)

150.0 specifies 150 degrees East

-122.0 specifies 122 degrees West

<div class="example">
<div class="example-heading">Example</div>
<p>36.892976</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Minimum Longitude" : {
    "@value" : "36.892976"
  },
  "@context" : {
    "Minimum Longitude" : "http://purl.org/radx-terms/metadata-terms/minLongitude"
  }
}
```

</div>
### Maximum Longitude
<span class="badge badge--optional">Optional</span>

Location of the maximum, or easternmost, data point in this data file, expressed in decimal degrees (western longitudes are negative)

150.0 specifies 150 degrees East

-122.0 specifies 122 degrees West

<div class="example">
<div class="example-heading">Example</div>
<p>37.484637</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Maximum Longitude" : {
    "@value" : "37.484637"
  },
  "@context" : {
    "Maximum Longitude" : "http://purl.org/radx-terms/metadata-terms/maxLongitude"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Bounding Boxes" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/8d4f8ec1-065e-41cd-b44b-c4dbcee17ccb",
    "Maximum Latitude" : {
      "@value" : "-121.208178"
    },
    "Minimum Latitude" : {
      "@value" : "-122.202653"
    },
    "Minimum Longitude" : {
      "@value" : "36.892976"
    },
    "Maximum Longitude" : {
      "@value" : "37.484637"
    },
    "@context" : {
      "Maximum Latitude" : "http://purl.org/radx-terms/metadata-terms/maxLatitude",
      "Maximum Longitude" : "http://purl.org/radx-terms/metadata-terms/maxLongitude",
      "Minimum Latitude" : "http://purl.org/radx-terms/metadata-terms/minLatitude",
      "Minimum Longitude" : "http://purl.org/radx-terms/metadata-terms/minLongitude"
    }
  } ],
  "@context" : {
    "Bounding Boxes" : "http://purl.org/radx-terms/metadata-terms/boundingBoxDescriptor"
  }
}
```

</div>
## Bounding Shapes
<span class="badge badge--multi">Multi-valued</span>

A list of geographical coordinates that specifies the external bounday of the polygon that describes the coverage of the data contained within the data file being described.

### Point Number
<span class="badge badge--optional">Optional</span>

Monotonically increasing identifier of the point in the shape being defined (defined in clockwise order and containing the right side of the closed shape). The last point must be the same as the first point.

<div class="example">
<div class="example-heading">Example</div>
<p>1</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Point Number" : {
    "@value" : "1",
    "@type" : "http://www.w3.org/2001/XMLSchema#int"
  },
  "@context" : {
    "Point Number" : "http://purl.org/radx-terms/metadata-terms/pointNumber"
  }
}
```

</div>
### Latitude
<span class="badge badge--optional">Optional</span>

Location of this point in north latitude decimal degrees (southern latitudes are negative)

37.5 specifies 37.5 degrees North (37 degrees and 30 minutes North)

-5.5  specifies 5.5 degrees South (5 degrees and 30 minutes South)

<div class="example">
<div class="example-heading">Example</div>
<p>10</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Latitude" : {
    "@value" : "10.0",
    "@type" : "http://www.w3.org/2001/XMLSchema#float"
  },
  "@context" : {
    "Latitude" : "http://purl.org/radx-terms/metadata-terms/latitude"
  }
}
```

</div>
### Longitude
<span class="badge badge--optional">Optional</span>

Location of this point in east longitude decimal degrees (western longitudes are negative)

150.0 specifies 150 degrees East

-122.0 specifies 122 degrees West

<div class="example">
<div class="example-heading">Example</div>
<p>150</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Longitude" : {
    "@value" : "150.0",
    "@type" : "http://www.w3.org/2001/XMLSchema#float"
  },
  "@context" : {
    "Longitude" : "http://purl.org/radx-terms/metadata-terms/longitude"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Bounding Shapes" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/5bd5e7b6-1ddb-4920-a147-a8ce45d56efd",
    "Point Number" : {
      "@value" : "1",
      "@type" : "http://www.w3.org/2001/XMLSchema#int"
    },
    "Latitude" : {
      "@value" : "10.0",
      "@type" : "http://www.w3.org/2001/XMLSchema#float"
    },
    "Longitude" : {
      "@value" : "150.0",
      "@type" : "http://www.w3.org/2001/XMLSchema#float"
    },
    "@context" : {
      "Latitude" : "http://purl.org/radx-terms/metadata-terms/latitude",
      "Longitude" : "http://purl.org/radx-terms/metadata-terms/longitude",
      "Point Number" : "http://purl.org/radx-terms/metadata-terms/pointNumber"
    }
  } ],
  "@context" : {
    "Bounding Shapes" : "http://purl.org/radx-terms/metadata-terms/boundingShapeDescriptor"
  }
}
```

</div>
## Data File Geopolitical Coverage
<span class="badge badge--multi">Multi-valued</span>

A list of regions specified by the totality of one or more place names

### Geopolitical region
<span class="badge badge--optional">Optional</span>
<span class="badge badge--multi">Multi-valued</span>

Place name depicting a geopolitical region. Recommended practice is to use [Geonames](http://www.geonames.org/search.html) to find an identifier matching any particular place.

<div class="example">
<div class="example-heading">Example</div>
<p><a href="https://www.geonames.org/5128581">New York City</a></p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Geopolitical region" : [ {
    "@value" : "[New York City](https://www.geonames.org/5128581)"
  } ],
  "@context" : {
    "Geopolitical region" : "http://purl.org/radx-terms/metadata-terms/geographicalPlaceName"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Geopolitical Coverage" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/15888865-bb38-4922-9e62-7ec9c2c96ecd",
    "Geopolitical region" : [ {
      "@value" : "[New York City](https://www.geonames.org/5128581)"
    } ],
    "@context" : {
      "Geopolitical region" : "http://purl.org/radx-terms/metadata-terms/geographicalPlaceName"
    }
  } ],
  "@context" : {
    "Data File Geopolitical Coverage" : "http://purl.org/radx-terms/metadata-terms/geopoliticalCoverageDescriptor"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Spatial Coverage" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/11ecae0e-8c0a-44d0-a22f-35aa8857abda",
    "Bounding Boxes" : [ {
      "@id" : "https://repo.metadatacenter.org/template-element-instances/3a660f6b-dcf5-4344-90e8-6f465d6bd3bd",
      "Maximum Latitude" : {
        "@value" : "-121.208178"
      },
      "Minimum Latitude" : {
        "@value" : "-122.202653"
      },
      "Minimum Longitude" : {
        "@value" : "36.892976"
      },
      "Maximum Longitude" : {
        "@value" : "37.484637"
      },
      "@context" : {
        "Maximum Latitude" : "http://purl.org/radx-terms/metadata-terms/maxLatitude",
        "Maximum Longitude" : "http://purl.org/radx-terms/metadata-terms/maxLongitude",
        "Minimum Latitude" : "http://purl.org/radx-terms/metadata-terms/minLatitude",
        "Minimum Longitude" : "http://purl.org/radx-terms/metadata-terms/minLongitude"
      }
    } ],
    "Bounding Shapes" : [ {
      "@id" : "https://repo.metadatacenter.org/template-element-instances/bd0a0998-eca8-462c-818e-216926a7666c",
      "Point Number" : {
        "@value" : "1",
        "@type" : "http://www.w3.org/2001/XMLSchema#int"
      },
      "Latitude" : {
        "@value" : "10.0",
        "@type" : "http://www.w3.org/2001/XMLSchema#float"
      },
      "Longitude" : {
        "@value" : "150.0",
        "@type" : "http://www.w3.org/2001/XMLSchema#float"
      },
      "@context" : {
        "Latitude" : "http://purl.org/radx-terms/metadata-terms/latitude",
        "Longitude" : "http://purl.org/radx-terms/metadata-terms/longitude",
        "Point Number" : "http://purl.org/radx-terms/metadata-terms/pointNumber"
      }
    } ],
    "Data File Geopolitical Coverage" : [ {
      "@id" : "https://repo.metadatacenter.org/template-element-instances/67f33ef1-b6ec-4135-bb15-8346d413cf81",
      "Geopolitical region" : [ {
        "@value" : "[New York City](https://www.geonames.org/5128581)"
      } ],
      "@context" : {
        "Geopolitical region" : "http://purl.org/radx-terms/metadata-terms/geographicalPlaceName"
      }
    } ],
    "@context" : {
      "Bounding Shapes" : "http://purl.org/radx-terms/metadata-terms/boundingShapeDescriptor",
      "Bounding Boxes" : "http://purl.org/radx-terms/metadata-terms/boundingBoxDescriptor",
      "Data File Geopolitical Coverage" : "http://purl.org/radx-terms/metadata-terms/geopoliticalCoverageDescriptor"
    }
  } ],
  "@context" : {
    "Data File Spatial Coverage" : "http://purl.org/radx-terms/metadata-terms/spatialCoverageDescriptor"
  }
}
```

</div>
## Data File Elevation Coverage
<span class="badge badge--multi">Multi-valued</span>

A list of elevation ranges encompassed by the data within the data file being described.

### Vertical Extent Minimum Value
<span class="badge badge--optional">Optional</span>

The minimum vertical extent of the data file collection, specified in meters. 

In case of depth, this is the maximum depth of data file collection (that is, it is a negative number of greater absolute magnitude than the Vertical Extent Maximum Value if that is also a depth). 

<div class="example">
<div class="example-heading">Example</div>
<p>-1223</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Vertical Extent Minimum Value" : {
    "@value" : "-1223.0",
    "@type" : "http://www.w3.org/2001/XMLSchema#float"
  },
  "@context" : {
    "Vertical Extent Minimum Value" : "http://purl.org/radx-terms/metadata-terms/minElevation"
  }
}
```

</div>
### Vertical Extent Maximum Value
<span class="badge badge--optional">Optional</span>

The maximum vertical extent of the collected, specified in meters. 

In case of depth, this is the minimum depth of data file collection (that is, it is a negative number of lesser absolute magnitude than the Vertical Extent Minimum Value). 

<div class="example">
<div class="example-heading">Example</div>
<p>-2.5</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Vertical Extent Maximum Value" : {
    "@value" : "-2.5",
    "@type" : "http://www.w3.org/2001/XMLSchema#float"
  },
  "@context" : {
    "Vertical Extent Maximum Value" : "http://purl.org/radx-terms/metadata-terms/maxElevation"
  }
}
```

</div>
### Vertical Extent Datum
<span class="badge badge--optional">Optional</span>

The name of the Datum (reference frame) used for the Vertical Extent values.

<div class="example">
<div class="example-heading">Example</div>
<p>WGS84</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Vertical Extent Datum" : {
    "@value" : "WGS84"
  },
  "@context" : {
    "Vertical Extent Datum" : "http://purl.org/radx-terms/metadata-terms/elevationReferenceFrame"
  }
}
```

</div>
### Vertical Extent Datum IRI
<span class="badge badge--optional">Optional</span>

The IRI (Internationalized Resource Identifier) of the Datum (reference frame) used for the Vertical Extent values.

<div class="example">
<div class="example-heading">Example</div>
<p>https://epsg.io/4326</p>

</div>

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Vertical Extent Datum IRI" : {
    "@id" : "https://epsg.io/4326"
  },
  "@context" : {
    "Vertical Extent Datum IRI" : "http://purl.org/radx-terms/metadata-terms/elevationReferenceFrameIri"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Elevation Coverage" : [ {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/9d0a1361-7eea-4dad-a007-e42ba8d9a7c1",
    "Vertical Extent Minimum Value" : {
      "@value" : "-1223.0",
      "@type" : "http://www.w3.org/2001/XMLSchema#float"
    },
    "Vertical Extent Maximum Value" : {
      "@value" : "-2.5",
      "@type" : "http://www.w3.org/2001/XMLSchema#float"
    },
    "Vertical Extent Datum" : {
      "@value" : "WGS84"
    },
    "Vertical Extent Datum IRI" : {
      "@id" : "https://epsg.io/4326"
    },
    "@context" : {
      "Vertical Extent Datum" : "http://purl.org/radx-terms/metadata-terms/elevationReferenceFrame",
      "Vertical Extent Minimum Value" : "http://purl.org/radx-terms/metadata-terms/minElevation",
      "Vertical Extent Maximum Value" : "http://purl.org/radx-terms/metadata-terms/maxElevation",
      "Vertical Extent Datum IRI" : "http://purl.org/radx-terms/metadata-terms/elevationReferenceFrameIri"
    }
  } ],
  "@context" : {
    "Data File Elevation Coverage" : "http://purl.org/radx-terms/metadata-terms/elevationCoverageDescriptor"
  }
}
```

</div>
## Auxiliary Metadata

Information about the data file or metadata submission that does not fit into the other categories

### Data File Descriptive Key-Value Pairs
<span class="badge badge--optional">Optional</span>

This field supports entry of both the metadata attribute name (in the first field), and the value for that attribute (in the second field). Note this is a repeating field and so can support multiple key-value pairs.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Data File Descriptive Key-Value Pairs" : [ ],
  "@context" : {
    "Data File Descriptive Key-Value Pairs" : "http://purl.org/radx-terms/metadata-terms/auxiliaryMetadataKeyValuePair"
  }
}
```

</div>
### Additional Commentary
<span class="badge badge--optional">Optional</span>
<span class="badge badge--multi">Multi-valued</span>

This text field can contain additional information about the data file or provided metadata. Multiple Additional Commentary fields may be filled out to address different topics.

<div class="example jsonld-example jsonld-example--field"><div class="example-heading">Example in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Additional Commentary" : [ { } ],
  "@context" : {
    "Additional Commentary" : "http://purl.org/radx-terms/metadata-terms/auxiliaryMetadataCommentary"
  }
}
```

</div>


<div class="example jsonld-example jsonld-example--element"><div class="example-heading">Example element in RADx Metadata Model JSON-LD</div>

```json
{
  "@id" : "",
  "Auxiliary Metadata" : {
    "@id" : "https://repo.metadatacenter.org/template-element-instances/d6c00bad-205d-4c47-8b2a-02cac6f0785e",
    "Data File Descriptive Key-Value Pairs" : [ ],
    "Additional Commentary" : [ { } ],
    "@context" : {
      "Data File Descriptive Key-Value Pairs" : "http://purl.org/radx-terms/metadata-terms/auxiliaryMetadataKeyValuePair",
      "Additional Commentary" : "http://purl.org/radx-terms/metadata-terms/auxiliaryMetadataCommentary"
    }
  },
  "@context" : {
    "Auxiliary Metadata" : "http://purl.org/radx-terms/metadata-terms/auxiliaryMetadataDescriptor"
  }
}
```

</div>
