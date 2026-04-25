import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  // Run tests sequentially (no parallelism) for predictable output
  fullyParallel: false,
  // Fail the build on CI if test.only is accidentally left in
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: 'list',
  use: {
    // Base URL so page.goto('/') works if needed
    baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/',
    // Keep browser open briefly so you can see what's happening
    headless: false,
    // Screenshot on failure for easier debugging
    screenshot: 'only-on-failure',
    // Slow down actions slightly so the video walkthrough is easy to follow
    launchOptions: {
      slowMo: 300,
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
