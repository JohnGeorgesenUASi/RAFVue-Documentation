---
id: quality-reviewer-assignment
title: Quality Reviewer Assignment
sidebar_label: Quality Reviewer Assignment
sidebar_position: 4
---

# Quality Reviewer Assignment

This document provides a comprehensive overview of the quality reviewer assignment functionality in the RAFVue application. It covers the `quality_check.hbs` file, which is responsible for rendering the interface for assigning quality reviewers to patients who have completed the initial review process.

### Overview

The `quality_check.hbs` file displays a list of patients who have completed the initial review and are ready for quality management (QM) assignment. It allows administrators to assign quality reviewers to these patients for further review and assessment.

### Key Features

#### 1. Patient Listing

The main table lists all the patients who have completed the initial review and are ready for QM assignment.

#### 2. Filtering Options

The interface provides various filtering options to refine the list of patients:
- Review Date Range: Users can select a start and end date to filter patients based on their review dates.
- Pre HCC Count Range: Users can specify a range for the pre HCC count to filter patients accordingly.
- Post HCC Count Range: Users can specify a range for the post HCC count to filter patients accordingly.

The filtering options are dynamically applied to the table, and the results are updated in real-time.

#### 3. Assigning Quality Reviewers

Administrators can assign quality reviewers to patients using the following methods:
- Individual Assignment: By clicking the "Assign Quality Reviewer" button in the "Functions" column of a specific patient row, administrators can open a modal dialog to select a quality reviewer for that patient.
- Batch Assignment: By selecting multiple patients using the checkboxes in the first column and then clicking the "Assign Quality Reviewer" button at the top of the table, administrators can assign a quality reviewer to multiple patients at once.

When assigning a quality reviewer, the modal dialog displays a dropdown list of available quality reviewers along with their current case count. Administrators can select a quality reviewer from the list and confirm the assignment.

### API Endpoints

The following API endpoints are used for the quality reviewer assignment functionality:

- `GET /quality_check_data`: Retrieves the list of patients for quality reviewer assignment based on the selected filtering options.
- `POST /get_qr_with_case_count`: Retrieves the list of quality reviewers along with their current case count.
- `POST /add_qr`: Assigns a quality reviewer to one or more patients.

### Backend Implementation

The backend implementation for the quality reviewer assignment functionality can be found in the `quality_check.service.js` file. Here are the key functions:

- `getFilteredDataOptions`: This function constructs the SQL query and conditions based on the selected filtering options to retrieve the list of patients for quality reviewer assignment.
  - It takes into account the review date range, pre HCC count range, and post HCC count range to filter the patients accordingly.
  - It returns an object containing the necessary information for the DataTable, including the SQL query, table name, search items, and column names.

- `getQRWithCaseCount`: This function retrieves the list of quality reviewers along with their current case count.
  - It executes a SQL query to fetch the quality reviewers' details and their review counts from the `sna.users` table.

- `addQR`: This function handles the assignment of a quality reviewer to one or more patients.
  - It updates the `Final_Patients` table with the assigned quality reviewer's details, including the quality reviewer name, ID, and assignment date.
  - It also updates the `review_counts` column in the `sna.users` table to reflect the updated case count for each quality reviewer.

## Dependencies

- **Handlebars**: Used as the templating engine for rendering the `quality_reviewer_assignment.hbs` file.
- **Express**: Web framework for handling HTTP requests and responses.
- **MySQL**: Database management system for storing and retrieving patient and quality reviewer data.