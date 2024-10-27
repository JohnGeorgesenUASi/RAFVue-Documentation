---
id: my-patients
title: My Patients
sidebar_label: My Patients
sidebar_position: 2
---

# My Patients

This document provides a comprehensive overview of the `my_patients.hbs` file, which is part of the RAFVue application. This file is responsible for rendering the My Patients interface, allowing users to view and review patient data.

### Overview

The `my_patients.hbs` file is a Handlebars template that combines HTML, CSS, and JavaScript to create a dynamic and interactive interface for reviewing patient data. It includes data tables, modals, and various input controls to facilitate patient management.

### Key Features

- **Listing Patients**: This page lists all the details of the patients that are assigned to logged in reviewer. Clicking the "Start Review" button displays all the diagnosis details of the selected patient.
- **Review Diagnosis**: Reviewers can review a particular diagnosis code by clicking the "Review" button next to the diagnosis.
  When a reviewer clicks the "Review" button for a specific diagnosis code, a new dialog box will be opened (the code of it is contained in `review-diagnosis.hbs`). The following actions are performed:

  1. A new row is inserted into the `case_review` table with all the patient and review details keeping `status = 1`, indicating that the review is completed (can be changed if the quality reviewer rejects the diagnosis).
  2. The `case_action` column is set to "Reviewed". If the "Verify" button is clicked the column is set to "Verified". 
  3. The `patient_diagnosis` table is updated, setting `status = 1` and `review_status = 1`.
  4. The `patients_icd10_status` table is updated, setting `reviewer_activity = Reviewed` else `Verified`.
  5. If a follow-up action is required, the Final_Patients table is updated, `follow_up` is set to 1, indicating that a follow-up is required and a new row is inserted into the follow_up table.
  6. The open HCC count for the patient is calculated and updated in the `hccs_open` column of the `Final_Patients` table, indicating how many HCCs are not reviewed yet.
  7. If the ICD-10 code or action has changed, the HCC values are updated in the database `post_raf_score` table. 
    i. if the review action value comes as `Remove code` the review details of that diagnosis of the patient is set to -1 else the reviewed values are saved. This details are later used to calculate potential RAF score of that patient when case is closed.
- **Close Case**: 
  When a patient's case is closed, there can be two scenarios:

    1. The patient is reviewed for the first time.
    2. The patient is sent back to review from the quality reviewer (QM).

    **Scenario 1: First-Time Review**

    When a patient's case is closed for the first time (`qr_status` is not "CHANGES REQUESTED"), the following actions are performed in the backend:

    1. **Update `Final_Patients` table:**
      - Set `case_status` to 1.
      - Set `qr_status` to "PENDING" indicating the patient will sent to Quality Review

    2. **Update `patient_diagnosis` table:**
      - Set `qr_approved` to NULL where `qr_approved` is 0 indicating the the QR needs to be done.

    3. **Update `patients_icd10_status` table:**
      - As the case is closed all the diagnosis codes `review_activity` are set to `Verified` by default.

    **Scenario 2: Review Requested by QM**

    When a patient's case is sent back to review from the QM (`qr_status` is "CHANGES REQUESTED"), the following actions are performed in the backend:

    1. **Case Approved:**
      - If all the `qr_status` values are either NULL, "Verified", or "Reviewed" means the reviewer has accepted the changes from QM and all the diagnosis are reviewed, the case is considered approved.
      - Update the `Final_Patients` table:
        - Set `quality_reviewer_completed` to the current date and time.
        - Set `qr_status` to "APPROVED".
        - Set `case_status` to 1.

    3. **Case Pending:**
      - If any `qr_status` value is not NULL, "Verified", or "Reviewed", the case is considered pending.
      - Update the `Final_Patients` table:
        - Set `quality_reviewer_completed` to the current date and time.
        - Set `qr_status` to "PENDING" (sends back to QM).
        - Set `case_status` to 1.

- **Post Review RAF Score Update**: The `post_review_rafscore.js` and `postReviewRafScoreV28.js` files are responsible for calculating the potential RAF score and updating in `Final_patients` table after the patient review.

### AJAX Implementation

- **AJAX Calls**: The file uses jQuery's `$.ajax` and `d3.json` methods to asynchronously fetch data from the server.
- **Success Handlers**: Each AJAX call includes a success handler that processes the returned data and updates the DOM elements or tables accordingly.

## Dependencies

- **Bootstrap**: For responsive grid layout and styling.
- **jQuery**: For DOM manipulation and AJAX requests.
- **D3.js**: For data-driven document manipulation and charting.
- **DC.js**: For building complex charts with D3.js.
- **Crossfilter**: For fast multidimensional filtering and grouping of data.
