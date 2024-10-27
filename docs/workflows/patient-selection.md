---
id: patient-selection
title: Patient Selection
sidebar_label: Patient Selection
sidebar_position: 1
---

# Patient Selection

This document provides a comprehensive overview of the `case_selection.hbs` file, which is part of the RAFVue application. This file is responsible for rendering the Patient Selection interface, allowing users to filter and manage cases based on various criteria.

### Overview

The `case_selection.hbs` file is a Handlebars template that combines HTML, CSS, and JavaScript to create a dynamic and interactive interface for case selection. It includes data tables, modals, and various input controls to facilitate case management.

### Key Features

- **Data Filtering**: Users can filter cases based on multiple criteria, including date range, RAF score, and gender.
- **Dynamic Data Loading**: Fetches and updates data asynchronously using AJAX, ensuring the page displays the most current information.
- **Reviewer Assignment**: Assigns patients to the reviewers for the review process.

      1. **Assign Reviewer**: Assigns a reviewer to selected patients in the Final Patient table.
            - When a reviewer is assigned, the `reviewer_id`, `Reviewer`, `reviewer_assigned_date`, and `selected_criteria_name` columns in the `Final_Patients` table are updated for the selected rows.
            - The API endpoint for adding a reviewer is `add_group`.
            - The parameters for the query are:
               - `req.body.user_id`: The ID of the assigned reviewer.
               - `req.body.selected_value`: The name of the assigned reviewer.
               - `new Date()`: The current date when the reviewer is assigned.
               - `req.body.selected_criteria`: The selected criteria for assigning the reviewer.

      2. **Update Reviewer Count**: Updates the count of reviews assigned to the reviewer in the `users` table.
            - After assigning a reviewer, the `review_counts` column in the `users` table is incremented by the count of patients assigned to the reviewer.

### AJAX Implementation

- **AJAX Calls**: The file uses jQuery's `$.ajax` and `d3.json` methods to asynchronously fetch data from the server.
- **Success Handlers**: Each AJAX call includes a success handler that processes the returned data and updates the DOM elements or tables accordingly.

### Dependencies

- **Bootstrap**: For responsive grid layout and styling.
- **jQuery**: For DOM manipulation and AJAX requests.
- **D3.js**: For data-driven document manipulation and charting.
- **DC.js**: For building complex charts with D3.js.
- **Crossfilter**: For fast multidimensional filtering and grouping of data.