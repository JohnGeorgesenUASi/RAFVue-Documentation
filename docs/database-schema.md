---
sidebar_position: 6
---

# Database Schema

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="schema-design" label="Schema Design" default>
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

### Schema Structure

The schema structure for the 837 Parser can be found in the [Lucidchart diagram](https://lucid.app/lucidchart/7fba50c1-96e5-4676-a908-9d8c78b61a73/edit?invitationId=inv_6c19678c-7915-48e9-88a7-c4635d92e211&page=0_0#). This diagram provides an overview of the tables and their relationships in the MySQL database.

Please refer to the Lucidchart diagram for detailed information on the table structures, primary keys, foreign keys, and column definitions.

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
<TabItem value="queries" label="Queries" default>
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