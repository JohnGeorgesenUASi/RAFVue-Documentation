---
sidebar_position: 2
---

# Environment Setup

This document provides step-by-step instructions for setting up the development environment for the RAFVue codebase. Follow these steps to get the project up and running on your local machine.

## Prerequisites

Before proceeding with the environment setup, ensure that you have the following software installed on your system:

- Node.js (version X.X.X or higher)
- npm (Node Package Manager)
- Git

### Step 1: Download RAFVue Repository

To get started, you need to download the RAFVue repository from the version control system (e.g., GitHub). Follow these steps:

1. Run the following command to clone the repository:
   ```
   git clone https://github.com/DocPedro/RAFVue.git
   ```

6. Once the cloning process is complete, navigate to the newly created RAFVue directory:

   ```
   cd RAFVue
   ```

### Step 2: Install Dependencies

The RAFVue project relies on several dependencies that need to be installed before running the application. To install these dependencies, follow these steps:

1. Make sure you are in the root directory of the RAFVue repository.
2. Run the following command to install the necessary dependencies:

   ```
   npm install
   ```

### Step 3: Add Environment File

The RAFVue application requires an environment file (`.env`) to store sensitive configuration details such as API keys, database credentials, and other settings. To add the environment file, follow these steps:

1. Create a new file named `.env` in the main folder of the RAFVue repository.
2. Open the `.env` file in a text editor and copy the contents (Ask around a developer for a copy).
3. Save the file and close the text editor.

### Step 4: Run the Application

With the dependencies installed and the environment file in place, you are now ready to run the RAFVue application locally. Follow these steps:

1. Run the following command to start the development server:
   ```
   npm run serve
   ```
2. Once the server is up and running, open your web browser and navigate to the provided URL (e.g., `http://localhost:8080`).
3. The RAFVue application should now be running locally on your machine.

### Conclusion

By following the steps outlined in this document, you should have successfully set up the development environment for the RAFVue codebase. You can now start exploring and modifying the codebase locally on your machine.

Happy coding!

