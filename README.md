# Loop Technical Evaluation - Q1 2025

This repository contains the automated test suite for the Loop Technical Evaluation 2025. The suite is built using **Playwright** with **TypeScript** and follows a **data-driven** approach.

## Objective
The goal of this project is to automate the verification of task placement and metadata (tags) within a project management application (Asana-like demo).

## Features
- **Data-Driven Testing**: All test scenarios are stored in `testData.json`, allowing for easy scaling of test cases without modifying the test logic.
- **Dynamic Locators**: Robust XPaths are used to identify columns, tasks, and tags dynamically based on their content, rather than relying on brittle indexes where possible (except where specified by requirements).
- **Separation of Concerns**: Selectors are managed in a dedicated `locators.ts` file to improve maintainability.
- **Automated Login**: Implements a reusable login flow for all test cases.

## Tech Stack
- **Framework**: Playwright
- **Language**: TypeScript
- **Data Format**: JSON

## Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Loop
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Playwright Browsers**:
   ```bash
   npx playwright install chromium
   ```

4. **Run the tests**:
   ```bash
   npm test
   ```

## Test Scenarios Covered
The suite covers 6 primary test cases across two applications:
1. **Web Application**:
   - Verify "Implement user authentication" in "To Do" column with tags "Feature", "High Priority".
   - Verify "Fix navigation bug" in "To Do" column with tag "Bug".
   - Verify "Design system updates" in "In Progress" column with tag "Design".
2. **Mobile Application**:
   - Verify "Push notification system" in "To Do" column with tag "Feature".
   - Verify "Offline mode" in "In Progress" column with tags "Feature", "High Priority".
   - Verify "App icon design" in "Done" column with tag "Design".

## Project Structure
- `tests/loop_test.spec.ts`: Main test suite.
- `locators.ts`: Centralized XPath locators.
- `testData.json`: Data-driven test cases.
- `playwright.config.ts`: Playwright configuration.
