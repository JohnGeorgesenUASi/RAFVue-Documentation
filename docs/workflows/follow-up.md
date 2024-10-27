---
id: follow-up-management
title: Follow-Up 
sidebar_label: Follow-Up 
sidebar_position: 3
---

# Follow-Up

This document provides a comprehensive overview of the follow-up management functionality in the RAFVue application. It covers the `follow_up.hbs` and `follow_up_model.hbs` files, which are responsible for rendering the follow-up management interface and handling the follow-up process for patients.

### Overview

The follow-up management feature allows users to track and manage follow-up cases for patients who require further attention or action. The `follow_up.hbs` file displays a list of all patients with follow-up cases, while the `follow_up_model.hbs` file provides a dialog box for updating the follow-up status and adding comments.

### Key Features

#### 1. Listing Follow-Up Cases

The `follow_up.hbs` file renders a table that lists all the patients with follow-up cases. 

Clicking on a patient row expands the row to show additional details about the patient's follow-up cases, including the ICD-10 code, description, type, start date, status, and update functionality.

#### 2. Updating Follow-Up Status

When the "Update" button is clicked for a specific follow-up case, the `follow_up_model.hbs` dialog box is opened. This dialog box allows users to update the follow-up status and add comments for the selected case.

The follow-up status can be updated to one of the following values:
- Not Started
- In Progress
- Closed

Users can also add comments or rationale for the follow-up status update.

#### 3. Saving Follow-Up Progress

When the user clicks the "Save Progress" button in the `follow_up_model.hbs` dialog box, the following actions are performed:

1. A new row is inserted into the `follow_up` table with the updated follow-up status, rationale, and other relevant details.
2. If the follow-up type is "Update claim" and the status is "In Progress", the `case_review` table is updated with the new follow-up status for the corresponding patient and diagnosis code.
3. If the follow-up status is "Closed":
   - The `case_review` table is updated with the follow-up status, edit date, followup query outcome, and query process rate.
   - The query process rate is calculated as the difference in days between the started time and the edit date.

#### 4. Viewing Closed Follow-Up Cases

When the "Closed" button is clicked for a specific follow-up case, the `followup_closed` route is triggered, and the `renderClosedFollowup` function in the controller is called. This function renders the closed follow-up details for the selected case.

### Route and Service Layer

The route and service layer handle the API endpoints and database interactions for the follow-up management functionality. They are responsible for processing the requests, performing the necessary database operations, and returning the appropriate responses.

- The `follow_up.route.js` file defines the API endpoints for the follow-up management functionality.
- The `follow_up.service.js` file contains the service layer logic for interacting with the database and performing the required operations.

### Dependencies

- **Handlebars**: Used as the templating engine for rendering the `follow_up.hbs` and `follow_up_model.hbs` files.
- **Express**: Web framework for handling HTTP requests and responses.
- **MySQL**: Database management system for storing and retrieving follow-up data.
