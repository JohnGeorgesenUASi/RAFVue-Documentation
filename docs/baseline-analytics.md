---
sidebar_position: 3
---

# Baseline Analytics

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

The `tabs_baseline.hbs` file serves as the main template file for the tabs displayed on the Baseline Analytics page. Each tab has its own separate .hbs file that is responsible for implementing the specific content and functionality associated with that tab.

<Tabs>
<TabItem value="patient-population-analysis" label="Patient Population Analysis" default>

### Key Components

1. **Data Summary**: Shows the total number of patients and provides a "Reset All" button to reset the filters.

2. **Risk Adjustment Summary**: Presents a table with the RAF score, RAF revenue, and chronic recapture percentages for v.24 and v.28, along with the variance.

3. **Charts**: Includes various charts to visualize the data:
   - Age Chart: Displays the distribution of patients by age group.
   - Gender Chart: Shows the distribution of patients by gender.
   - Population Chart: Represents the patient population by recapture opportunities.
   - Payer Chart: Visualizes the distribution of patients by payer.

4. **Patient Data Table**: Renders a table with detailed information about each patient, including MRN, name, age, gender, recapture count, payer, and RAF scores.

### Data Loading and Interaction

- The file uses AJAX to load the data for the charts and table from the server-side API endpoint (`./charts_data_baseline`).
- It utilizes the DataTables library to render the patient data table with pagination, sorting, and filtering capabilities.
- The charts are created using the dc.js library, which provides interactive and cross-filtering functionality.
- Clicking on a chart segment filters the data in the other charts and the patient data table.
- The "Reset" buttons allow resetting the filters for individual charts.
- The "Reset All" button resets all the filters and reloads the data.

### Sensitive Mode

- The file includes a "sensitive mode" feature, which replaces sensitive information (patient names and payer names) with fake data when enabled.
- The sensitive mode is controlled by the `{{sensitiveMode}}` variable in the server-side rendering.

</TabItem>
<TabItem value="hcc-detail" label="HCC Detail">

### Key Components

1. **Tabs**: Provides two tabs for switching between CMS v.24 and CMS v.28 HCC data.
   - CMS v.24 Tab: Displays the HCC detail table for CMS v.24 model.
   - CMS v.28 Tab: Displays the HCC detail table for CMS v.28 model.

2. **Acute/Chronic Dropdown**: Allows users to filter the HCC data based on the selected condition (Acute or Chronic).

3. **Data Tables**: Renders two data tables, one for CMS v.24 and another for CMS v.28, displaying various HCC-related metrics such as HCC code, description, weight, total HCCs, estimated dollars, recapture rate, and recapture potential.

4. **Download Data**: Provides buttons to download the displayed HCC data as CSV files.

### Data Loading and Interaction

- The file uses AJAX to load the HCC data from the server-side API endpoints (`./get_hcc_detail_v24` and `./get_hcc_detail_v28`) based on the selected tab and condition.
- It utilizes the DataTables library to render the HCC data tables with pagination, sorting, and filtering capabilities.
- The data tables are dynamically populated with the loaded HCC data.
- Clicking on the tab buttons switches between CMS v.24 and CMS v.28 data tables.
- Changing the selection in the Acute/Chronic dropdown filters the HCC data based on the selected condition.

</TabItem>
<TabItem value="hcc-group-analysis" label="HCC Group Analysis">
The "HCC Group Analysis" tab in the Baseline Analytics page provides insights into the diagnostic groups and their associated HCCs for both CMS v.24 and CMS v.28 models.

### Key Components

1. **Tabs**: The tab allows users to switch between CMS v.24 and CMS v.28 data views.
   - CMS v.24 Tab: Displays the diagnostic groups data for the CMS v.24 model.
   - CMS v.28 Tab: Displays the diagnostic groups data for the CMS v.28 model.

2. **Data Tables**: The tab includes two data tables, one for each CMS model (v.24 and v.28)

3. **Download Data**: Users can download the displayed diagnostic groups data as CSV files for each CMS model.

### Route and Service Layer

The route and service layer handle the API endpoints and database interactions for the HCC Group Analysis functionality. They are responsible for processing the requests, performing the necessary database operations, and returning the appropriate responses.

- The tab uses AJAX to load the diagnostic groups data from the server-side API endpoints (`./get_v24_groups_data` and `./get_v28_groups_data`).

- The `baseline_analytics.service.js` file contains the service layer logic for interacting with the database and performing the required operations.

</TabItem>
<TabItem value="provider-report" label="Provider Report">
The "Provider Report" tab in the Baseline Analytics page provides detailed information about the performance of individual providers and their associated specialties.

### Key Components

1. **Provider Dropdown**: Allows users to select one or more providers from the dropdown list to filter the report data. The total count of providers is displayed next to the dropdown label.

2. **Specialty Dropdown**: Allows users to select one or more specialties from the dropdown list to filter the report data. The total count of specialties is displayed next to the dropdown label.

3. **Data Table**: Displays the provider report data in a tabular format.

4. **Download Data**: Allows users to download the displayed provider report data as a CSV file.

### Sensitive Mode

- The tab includes a "sensitive mode" feature, which replaces sensitive information (provider names and NPI numbers) with fake data when enabled.
- The sensitive mode is controlled by the `{{sensitiveMode}}` variable in the server-side rendering.

### Route and Service Layer

The route and service layer handle the API endpoints and database interactions for the Provider Report functionality. They are responsible for processing the requests, performing the necessary database operations, and returning the appropriate responses.

- The `baseline_analytics.route.js` file defines the API endpoints for retrieving the provider report data, provider details, specialty details, and total counts.
  - `/provider_report_data`: Retrieves the provider report data based on the selected filters.
  - `/get_data_of_providers`: Retrieves the list of providers for the dropdown.
  - `/get_data_of_specialities`: Retrieves the list of specialties for the dropdown.
  - `/get_totals_provider_specialty`: Retrieves the total counts of providers and specialties.

</TabItem>
</Tabs>

### Dependencies

- [D3.js](https://d3js.org/): A JavaScript library for manipulating documents based on data.
- [jQuery](https://jquery.com/): A fast, small, and feature-rich JavaScript library for simplified HTML document traversing, event handling, and AJAX interactions.
- [DataTables](https://datatables.net/): A plug-in for the jQuery JavaScript library that adds advanced interaction controls to HTML tables.
- [Bootstrap](https://getbootstrap.com/): A popular CSS framework for building responsive and mobile-first web pages.
- [Bootstrap Select](https://developer.snapappointments.com/bootstrap-select/): A jQuery plugin that brings select elements into the 21st century with intuitive multiselection, searching, and much more.

Make sure to include the necessary JavaScript and CSS files for these libraries in your project.