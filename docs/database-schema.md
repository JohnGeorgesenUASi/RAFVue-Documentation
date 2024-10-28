---
sidebar_position: 2
---

# Database Schema

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="schema-design" label="Schema Design" default>


## Database Schema Structure

The schema structure for the 837 Parser can be found in the [Lucidchart diagram](https://lucid.app/lucidchart/7fba50c1-96e5-4676-a908-9d8c78b61a73/edit?invitationId=inv_6c19678c-7915-48e9-88a7-c4635d92e211&page=0_0#). This diagram provides an overview of the tables and their relationships in the MySQL database.

Please refer to the Lucidchart diagram for detailed information on the table structures, primary keys, foreign keys, and column definitions.

## Naming Convention

In the RAFVue application, the database schema follows a specific naming convention to handle different versions of the data model. The schema names are structured as follows:

- The main schema is named `{schema_name}`, where `{schema_name}` represents the actual name of the schema (e.g., demo_rafvue, rafvue).
- Subsequent versions of the schema are named `{schema_name}_v28`, `{schema_name}_vXX`, etc., where v28 and vXX represent the version numbers (e.g., demo_rafvue_v28, rafvue_v28, raf_schema_v30).

```
  departments.forEach((department) => {
    department.database_name_with_dot = department.database_name + ".";
    department.database_name_v28 = department.database_name + "_v28";
    department.database_name_v28_with_dot = department.database_name + "_v28.";
  });
```

This naming convention allows for the management of multiple versions of the data model within the same database, ensuring compatibility and data integrity across different versions of the RAFVue application.

</TabItem>
<TabItem value="837-parser" label="837 Parser" default>

## 837 Parser

This repository [837p Parser](https://github.com/JohnGeorgesenUASi/837-Parser) contains code for parsing 837p files and dumping the data into a MySQL database. The code creates base tables and follows the schema structure outlined in the [Lucidchart diagram](https://lucid.app/lucidchart/7fba50c1-96e5-4676-a908-9d8c78b61a73/edit?invitationId=inv_6c19678c-7915-48e9-88a7-c4635d92e211&page=0_0#).

### Overview

The 837 Parser performs the following tasks:

1. Parses 837p files, which contain healthcare claim information.
2. Extracts the raw data from the 837p files.
3. Dumps the extracted data into a MySQL database.
4. Creates the necessary base tables in the database to store the parsed data.

Note that the code in this repository only performs the initial parsing and dumping of the raw data. Further calculations and processing of the data are handled by separate code, which is not included in this repository.

### Base Tables
The base tables that will be created in the MySQL database by the 837 Parser code are defined in the `tables.sql` file. This file contains the SQL statements necessary to create the required tables based on the schema structure.
Please refer to the `tables.sql` file for the complete list of tables and their corresponding SQL CREATE statements.

### Usage

To use the 837 Parser:

1. Clone the repository to your local machine.
2. Set up a MySQL database and update the database connection details in the code.
3. Place the 837p files you want to parse in the designated input directory.
4. Run the parser script to parse the 837p files and dump the data into the MySQL database.

The parser will process each 837p file, extract the relevant data, and insert it into the corresponding tables in the database.

### Dependencies

The 837 Parser has the following dependencies:

- Python 
- MySQL Connector Python 

Make sure to install these dependencies before running the parser.

## Limitations

- The 837 Parser only handles 837p files and does not support other than 837 transaction types.
- The parser does not perform any data validation or error handling. It assumes that the 837p files are well-formed and compliant with the 837p format specifications.
- The parser only extracts the raw data and does not perform any calculations or transformations on the data. Further processing of the data is handled separately.

</TabItem>
<TabItem value="field-mapping" label="837-Database Mapping" default>
## EDI 837 to Database Field Mapping

This documentation outlines how fields from EDI 837 files are mapped to the corresponding database tables in our system. The code for same is present in the [parser.py](https://github.com/JohnGeorgesenUASi/837-Parser/blob/main/parse.py)

## Overview
The EDI 837 file structure is parsed and mapped to multiple database tables, maintaining relationships through transaction_id, subscriber_id, and claims_id fields.

## Table Mappings

### ISA (Interchange Control Header)
The `isa` table stores interchange control header information from ISA and GS segments:

| Database Field | EDI Source | Description |
|---------------|------------|-------------|
| AuthorizationInformationQualifier | ISA01 | Authorization Information Qualifier |
| AuthorizationInformation | ISA02 | Authorization Information |
| SecurityInformationQualifier | ISA03 | Security Information Qualifier |
| SecurityInformation | ISA04 | Security Information |
| InterchangeIDQualifierSender | ISA05 | Interchange ID Qualifier (Sender) |
| InterchangeSenderID | ISA06 | Interchange Sender ID |
| InterchangeIDQualifierReceiver | ISA07 | Interchange ID Qualifier (Receiver) |
| InterchangeReceiverID | ISA08 | Interchange Receiver ID |
| InterchangeDate | ISA09 | Interchange Date |
| InterchangeTime | ISA10 | Interchange Time |
| InterchangeControlStandardsIdentifier | ISA11 | Control Standards Identifier |
| InterchangeControlVersionNumber | ISA12 | Interchange Version Number |
| InterchangeControlNumber | ISA13 | Interchange Control Number |
| AcknowledgmentRequested | ISA14 | Acknowledgment Requested |
| UsageIndicator | ISA15 | Usage Indicator |
| ComponentElementSeparator | ISA16 | Component Element Separator |
| FunctionalIdentifierCode | GS01 | Functional Identifier Code |
| ApplicationSenderCode | GS02 | Application Sender Code |
| ApplicationReceiverCode | GS03 | Application Receiver Code |
| Date | GS04 | Date |
| Time | GS05 | Time |
| GroupControlNumber | GS06 | Group Control Number |
| ResponsibleAgencyCode | GS07 | Responsible Agency Code |
| VersionReleaseIndustryIdentifierCode | GS08 | Version/Release/Industry ID Code |

### Transaction
The `transaction` table stores transaction set header information from ST and BHT segments:

| Database Field | EDI Source | Description |
|---------------|------------|-------------|
| ControlNumber | ST02 | Transaction Set Control Number |
| ImplementationConventionReference | ST03 | Implementation Convention Reference |
| HierarchicalStructureCode | BHT01 | Hierarchical Structure Code |
| TransactionSetPurposeCode | BHT02 | Transaction Set Purpose Code |
| ReferenceIdentification | BHT03 | Reference Identification |
| Date | BHT04 | Transaction Set Date |
| Time | BHT05 | Transaction Set Time |
| TransactionTypeCode | BHT06 | Transaction Type Code |
| transaction_id | Generated | Unique Transaction Identifier |

### Submitter
The `submitter` table captures submitter information from NM1*41 and associated PER segments:

| Database Field | EDI Source | Description |
|---------------|------------|-------------|
| EntityTypeQualifier | NM1*41-02 | Entity Type Qualifier |
| OrganizationName | NM1*41-03 | Organization Name |
| FirstName | NM1*41-04 | First Name |
| MiddleName | NM1*41-05 | Middle Name |
| Prefix | NM1*41-06 | Name Prefix |
| Suffix | NM1*41-07 | Name Suffix |
| IdentificationCodeQualifier | NM1*41-08 | ID Code Qualifier |
| IdentificationCode | NM1*41-09 | ID Code |
| CommunicationContact | PER02 | Contact Function Code |
| TelephoneNumber | PER04 | Phone Number |
| FaxNumber | PER06 | Fax Number |
| Email | PER08 | Email Address |

### Receiver
The `receiver` table stores receiver information from NM1*40 segment:

| Database Field | EDI Source | Description |
|---------------|------------|-------------|
| EntityTypeQualifier | NM1*40-02 | Entity Type Qualifier |
| OrganizationName | NM1*40-03 | Organization Name |
| FirstName | NM1*40-04 | First Name |
| MiddleName | NM1*40-05 | Middle Name |
| Prefix | NM1*40-06 | Name Prefix |
| Suffix | NM1*40-07 | Name Suffix |
| IdentificationCodeQualifier | NM1*40-08 | ID Code Qualifier |
| IdentificationCode | NM1*40-09 | ID Code |

### Billing Provider
The `billing_provider` table captures billing provider information from HL*1, PRV, NM1*85, and associated segments:

| Database Field | EDI Source | Description |
|---------------|------------|-------------|
| EntityTypeQualifier | HL*1-04 | Entity Type Qualifier |
| ProviderCode | PRV01 | Provider Code |
| ReferenceIdentificationQualifier | PRV02 | Reference ID Qualifier |
| ReferenceIdentification | PRV03 | Reference ID |
| OrganizationName | NM1*85-03 | Organization Name |
| FirstName | NM1*85-04 | First Name |
| MiddleName | NM1*85-05 | Middle Name |
| Prefix | NM1*85-06 | Name Prefix |
| Suffix | NM1*85-07 | Name Suffix |
| IdentificationCodeQualifier | NM1*85-08 | ID Code Qualifier |
| IdentificationCode | NM1*85-09 | ID Code |
| Address | N3-01 | Street Address |
| City | N4-01 | City |
| State | N4-02 | State |
| PostalCode | N4-03 | Postal Code |
| ReferenceCodeQualifier | REF01 | Reference Code Qualifier |
| ReferenceCode | REF02 | Reference Code |
| CommunicationContact | PER02 | Contact Function Code |
| Telephone | PER04 | Phone Number |
| FaxNumber | PER06 | Fax Number |
| Email | PER08 | Email Address |

### Pay To Address
The `pay_to_address` table stores pay-to address information from NM1*87 and associated segments:

| Database Field | EDI Source | Description |
|---------------|------------|-------------|
| EntityType | NM1*87-02 | Entity Type Qualifier |
| Address | N3-01 | Street Address |
| City | N4-01 | City |
| State | N4-02 | State |
| PostalCode | N4-03 | Postal Code |

### Subscriber
The `subscriber` table captures subscriber information from SBR and associated segments:

| Database Field | EDI Source | Description |
|---------------|------------|-------------|
| PayerResponsibilityCode | SBR01 | Payer Responsibility Code |
| RelationshipCode | SBR02 | Individual Relationship Code |
| ReferralTypeCode | SBR03 | Reference Identification |
| Name | SBR04 | Name |
| InsuranceTypeCode | SBR05 | Insurance Type Code |
| CoordinationBenefitCode | SBR06 | Coordination of Benefits Code |
| ResponseCode | SBR07 | Yes/No Condition Code |
| EmploymentStatusCode | SBR08 | Employment Status Code |
| ClaimFilingIndicatorCode | SBR09 | Claim Filing Indicator Code |
| InsuredParty | NM1*IL-02 | Entity Type Qualifier |
| LastName | NM1*IL-03 | Last Name |
| FirstName | NM1*IL-04 | First Name |
| MiddleName | NM1*IL-05 | Middle Name |
| Prefix | NM1*IL-06 | Name Prefix |
| Suffix | NM1*IL-07 | Name Suffix |
| IdentificationCodeQualifier | NM1*IL-08 | ID Code Qualifier |
| IdentificationCode | NM1*IL-09 | ID Code |
| Address | N3-01 | Street Address |
| City | N4-01 | City |
| State | N4-02 | State |
| PostalCode | N4-03 | Postal Code |
| DateTimeFormatQualifier | DMG01 | Date Time Period Format Qualifier |
| DateOfBirth | DMG02 | Date of Birth |
| Gender | DMG03 | Gender Code |

### Patient
The `patient` table stores patient information from PAT and associated segments:

| Database Field | EDI Source | Description |
|---------------|------------|-------------|
| PatientRelationshipToInsured | PAT01 | Individual Relationship Code |
| DateTimeQualifier | PAT05 | Date Time Period Format Qualifier |
| PatientDeathDate | PAT06 | Patient Death Date |
| BasisOfMeasurement | PAT07 | Unit or Basis for Measurement Code |
| PatientWeight | PAT08 | Patient Weight |
| PregnencyIndicator | PAT09 | Pregnancy Indicator |
| EntityTypeQualifier | NM1*QC-02 | Entity Type Qualifier |
| LastName | NM1*QC-03 | Last Name |
| FirstName | NM1*QC-04 | First Name |
| MiddleName | NM1*QC-05 | Middle Name |
| Prefix | NM1*QC-06 | Name Prefix |
| Suffix | NM1*QC-07 | Name Suffix |
| Address | N3-01 | Street Address |
| City | N4-01 | City |
| State | N4-02 | State |
| PostalCode | N4-03 | Postal Code |
| DateTimeFormatQualifier | DMG01 | Date Time Period Format Qualifier |
| DateOfBirth | DMG02 | Date of Birth |
| Gender | DMG03 | Gender Code |

### Claims
The `claims` table captures claim information from CLM segment:

| Database Field | EDI Source | Description |
|---------------|------------|-------------|
| ClaimIdentifier | CLM01 | Claim ID |
| ClaimAmount | CLM02 | Total Claim Charge Amount |
| PlaceHolder1 | CLM03 | Placeholder |
| PlaceHolder2 | CLM04 | Placeholder |
| PlaceofService | CLM05-01 | Place of Service Code |
| PlaceofServiceCode | CLM05-02 | Facility Code |
| ClaimFrequencyTypeCode | CLM05-03 | Frequency Type Code |
| ProviderSignatureIndicator | CLM06 | Provider Accept Assignment Code |
| ProviderAcceptAssignment | CLM07 | Assignment or Plan Participation Code |
| ProviderBenefitsAssignmentCertification | CLM08 | Benefits Assignment Certification Code |
| ReleaseofInformationCode | CLM09 | Release of Information Code |
| ClientSignatureSourceCode | CLM10 | Patient Signature Source Code |
| AutoAccidentStateCode | CLM11-03 | State Code |
| AutoAccident | CLM11 | Auto Accident Flag |
| Employment | CLM11 | Employment Related Flag |
| OtherAccident | CLM11 | Other Accident Flag |
| SpecialProgramCode | CLM12 | Special Program Code |
| DelayReasonCode | CLM20 | Delay Reason Code |

## Related Tables

### Claim Date Time Period
The `claim_date_time_period` table maps DTP segments in claims:
- Qualifier: DTP01
- Format: DTP02  
- Date: DTP03

### Claims Reference
The `claims_reference` table maps REF segments in claims:
- ReferenceIdentificationQualifier: REF01
- ReferenceIdentification: REF02

### HCC Codes  
The `hcc_codes` table maps HI segments containing diagnosis codes:
- DiagnosisCodeQualifier: HI01-01 
- DiagnosisCode: HI01-02

### Physician
The `physician` table maps NM1*71 and PRV segments:
- Standard NM1 fields plus
- ProviderCode: PRV01
- ReferenceIdentificationQualifier: PRV02
- ReferenceIdentification: PRV03

### Service Facility Location
The `service_facility_location` table maps NM1*77 and associated segments:
- Standard NM1 fields plus address fields from N3/N4

### Service Lines
The `service_lines` table maps service line segments (LX loops):
- Multiple fields from SV1/SV2/DTP/REF segments within service lines

### Rendering Provider
The `rendering_provider` table maps rendering provider info within service lines:
- Maps to NM1 segments within service line loops

## Key Relationships
All tables maintain relationships via:
- transaction_id: Links to parent transaction
- subscriber_id: Links to parent subscriber  
- claims_id: Links claim details where applicable

## Notes
- Field lengths and data types are defined in the database schema
- Some segments may contain additional fields not currently mapped
- Validation rules should be applied during parsing/mapping

</TabItem>
<TabItem value="queries" label="File Scripts" default>
## Post-Processing SQL Files

After running the 837p parser and creating the basic schema in the MySQL database, several SQL files need to be executed to perform additional calculations, create new tables, and populate data for various features of the application. This documentation provides an overview of each SQL file and its purpose.


Note: Make sure to execute these SQL files in the correct order and after running the 837p parser and creating the basic schema in the MySQL database.

---

## 1. Add MRN to Subscribers

- File: [file1-after_base_tables.sql](https://mailuc-my.sharepoint.com/personal/ozermm_ucmail_uc_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024%2Ffile1%2Dafter%5Fbase%5Ftables%2Esql&parent=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024)
- Description: This file adds the MRN (Medical Record Number) to the base tables.

## 2. RAF Calculation

- File: [file2-raf_calc.sql](https://mailuc-my.sharepoint.com/personal/ozermm_ucmail_uc_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024%2Ffile2%2Draf%5Fcalc%2Esql&parent=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024)
- Description: This file performs the RAF (Risk Adjustment Factor) calculation.

## 3. Recapture Calculation

- File: [file3_recapture_calc.sql](https://mailuc-my.sharepoint.com/personal/ozermm_ucmail_uc_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024%2Ffile3%5Frecapture%5Fcalc%2Esql&parent=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024)
- Description: This file performs the recapture calculation.

## 4. Creating Final Patients Data

- File: [file4_final_patients_data.sql](https://mailuc-my.sharepoint.com/personal/ozermm_ucmail_uc_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024%2Ffile4%5Ffinal%5Fpatients%5Fdata%2Esql&parent=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024)
- Description: This file creates the `final_patients_data` table, which is used for displaying data on the baseline analytics page.

## 5. Patient Diagnosis and Review Details

- File: [file5_patient_diagnosis.sql](https://mailuc-my.sharepoint.com/personal/ozermm_ucmail_uc_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024%2Ffile5%5Fpatient%5Fdiagnosis%2Esql&parent=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024)
- Description: This file contains queries to create the `Final_Patients`, `patient_diagnosis`, and `patient_icd10_status` tables. These tables store each patient's data and review details status of their diagnosis.

## 6. Workflow Tables

- File: [file6_review_workflow_tables.sql](https://mailuc-my.sharepoint.com/personal/ozermm_ucmail_uc_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024%2Ffile6%5Freview%5Fworkflow%5Ftables%2Esql&parent=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024)
- Description: This file contains the CREATE queries for the workflow tables.

## 7. ITAC Analysis

- File: [file7_ITAC_Analysis.sql](https://mailuc-my.sharepoint.com/personal/ozermm_ucmail_uc_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024%2Ffile7%5FITAC%5FAnalysis%2Esql&parent=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024)
- Description: This file calculates the column values for the `ITAC_Analysis` table.

## 8. V28 Database Changes

- File: [file9_v28_db_changes.sql](https://mailuc-my.sharepoint.com/personal/ozermm_ucmail_uc_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024%2Ffile9%5Fv28%5Fdb%5Fchanges%2Esql&parent=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024)
- Description: This file performs the same calculations as the previous files but for the v28 database.

## 9. Provider Analysis Triggers

- File: [file10_triggers_provider_analysis.sql](https://mailuc-my.sharepoint.com/personal/ozermm_ucmail_uc_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024%2Ffile10%5Ftriggers%5Fprovider%5Fanalysis%2Esql&parent=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024)
- Description: This file contains triggers for the `provider_analysis` table.

## 10. Potential and Realized RAF

- File: [file11_potential_realized_raf.sql](https://mailuc-my.sharepoint.com/personal/ozermm_ucmail_uc_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024%2Ffile11%5Fpotential%5Frealized%5Fraf%2Esql&parent=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024)
- Description: This file creates the `post_rf_score` table and adds columns for potential and realized RAF. The codebase files (`post_review_rafscore.js`, `postReviewRafScoreV28.js`, `realized_rafscore.js`, `realized_rafscore_v28.js`) will handle the logic to calculate potential and realized RAF scores for a patient and save the values in the columns.

## 11. HCC Group Analysis

- File: [diagnostic_grouping_calc.sql](https://mailuc-my.sharepoint.com/personal/ozermm_ucmail_uc_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024%2Fdiagnostic%5Fgrouping%5Fcalc%2Esql&parent=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024)
- Description: This file contains queries to calculate values for HCC group analysis tab that is displayed on the baseline analysis page.

## 12. Provider Report for Baseline Analysis

- File: [provider_report_baseline.sql](https://mailuc-my.sharepoint.com/personal/ozermm_ucmail_uc_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024%2Fprovider%5Freport%5Fbaseline%2Esql&parent=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024)
- Description: This file contains the query to create the table to display on the provider report tab of the baseline analysis page.

## 13. Reset Workflow (Development Only)

- File: [reset_workflow.sql](https://mailuc-my.sharepoint.com/personal/ozermm_ucmail_uc_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024%2Freset%5Fworkflow%2Esql&parent=%2Fpersonal%2Fozermm%5Fucmail%5Fuc%5Fedu%2FDocuments%2FSQLQueries%2FRafvu%5FQueries%2FRAFvue%5Fdb%5FMay%202024)
- Description: This file is used purely for development purposes when there is a new workflow added or any changes to the codebase. It contains queries to clean the workflow, leaving all patients unassigned to any reviewers and deleting all review history.


</TabItem>
</Tabs>