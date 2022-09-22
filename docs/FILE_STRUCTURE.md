## File Structure
### Top-level directory layout

    .
    ├── docs                    # Documentation files
    ├── pages                   # Web pages
    ├── public                  # Static files
    ├── src                     # Source files
    ├── styles                  # CSS files
    └── README.md

### Documentation files

This folder contains Markdown documentation files. These files are used as reference for the project and are not used in the application.

    .
    ├── ...
    ├── docs                    # Documentation files
    │   ├── README.md           # Table of contents
    │   └── ...                 # etc.
    └── ...

### Web pages

This folder contains web pages. Each file in this folder is mapped to a route. For example, `pages/index.js` is mapped to `/`. Additionally, files in the `pages/api` directory are mapped to `/api/*` and are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

    .
    ├── ...
    ├── pages                   # Web pages
    │   ├── api                 # API routes
    │   ├── index.js            # Home page
    |   └── ...                 # etc.
    └── ...

### Source files

This folder contains source files. These files are used for React applications and/or as functions fo business logic.

    .
    ├── ...
    ├── src                     # Source files
    │   ├── components          # React components
    │   └── logic               # Business logic
    └── ...
