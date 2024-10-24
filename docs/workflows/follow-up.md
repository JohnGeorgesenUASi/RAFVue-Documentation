---
id: follow-up
title: Follow-Up Page
sidebar_label: Follow-Up
---

# Follow-Up Page

This document provides a comprehensive overview of the `follow_up.hbs` file, which is part of the RAFVue application. This file is responsible for rendering the Follow-Up interface, allowing users to manage and track patient follow-ups.

## Overview

The `follow_up.hbs` file is a Handlebars template that combines HTML, CSS, and JavaScript to create a dynamic and interactive interface for managing patient follow-ups. It includes data tables, modals, and various input controls to facilitate follow-up management.

## Structure

### HTML

- **Container Elements**: 
  - The main container is a `<div>` with the class `container body`, which houses the entire page content.
  - The page is divided into sections using Bootstrap grid classes like `col-md-4` and `col-sm-6`.

- **Sections**:
  - **Follow-Up Details**: Displays detailed information about selected follow-ups.
  - **Data Tables**: Displays follow-up data in a tabular format with options for sorting and filtering.
  - **Modals**: Used for actions like adding or editing additional notes.

### CSS

- **Styling**:
  - Custom styles are defined for various elements, including tables, buttons, and modals.
  - Responsive design is achieved using media queries to adjust layout for different screen sizes.

- **Classes**:
  - `.tableBorder`: Styles the main data table with border and margin.
  - `.patientDetails`: Styles the patient details section with padding and background color.

### JavaScript

- **Libraries**:
  - Includes external libraries such as jQuery, D3.js, and DataTables for data manipulation and visualization.

- **Data Fetching**:
  - Uses AJAX to fetch data for follow-up details, additional notes, and other dynamic content.

- **Event Handlers**:
  - Click events are set up for buttons to trigger actions like saving notes, closing cases, and reviewing follow-ups.

## Key Features

- **Follow-Up Management**: Users can manage patient follow-ups, including adding notes and closing cases.
- **Dynamic Data Loading**: Fetches and updates data asynchronously using AJAX, ensuring the page displays the most current information.
- **Responsive Design**: Adjusts layout and styles based on screen size to ensure usability across devices.

## API Documentation

### Endpoints

1. **GET `/full_name_to_fake_name_with_mrn_dob.json`**
   - **Description**: Provides a mapping of full names to fake names, including MRN and DOB for anonymization.
   - **Usage**: Used to anonymize patient data when `sensitiveMode` is enabled.
   - **Response**: JSON object with full names as keys and objects containing `fakeName` and `mrnNumber`.

2. **GET `/view_Additional`**
   - **Description**: Retrieves additional notes for a specific patient.
   - **Usage**: Populates the additional notes dropdown with data.
   - **Response**: JSON array of notes.

3. **POST `/unlock_case_rafvue`**
   - **Description**: Re-opens a closed case for further review.
   - **Usage**: Triggered when the user clicks the "Unlock" button for a case.
   - **Request Data**: 
     - `idim`: The ID of the case to unlock.
   - **Response**: Confirmation message upon successful unlock.

4. **POST `/caseReview`**
   - **Description**: Marks a case as reviewed.
   - **Usage**: Triggered when the user clicks the "Reviewed" button for a case.
   - **Request Data**: 
     - `idim`: The ID of the case.
     - `mrn`: The MRN of the patient.
   - **Response**: Confirmation message upon successful review.

5. **POST `/save_notes`**
   - **Description**: Saves additional notes for a specific patient.
   - **Usage**: Triggered when the user clicks the "Save Notes" button.
   - **Request Data**: 
     - `notes`: The content of the notes.
     - `final_patient_id`: The ID of the patient.
   - **Response**: Confirmation message upon successful save.

6. **POST `/close_case`**
   - **Description**: Closes a case after follow-up is completed.
   - **Usage**: Triggered when the user clicks the "Close Case" button.
   - **Request Data**: 
     - `final_patient_id`: The ID of the patient.
   - **Response**: Confirmation message upon successful closure.

### AJAX Implementation

- **AJAX Calls**: The file uses jQuery's `$.ajax` and `d3.json` methods to asynchronously fetch data from the server.
- **Success Handlers**: Each AJAX call includes a success handler that processes the returned data and updates the DOM elements or tables accordingly.

## Usage

1. **Managing Follow-Ups**: Users can view and manage follow-up details, including adding notes and closing cases.
2. **Interactivity**: Users can interact with the data table, modals, and other UI elements to manage follow-ups effectively.
3. **Customization**: Styles and configurations can be adjusted to fit specific needs or preferences.

## Dependencies

- **Bootstrap**: For responsive grid layout and styling.
- **jQuery**: For DOM manipulation and AJAX requests.
- **D3.js**: For data-driven document manipulation and charting.
- **DataTables**: For enhanced table features like sorting and filtering.

## Conclusion

The `follow_up.hbs` file is a crucial component of the RAFVue application, providing users with a comprehensive interface to manage and track patient follow-ups. Its combination of follow-up management, responsive design, and dynamic data loading makes it a powerful tool for healthcare management.

---

This documentation should provide a clear understanding of the file's purpose, structure, functionality, and API interactions. Let me know if you need further details or specific sections expanded!