---
id: my-patients
title: My Patients Page
sidebar_label: Patients
sidebar_position: 1
---

# My Patients Page

This document provides a comprehensive overview of the `my_patients.hbs` file, which is part of the RAFVue application. This file is responsible for rendering the My Patients interface, allowing users to view and manage patient data.

## Overview

The `my_patients.hbs` file is a Handlebars template that combines HTML, CSS, and JavaScript to create a dynamic and interactive interface for managing patient data. It includes data tables, modals, and various input controls to facilitate patient management.

## Structure

### HTML

- **Container Elements**: 
  - The main container is a `<div>` with the class `container body`, which houses the entire page content.
  - The page is divided into sections using Bootstrap grid classes like `col-md-4` and `col-sm-6`.

- **Sections**:
  - **Patient Details**: Displays detailed information about selected patients.
  - **Data Tables**: Displays patient data in a tabular format with options for sorting and filtering.
  - **Modals**: Used for actions like adding additional notes and viewing patient history.

### CSS

- **Styling**:
  - Custom styles are defined for various elements, including tables, buttons, and modals.
  - Responsive design is achieved using media queries to adjust layout for different screen sizes.

- **Classes**:
  - `.tableBorder`: Styles the main data table with border and margin.
  - `.patientDetails`: Styles the patient details section with padding and background color.

### JavaScript

- **Libraries**:
  - Includes external libraries such as jQuery, D3.js, Crossfilter, and DC.js for data manipulation and visualization.

- **Data Fetching**:
  - Uses AJAX to fetch data for patient details, additional notes, and other dynamic content.

- **Event Handlers**:
  - Click events are set up for buttons to trigger actions like showing notes, submitting notes, and exporting data.

## Key Features

- **Data Management**: Users can view and manage patient data, including adding and viewing additional notes.
- **Dynamic Data Loading**: Fetches and updates data asynchronously using AJAX, ensuring the page displays the most current information.
- **Responsive Design**: Adjusts layout and styles based on screen size to ensure usability across devices.

## API Documentation

### Endpoints

1. **GET `/full_name_to_fake_name_with_mrn_dob.json`**
   - **Description**: Provides a mapping of full names to fake names, including MRN and DOB for anonymization.
   - **Usage**: Used to anonymize patient data when `sensitiveMode` is enabled.
   - **Response**: JSON object with full names as keys and objects containing `fakeName` and `mrnNumber`.

2. **GET `/get_patients_diagnosis`**
   - **Description**: Fetches diagnosis data for a specific patient based on MRN.
   - **Usage**: Populates the diagnosis table with data for the selected patient.
   - **Response**: JSON object containing diagnosis details.

3. **POST `/add_additional_notes`**
   - **Description**: Adds additional notes for a specific patient.
   - **Usage**: Saves notes entered by the user for the selected patient.
   - **Request Data**: 
     - `mrn`: The MRN of the patient.
     - `date_time`: The timestamp of the note.
     - `notes`: The content of the note.
   - **Response**: Confirmation message upon successful save.

4. **GET `/get_additional_notes`**
   - **Description**: Retrieves additional notes for a specific patient based on MRN.
   - **Usage**: Displays all additional notes for the selected patient in a modal.
   - **Response**: JSON array of notes, each containing `date_time`, `notes`, and `reviewer`.

### AJAX Implementation

- **AJAX Calls**: The file uses jQuery's `$.ajax` and `d3.json` methods to asynchronously fetch data from the server.
- **Success Handlers**: Each AJAX call includes a success handler that processes the returned data and updates the DOM elements or tables accordingly.

## Usage

1. **Viewing Patient Data**: Users can view detailed information about patients, including notes and diagnosis.
2. **Interactivity**: Users can interact with the data table, modals, and other UI elements to manage patient data effectively.
3. **Customization**: Styles and configurations can be adjusted to fit specific needs or preferences.

## Dependencies

- **Bootstrap**: For responsive grid layout and styling.
- **jQuery**: For DOM manipulation and AJAX requests.
- **D3.js**: For data-driven document manipulation and charting.
- **DC.js**: For building complex charts with D3.js.
- **Crossfilter**: For fast multidimensional filtering and grouping of data.

## Conclusion

The `my_patients.hbs` file is a crucial component of the RAFVue application, providing users with a comprehensive interface to view and manage patient data. Its combination of data management, responsive design, and dynamic data loading makes it a powerful tool for patient management.

---

This documentation should provide a clear understanding of the file's purpose, structure, functionality, and API interactions. Let me know if you need further details or specific sections expanded!