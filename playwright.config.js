const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  retries: 1,
  timeout: 120000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 800 },
    actionTimeout: 30000,
    navigationTimeout: 60000,
    // Bypass bot detection
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    locale: 'en-IN',
    timezoneId: 'Asia/Kolkata',
    extraHTTPHeaders: {
      'Accept-Language': 'en-IN,en;q=0.9',
    },
  },
  reporter: 'list',
});