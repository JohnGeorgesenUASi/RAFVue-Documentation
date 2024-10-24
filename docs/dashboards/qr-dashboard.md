---
id: qm-landingpage
title: Quality Manager Landing Page
sidebar_label: Quality Manager Dashboard
sidebar_position: 3
---

# Quality Manager Landing Page

This document provides a comprehensive overview of the `qm_landingpage.hbs` file, which is part of the RAFVue application. This file is responsible for rendering the Quality Manager's dashboard, displaying various data visualizations and statistics related to quality management processes.

## Overview

The `qm_landingpage.hbs` file is a Handlebars template that combines HTML, CSS, and JavaScript to create a dynamic and interactive dashboard for quality managers. It includes data visualizations using D3.js and DC.js, and provides insights into quality reviews, reviewer performance, and query statuses.

## Structure

### HTML

- **Container Elements**: 
  - The main container is a `<div>` with the class `container body`, which houses the entire dashboard content.
  - The dashboard is divided into sections using Bootstrap grid classes like `col-md-3` and `col-sm-6`.

- **Sections**:
  - **Quality Management Data**: Displays a table summarizing quality reviews in worklists, assigned to reviewers, and completed.
  - **Reviewer Performance**: Shows a chart of reviewer performance metrics.
  - **Query Status**: Displays a chart of query statuses.
  - **Claim Update Status**: Shows a chart of claim update statuses.
  - **Patients Data Table**: Provides detailed information about patients assigned to reviewers.

- **Loading Indicator**: 
  - A loading animation is displayed using a `<div>` with the class `center-screen`.

## Quality Manager Landing Page API

This document provides an overview of the API endpoints used in the `qm_landingpage.hbs` file, which is part of the RAFVue application. These endpoints are responsible for fetching and managing data related to quality management processes.

## API Endpoints

### 1. GET `/review_name_to_fakename.json`

- **Description**: Fetches a JSON mapping of reviewer names to fake names for data anonymization.
- **Usage**: Used to replace real reviewer names with fake names when `sensitiveMode` is enabled.
- **Response**: JSON object with reviewer names as keys and fake names as values.

### 2. GET `/get_qm_details`

- **Description**: Retrieves quality management details such as the number of quality reviews in the worklist, assigned to reviewers, and completed.
- **Usage**: Populates the QM Data section with current statistics.
- **Response**: JSON object containing:
  - `quality_reviewer`: Name of the quality reviewer.
  - `assigned_cases_count`: Number of quality reviews in the worklist.
  - `reviewed_cases_count`: Number of quality reviews completed.

### 3. GET `/charts_data_qm_reviewer`

- **Description**: Provides data for the reviewer chart, including reviewer names and counts.
- **Usage**: Used to populate the reviewer chart with data.
- **Response**: JSON object containing reviewer data, including:
  - `user_name`: Name of the reviewer.
  - `Count`: Number of reviews associated with the reviewer.

## AJAX Implementation

- **AJAX Calls**: The file uses jQuery's `$.ajax` and `$.getJSON` methods to asynchronously fetch data from the server.
- **Success Handlers**: Each AJAX call includes a success handler that processes the returned data and updates the DOM elements or charts accordingly.

## DataTable Configuration

- **Server-Side Processing**: The DataTable for reviewers is configured to use server-side processing, fetching data from the `/charts_data_qm_reviewer` endpoint.
- **Parameters**: Filters are applied to the data using parameters such as `filter1`, `filter2`, etc.
- **Callbacks**: Includes callbacks for data rendering and handling sensitive data anonymization.

## Export Functionality

- **Export to CSV**: The file includes a function to export filtered reviewer data to a CSV file.
- **Usage**: Triggered by a button click, it collects filtered data from the DataTable and formats it into a CSV file for download.


## Key Features

- **Data Visualization**: Utilizes DC.js and D3.js to create interactive charts that provide insights into quality management metrics.
- **Responsive Design**: Adjusts layout and styles based on screen size to ensure usability across devices.
- **Dynamic Data Loading**: Fetches and updates data asynchronously using AJAX, ensuring the dashboard displays the most current information.

## Usage

1. **Viewing Data**: Users can view summaries and detailed statistics on quality reviews, reviewer performance, and query statuses.
2. **Interactivity**: Users can interact with charts and tables, reset filters, and export data to CSV.
3. **Customization**: Styles and chart configurations can be adjusted to fit specific needs or preferences.

## Dependencies

- **Bootstrap**: For responsive grid layout and styling.
- **D3.js**: For data-driven document manipulation and charting.
- **DC.js**: For building complex charts with D3.js.
- **Crossfilter**: For fast multidimensional filtering and grouping of data.

## Conclusion

The `qm_landingpage.hbs` file is a crucial component of the RAFVue application, providing quality managers with a comprehensive dashboard to monitor and analyze key metrics. Its combination of data visualization, responsive design, and dynamic data loading makes it a powerful tool for decision-making.

