# Playwright TodoMVC Automation Project

## 🚀 Project Overview
This project demonstrates **end-to-end automation** using Playwright on the [TodoMVC React Demo App](https://todomvc.com/examples/react/dist/).  

It automates **core Todo actions**: add, complete, and delete tasks, with assertions, reporting, screenshots, and video capture on failure.  

---

## 🎯 Project Goals (Measurable)
- Install Playwright and set up tests  
- Automate adding **3 Todos**, mark 1 as completed, and delete  
- Generate **Playwright HTML report** and view results  
- Add assertions and validate failures in reports  
- Capture **screenshots and video** on test failure  
- Run tests in **headed mode**, **debug mode**, **interactive UI**, and with **trace**

---

## 🛠 Tools & Technologies
- Node.js  
- Playwright (latest version)  
- VS Code (or any IDE)  
- Git & GitHub for version control

---

## 📋 Scenario Details
- **Demo App:** [TodoMVC React](https://todomvc.com/examples/react/dist/)  
- **Test Flow:**  
  1. Add a new Todo: “Buy Groceries”  
  2. Add another: “Pay Bills”  
  3. Mark “Buy Groceries” as completed  
  4. Delete “Pay Bills”  
  5. Add assertions for visibility and text

---

## 🏗 Project Structure
PlaywrightProject/
├─ tests/ # Test scripts
│ └─ todo.spec.js # Main TodoMVC test
├─ playwright.config.js # Playwright configuration
├─ package.json # Project dependencies
├─ node_modules/ # Node.js packages
├─ playwright-report/ # Test HTML report
└─ test-results/ # Screenshots, video, traces


---

## ⚡ Step-by-Step Implementation

1. **Initialize Project**
npm init -y

2. **Install Playwright**
npm init playwright@latest
npx playwright install

3. Create test file
tests/todo.spec.js

4. Write test script
Add 3 Todos
Mark 1 as completed
Delete 1
Add assertions

5. Run Tests
npx playwright test              # Headless
npx playwright test --headed     # Headed mode
npx playwright test --project=chromium
npx playwright test --ui         # Interactive mode
npx playwright test --debug      # Debug mode

6. Generate HTML Report
npx playwright show-report

7. Config for Screenshots, Video, Trace
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html', { open: 'never' }]],
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    slowMo: 300, // optional slow motion
  },
});

8. Optional: Use tags and grep
test.describe('Todo Tests @sanity', () => { ... });

npx playwright test --grep @sanity

📌 Tips

Always run headed mode for visual verification
Use trace for debugging failed tests
Screenshots and videos help with CI/CD pipelines
Keep node_modules/ and playwright-report/ in .gitignore
Use on-first-retry, retain-on-failure to capture traces efficiently




