---
id: case-selection
title: Patient Selection Page
sidebar_label: Patient Selection
sidebar_position: 1
---

# Patient Selection Page

This document provides a comprehensive overview of the `case_selection.hbs` file, which is part of the RAFVue application. This file is responsible for rendering the Case Selection interface, allowing users to filter and manage cases based on various criteria.

## Overview

The `case_selection.hbs` file is a Handlebars template that combines HTML, CSS, and JavaScript to create a dynamic and interactive interface for case selection. It includes data tables, modals, and various input controls to facilitate case management.

## Structure

### HTML

- **Container Elements**: 
  - The main container is a `<div>` with the class `container body`, which houses the entire page content.
  - The page is divided into sections using Bootstrap grid classes like `col-md-2` and `col-sm-4`.

- **Sections**:
  - **Filters**: Includes date pickers, dropdowns, and checkboxes for filtering cases by various criteria such as RAF score, age range, and gender.
  - **Data Tables**: Displays case data in a tabular format with options for sorting and filtering.
  - **Modals**: Used for actions like adding reviewers and saving queries.

## Key Features

- **Data Filtering**: Users can filter cases based on multiple criteria, including date range, RAF score, and gender.
- **Dynamic Data Loading**: Fetches and updates data asynchronously using AJAX, ensuring the page displays the most current information.
- **Responsive Design**: Adjusts layout and styles based on screen size to ensure usability across devices.

## API Documentation

### Endpoints

1. **GET `/get_filtered_data`**
   - **Description**: Fetches filtered case data based on the selected criteria.
   - **Usage**: Populates the main data table with filtered case data.
   - **Response**: JSON object containing case details, including patient name, MRN, HCCs, and RAF scores.

2. **GET `/review_name_to_fakename.json`**
   - **Description**: Fetches a JSON mapping of reviewer names to fake names for data anonymization.
   - **Usage**: Used to replace real reviewer names with fake names when `sensitiveMode` is enabled.
   - **Response**: JSON object with reviewer names as keys and fake names as values.

3. **GET `/payer_fakename.json`**
   - **Description**: Provides a mapping of payer names to fake names for anonymization.
   - **Usage**: Used to anonymize payer data when `sensitiveMode` is enabled.
   - **Response**: JSON object with payer names as keys and fake names as values.

4. **GET `/full_name_to_fake_name_with_mrn_dob.json`**
   - **Description**: Provides a mapping of full names to fake names, including MRN and DOB for anonymization.
   - **Usage**: Used to anonymize patient data when `sensitiveMode` is enabled.
   - **Response**: JSON object with full names as keys and objects containing `fakeName` and `mrnNumber`.

5. **GET `/provider_fakename.json`**
   - **Description**: Provides a mapping of provider names to fake names for anonymization.
   - **Usage**: Used to anonymize provider data when `sensitiveMode` is enabled.
   - **Response**: JSON object with provider names as keys and fake names as values.

6. **GET `/specialty_fakename.json`**
   - **Description**: Provides a mapping of specialty names to fake names for anonymization.
   - **Usage**: Used to anonymize specialty data when `sensitiveMode` is enabled.
   - **Response**: JSON object with specialty names as keys and fake names as values.

### AJAX Implementation

- **AJAX Calls**: The file uses jQuery's `$.ajax` and `d3.json` methods to asynchronously fetch data from the server.
- **Success Handlers**: Each AJAX call includes a success handler that processes the returned data and updates the DOM elements or tables accordingly.

## Usage

1. **Filtering Cases**: Users can apply various filters to narrow down the list of cases displayed in the data table.
2. **Interactivity**: Users can interact with the data table, modals, and other UI elements to manage cases effectively.
3. **Customization**: Styles and configurations can be adjusted to fit specific needs or preferences.

## Dependencies

- **Bootstrap**: For responsive grid layout and styling.
- **jQuery**: For DOM manipulation and AJAX requests.
- **D3.js**: For data-driven document manipulation and charting.
- **DC.js**: For building complex charts with D3.js.
- **Crossfilter**: For fast multidimensional filtering and grouping of data.

## Conclusion

The `case_selection.hbs` file is a crucial component of the RAFVue application, providing users with a comprehensive interface to filter and manage cases. Its combination of data filtering, responsive design, and dynamic data loading makes it a powerful tool for case management.

---

This documentation should provide a clear understanding of the file's purpose, structure, functionality, and API interactions. Let me know if you need further details or specific sections expanded!