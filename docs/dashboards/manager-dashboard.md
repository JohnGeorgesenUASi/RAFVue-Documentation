---
id: manager-landingpage
title: Manager Landing Page
sidebar_label: Manager Dashboard
sidebar_position: 1
---

# Manager Landing Page

This document provides a comprehensive overview of the `manager_landingpage.hbs` file, which is part of the RAFVue application. This file is responsible for rendering the manager's dashboard, displaying various data visualizations and statistics.

## Overview

The `manager_landingpage.hbs` file is a Handlebars template that combines HTML, CSS, and JavaScript to create a dynamic and interactive dashboard for managers. It includes data visualizations using D3.js and DC.js, and provides insights into various metrics such as RAF summaries, reviewer details, and total population statistics.

## Structure

### HTML

- **Container Elements**: 
  - The main container is a `<div>` with the class `container body`, which houses the entire dashboard content.
  - The dashboard is divided into sections using Bootstrap grid classes like `col-md-6` and `col-sm-12`.

- **Sections**:
  - **RAF Summary**: Displays RAF-related data in a table format.
  - **Reviewer Details**: Shows statistics about reviewers, including total reviewers and query rates.
  - **Total Population**: Provides data on total patients, recurrent patients, and new patients.

- **Loading Indicator**: 
  - A loading animation is displayed using a `<div>` with the class `center-screen`.

## API Documentation

### Endpoints

1. **GET `/get_financial_summary`**
   - **Description**: Fetches financial summary data for the dashboard.
   - **Response**: JSON object containing financial metrics such as RAF, estimated revenue, and productivity potential.

2. **GET `/get_query_status`**
   - **Description**: Retrieves the status of queries and claim updates.
   - **Response**: JSON object with query status and claim update data, used to build bar charts.

3. **GET `/get_monthly_recapture`**
   - **Description**: Provides monthly recapture data for line chart visualization.
   - **Response**: JSON array with monthly recapture values.

4. **GET `/get_productivity`**
   - **Description**: Fetches productivity metrics such as visits reviewed and total queries.
   - **Response**: JSON object with productivity data.

5. **GET `/get_reviewerdata`**
   - **Description**: Retrieves data about reviewers, including total reviewers and query rates.
   - **Response**: JSON object with reviewer statistics.

6. **GET `/get_hcc_count`**
   - **Description**: Fetches HCC count data for row chart visualization.
   - **Response**: JSON array with HCC count values.

### AJAX Implementation

- **AJAX Calls**: The file uses jQuery's `$.ajax` method to asynchronously fetch data from the server.
- **Success Handlers**: Each AJAX call includes a success handler that processes the returned data and updates the DOM elements or charts accordingly.

## Usage

1. **Viewing Data**: Managers can view summaries and detailed statistics on RAF, reviewers, and total population.
2. **Interactivity**: Users can interact with charts and navigate to detailed reports by clicking on headers and sections.
3. **Customization**: Styles and chart configurations can be adjusted to fit specific needs or preferences.

## Key Features

- **Data Visualization**: Utilizes DC.js and D3.js to create interactive charts that provide insights into various metrics.
- **Responsive Design**: Adjusts layout and styles based on screen size to ensure usability across devices.
- **Dynamic Data Loading**: Fetches and updates data asynchronously using AJAX, ensuring the dashboard displays the most current information.

## Usage

1. **Viewing Data**: Managers can view summaries and detailed statistics on RAF, reviewers, and total population.
2. **Interactivity**: Users can interact with charts and navigate to detailed reports by clicking on headers and sections.
3. **Customization**: Styles and chart configurations can be adjusted to fit specific needs or preferences.

## Dependencies

- **Bootstrap**: For responsive grid layout and styling.
- **D3.js**: For data-driven document manipulation and charting.
- **DC.js**: For building complex charts with D3.js.
- **Crossfilter**: For fast multidimensional filtering and grouping of data.

## Conclusion

The `manager_landingpage.hbs` file is a crucial component of the RAFVue application, providing managers with a comprehensive dashboard to monitor and analyze key metrics. Its combination of data visualization, responsive design, and dynamic data loading makes it a powerful tool for decision-making.

---

This documentation should provide a clear understanding of the file's purpose, structure, and functionality. Let me know if you need further details or specific sections expanded!