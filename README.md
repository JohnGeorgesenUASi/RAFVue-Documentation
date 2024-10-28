# RAFVue

## Documentation

This repository contains the documentation for the RAFVue application.

## Installation

### Requirements

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above
  - Verify your version by running `node -v`
  - We recommend using [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions
  - When installing Node.js, check all checkboxes related to dependencies

### Project Structure

```
RAFVue-Docs/
├── docs/               # Markdown documentation files
├── src/               # Non-documentation files
│   └── pages/         # JSX/TSX/MDX files for website pages
├── static/            # Static assets
├── docusaurus.config.ts   # Site configuration
└── sidebars.ts       # Documentation sidebar configuration
```

#### Key Directories

- `/docs/`: Contains all documentation Markdown files
  - Sidebar order can be customized in `sidebars.ts`
  - Can be renamed after setting the `path` option
  - Optional if docs plugin is disabled
- `/src/`: Contains pages and custom React components
  - Central location for non-documentation files
  - Helps with linting and processing
- `/src/pages`: Auto-converted to website pages
- `/static/`: Static assets copied to build directory
- `/docusaurus.config.ts`: Main configuration file
- `/sidebars.ts`: Controls documentation sidebar structure

### Getting Started

1. Navigate to the project directory:
```bash
cd RAFVue-Docs
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Start the development server:
```bash
npm run start
```

The application will be available at `http://localhost:3000`. A browser window should open automatically.