---
id: reviewer-landingpage
title: Reviewer Landing Page
sidebar_label: Reviewer Dashboard
sidebar_position: 2
---

# Reviewer Landing Page

This document provides a comprehensive overview of the `reviewer_landingpage.hbs` file, which is part of the RAFVue application. This file is responsible for rendering the Reviewer's dashboard, displaying various data visualizations and statistics related to review processes.

## Overview

The `reviewer_landingpage.hbs` file is a Handlebars template that combines HTML, CSS, and JavaScript to create a dynamic and interactive dashboard for reviewers. It includes data visualizations using D3.js and DC.js, and provides insights into review assignments, query statuses, and follow-up actions.

## Structure

### HTML

- **Container Elements**: 
  - The main container is a `<div>` with the class `container body`, which houses the entire dashboard content.
  - The dashboard is divided into sections using Bootstrap grid classes like `col-md-4` and `col-sm-12`.

- **Sections**:
  - **Reviewer Summary**: Displays a table summarizing total reviews assigned, reviews in worklist, reviews complete, query rate, and query close rate.
  - **Query Status**: Shows a table of query statuses including total queries sent, open, accepted, and dismissed.
  - **Follow Up Status**: Displays a chart of follow-up statuses.
  - **Reviewer Data Table**: Provides detailed information about patients assigned to reviewers.

- **Loading Indicator**: 
  - A loading animation is displayed using a `<div>` with the class `center-screen`.

## API Endpoints

### 1. GET `/get_reviewer_details`

- **Description**: Retrieves details about reviewers, including the number of reviews assigned, completed, and in the worklist, as well as query statistics.
- **Usage**: Populates the Reviewer Summary and Query Status sections with current statistics.
- **Response**: JSON object containing:
  - `patientCount`: Array with objects containing `reviewer`, `reviews_assigned`, `reviewed_cases_count`, and `not_reviewed_count`.
  - `queryCount`: Array with objects containing `total_queries`, `open_queries`, `accepted`, `dismissed`, `claim_not_started`, `claim_in_progress`, `claim_closed`, `query_rate`, and `query_close_rate`.

### 2. GET `/review_name_to_fakename.json`

- **Description**: Fetches a JSON mapping of reviewer names to fake names for data anonymization.
- **Usage**: Used to replace real reviewer names with fake names when `sensitiveMode` is enabled.
- **Response**: JSON object with reviewer names as keys and fake names as values.

### 3. GET `/full_name_to_fake_name_with_mrn_dob.json`

- **Description**: Provides a mapping of full names to fake names, including MRN and DOB for anonymization.
- **Usage**: Used to anonymize patient data when `sensitiveMode` is enabled.
- **Response**: JSON object with full names as keys and objects containing `fakeName` and `mrnNumber`.

### 4. GET `/charts_data_reviewer`

- **Description**: Provides data for the reviewer chart, including patient names, review codes, and follow-up statuses.
- **Usage**: Used to populate the Reviewer Data table with data.
- **Response**: JSON object containing:
  - `iTotalDisplayRecords`: Total number of records available after filtering.
  - `aaData2`: Array of data objects for charting and table display.

## AJAX Implementation

- **AJAX Calls**: The file uses jQuery's `$.ajax` and `$.getJSON` methods to asynchronously fetch data from the server.
- **Success Handlers**: Each AJAX call includes a success handler that processes the returned data and updates the DOM elements or charts accordingly.

## DataTable Configuration

- **Server-Side Processing**: The DataTable for reviewers is configured to use server-side processing, fetching data from the `/charts_data_reviewer` endpoint.
- **Parameters**: Filters are applied to the data using parameters such as `filter1`, `filter2`, etc.
- **Callbacks**: Includes callbacks for data rendering and handling sensitive data anonymization.

## Export Functionality

- **Export to CSV**: The file includes a function to export filtered reviewer data to a CSV file.
- **Usage**: Triggered by a button click, it collects filtered data from the DataTable and formats it into a CSV file for download.

## Key Features

- **Data Visualization**: Utilizes DC.js and D3.js to create interactive charts that provide insights into review metrics.
- **Responsive Design**: Adjusts layout and styles based on screen size to ensure usability across devices.
- **Dynamic Data Loading**: Fetches and updates data asynchronously using AJAX, ensuring the dashboard displays the most current information.

## Usage

1. **Viewing Data**: Users can view summaries and detailed statistics on reviews, queries, and follow-up actions.
2. **Interactivity**: Users can interact with charts and tables, reset filters, and export data to CSV.
3. **Customization**: Styles and chart configurations can be adjusted to fit specific needs or preferences.

## Dependencies

- **Bootstrap**: For responsive grid layout and styling.
- **D3.js**: For data-driven document manipulation and charting.
- **DC.js**: For building complex charts with D3.js.
- **Crossfilter**: For fast multidimensional filtering and grouping of data.

## Conclusion

The `reviewer_landingpage.hbs` file is a crucial component of the RAFVue application, providing reviewers with a comprehensive dashboard to monitor and analyze key metrics. Its combination of data visualization, responsive design, and dynamic data loading makes it a powerful tool for decision-making.

---

This documentation should provide a clear understanding of the file's purpose, structure, and functionality. Let me know if you need further details or specific sections expanded!