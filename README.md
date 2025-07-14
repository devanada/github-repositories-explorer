# GitHub Repositories Explorer

- React: v19.1.0
- Node: v22.17.0

## Run Locally

Clone the project

```bash
  git clone git@github.com:devanada/github-repositories-explorer.git
```

Go to the project directory

```bash
  cd github-repositories-explorer
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Demo

https://devanada.github.io/github-repositories-explorer/

Users can search for GitHub profiles by entering a username into the input field. After typing the desired username, click the Search button to initiate the search. The application will then display a list of up to five matching GitHub users in the UI.

The list of users is presented in an accordion format. Each user entry can be expanded by clicking on it. When a user is expanded, the application will fetch and display all public repositories associated with that GitHub account (up to 100 repositories, due to GitHub API limitations). The repositories are listed directly below the expanded user entry, providing quick access to repository names, descriptions, and star counts.

This interactive design allows users to efficiently browse and explore GitHub profiles and their repositories without leaving the application interface.
