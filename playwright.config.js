// // playwright.config.js
// const { defineConfig } = require('@playwright/test');

// module.exports = defineConfig({
//   testDir: './tests',
//   timeout: 30000,
//   retries: 0,
//   reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
// });

// playwright.config.js
const { defineConfig, devices, chromium } = require('@playwright/test');
const path = require('path');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: { slowMo: 300 },
        trace: "retain-on-failure",
        screenshot: "only-on-failure",
        video: "retain-on-failure"
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        launchOptions: { slowMo: 300 },
        trace: 'on-first-retry',
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        launchOptions: { slowMo: 300 },
        trace: 'on-first-retry',
      },
    },
    {
      name: 'edge',
      use: {
        // Use Chromium engine with Edge executable
        channel: 'msedge',             // Playwright will launch Edge
        launchOptions: { slowMo: 300 },
        trace: 'on-first-retry',
      },
    },
  ],
});
