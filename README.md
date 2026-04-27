# TestMu AI - Automation Assignment

## Tech Stack
- Playwright (JavaScript)
- Node.js

## Setup Instructions

1. Clone the repo:
   git clone <your-repo-url>
   cd testmu-assignment

2. Install dependencies:
   npm install
   npx playwright install chromium

3. Run tests:
   npm test

## Test Cases
- **TC1**: Searches Amazon for "iPhone", adds first result to cart, prints price
- **TC2**: Searches Amazon for "Samsung Galaxy", adds first result to cart, prints price
- Both tests run **in parallel** using Playwright's `fullyParallel: true` config

## Output
Prices are printed to the console during test execution.