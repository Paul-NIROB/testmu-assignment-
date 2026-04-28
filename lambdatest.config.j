const { defineConfig } = require('@playwright/test');

// ✏️ PUT YOUR CREDENTIALS HERE
const LT_USERNAME = 'nirobpaulgetit';
const LT_ACCESS_KEY = 'PASTE_YOUR_ACCESS_KEY';

module.exports = defineConfig({
  testDir: './tests',
  testMatch: '**/lt-amazon.spec.js',
  fullyParallel: true,
  workers: 2,
  timeout: 120000,
  use: {
    connectOptions: {
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({
        browserName: 'Chrome',
        browserVersion: 'latest',
        'LT:Options': {
          platform: 'Windows 10',
          build: 'TestMu Assignment',
          name: 'Amazon Automation',
          user: LT_USERNAME,
          accessKey: LT_ACCESS_KEY,
          network: true,
          video: true,
          console: true,
        }
      }))}`,
    },
  },
});
