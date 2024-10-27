---
id: quality-review-management
title: Quality Review Management
sidebar_label: Quality Review Management
sidebar_position: 5
---

# Quality Review Management

This document provides a comprehensive overview of the `quality_review_management.hbs` file, which is part of the RAFVue application. This file is responsible for rendering the Quality Review Management interface, allowing quality reviewers to review and manage patient data.

### Overview

The `quality_review_management.hbs` file is a Handlebars template that combines HTML, CSS, and JavaScript to create a dynamic and interactive interface for quality reviewers to review patient data. It includes data tables, modals, and various input controls to facilitate patient management.

### Key Features

- **Listing Patients**: This page lists all the details of the patients that are assigned to the logged-in quality reviewer. Clicking the "Start QR" button displays all the diagnosis details of the selected patient.
- **Quality Review Diagnosis**: Quality reviewers can review a particular diagnosis code by clicking the "QC Review" button next to the diagnosis.
  When a quality reviewer clicks the "QC Review" button for a specific diagnosis code, a new dialog box will be opened (the code for it is contained in `quality-review-diagnosis.hbs`). The following actions are performed:

  1. If the quality reviewer selects "Reviewed", the `qr_approved` column in the `patient_diagnosis` table is set to 1, indicating that the quality review is approved.
  2. If the quality reviewer made changes to review "Reviewed with changes" is sent to backend, the `qr_approved` column in the `patient_diagnosis` table is set to 0, indicating the patient has to be reviewed again.
  3. The `patients_icd10_status` table is updated with the quality review details, including `qr_status`, `qr_action`, `qr_reason`, `qr_icd10`, `qr_follow-up`, and `rationale`.
  4. If the ICD-10 code or action has changed, the HCC values are updated in the `post_raf_score` table which are lated used in calculation of realized RAF scores.

- **Close Case**: When a quality reviewer closes the case for a patient, the following actions are performed:
  1. The `patients_icd10_status` table is updated, setting `qr_status` to "Verified" for all the diagnosis that are not taken care indicating the case case is closed.
  2. The `patient_diagnosis` table is updated, setting `qr_approved` to 1 for the patient.
  3. The `qr_status` values for the patient are checked in the `patients_icd10_status` table.
     - If all the `qr_status` values are either NULL, "Verified", or "Reviewed", the case is considered approved.
       - The `RealizedRafScore` and `RealizedRafScoreV28` functions are called to calculate the realized RAF scores.
       - The `Final_Patients` table is updated, setting `quality_reviewer_completed` to the current date and time and `qr_status` to "APPROVED".
     - If any `qr_status` value is not NULL, "Verified", or "Reviewed", the case is considered as changes requested and is sent back to reviewer.
       - The `Final_Patients` table is updated, setting `quality_reviewer_completed` to the current date and time, `qr_status` to "CHANGES REQUESTED", and `case_status` to 0.

### Route and Service Layer

The route and service layer handle the API endpoints and database interactions for the quality review management process. They are responsible for processing the requests, performing the necessary database operations, and returning the appropriate responses.

- The `quality_review_management.route.js` file defines the API endpoints for the quality review management process.
- The `quality_review_management.service.js` file contains the service layer logic for interacting with the database and performing the required operations.

### Dependencies

- **Handlebars**: Used as the templating engine for rendering the `quality_review_management.hbs` file.
- **Express**: Web framework for handling HTTP requests and responses.
- **MySQL**: Database management system for storing and retrieving patient data.
