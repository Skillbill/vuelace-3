# Contributing to Vuelace-3

- [Contributing to Vuelace-3](#contributing-to-vuelace-3)
  - [Getting Started](#getting-started)
    - [Fork and Clone the Repository](#fork-and-clone-the-repository)
    - [Storybook](#storybook)
  - [How to Contribute](#how-to-contribute)
    - [Suggesting Features](#suggesting-features)
    - [Reporting Bugs](#reporting-bugs)
    - [Submitting Pull Requests](#submitting-pull-requests)
  - [Development Guidelines](#development-guidelines)
    - [Code Style](#code-style)
    - [Commit Message Guidelines](#commit-message-guidelines)

## Getting Started

### Fork and Clone the Repository

Fork the repository from GitHub and clone your forked repository to your local machine:

```
git clone https://github.com/your-username/vuelace-3.git
cd vuelace-3
```

### Storybook

We use Storybook to develop and showcase our UI components.
Make sure you have [Node.js](https://nodejs.org/) installed. You can launch Storybook by running:

```
npm install
npm run storybook
```

This will start Storybook on your local machine.

## How to Contribute

We use GitHub issues to track new features or bugs.

### Suggesting Features

To suggest a new feature, please open a new issue. Provide as much detail as possible about the enhancement and why it would be useful.

### Reporting Bugs

If you find a bug, please create a bug report using the template on GitHub issues.

### Submitting Pull Requests

Starting from your forked and cloned repository:

- Create a new branch:

  ```
  git checkout -b feature/your-feature-name
  ```

- Make your changes and commit.
- Push to your fork and create a pull request against the `main` branch of our original repository.

Your pull request must respect the following guidelines:

- Check that your code does not introduce linting issues.
- Provide a detailed description of your changes in the pull request.
- Link the related issue, if it exists.

## Development Guidelines

### Code Style

- Follow the existing code style.
- Use ESLint to maintain code quality.
- Write clear and concise comments where necessary.

### Commit Message Guidelines

Example of a good commit message

```
Add support for multiple options selection
```

Use the following rules for a great git commit message style:

- Use the imperative mood in the subject line
- Limit the subject line to 50 characters
- Capitalize the subject line
- In case you need to explain what and why you have done something, use the commit body
