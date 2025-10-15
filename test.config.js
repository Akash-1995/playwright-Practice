// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect :{ timeout : 8000},
  retries: 1,
  reporter: 'html',
  use: {
    browserName: 'webkit',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
});
