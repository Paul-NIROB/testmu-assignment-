# TestMu AI - Automation Assignment

## Overview
Automated test suite for Amazon.in built with Playwright and JavaScript. Tests search for iPhone and Samsung Galaxy devices, add them to cart, and print the device price to the console. Both tests run in parallel.

---

## Tech Stack
- **Playwright** - Test automation framework
- **JavaScript** - Programming language
- **Node.js** - Runtime environment
- **LambdaTest** - Cloud test execution platform

---

## Project Structure

# TestMu AI - Automation Assignment

## Overview
Automated test suite for Amazon.in built with Playwright and JavaScript. Tests search for iPhone and Samsung Galaxy devices, add them to cart, and print the device price to the console. Both tests run in parallel.

---

## Tech Stack
- **Playwright** - Test automation framework
- **JavaScript** - Programming language
- **Node.js** - Runtime environment
- **LambdaTest** - Cloud test execution platform

---

## Project Structure

---

## Running on LambdaTest Cloud

### Step 1: Create a free account
Sign up at [lambdatest.com](https://www.lambdatest.com)

### Step 2: Get your credentials
Go to [accounts.lambdatest.com/security](https://accounts.lambdatest.com/security) and copy your **Username** and **Access Key**.

### Step 3: Add credentials to config
Open `lambdatest.config.js` and update:
```javascript
const LT_USERNAME = 'your_username';
const LT_ACCESS_KEY = 'your_access_key';
```

### Step 4: Run tests on LambdaTest cloud
```bash
npx playwright test --config=lambdatest.config.js
```

### Step 5: View results
Go to [automation.lambdatest.com/build](https://automation.lambdatest.com/build) to see:
- Pass/Fail status
- Video recordings of each test
- Console logs and screenshots

---

## Configuration Details

### Local Config (playwright.config.js)
| Setting | Value |
|---|---|
| Parallel execution | true |
| Workers | 2 |
| Browser | Chromium |
| Headless | false |
| Timeout | 120 seconds |

### LambdaTest Config (lambdatest.config.js)
| Setting | Value |
|---|---|
| Browser | Chrome latest |
| Platform | Windows 10 |
| Parallel execution | true |
| Workers | 2 |
| Video recording | true |
| Network logs | true |
| Console logs | true |

---

## Author
**Nirob Paul**
- GitHub: [Paul-NIROB](https://github.com/Paul-NIROB)
- Email: nirobpaulgetit@gmail.com