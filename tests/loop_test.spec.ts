import { test, expect } from '@playwright/test';
import { Locators } from '../locators';
import testData from '../testData.json';

test.describe('Demo App Automation', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the Demo App
    await page.goto('/');

    // Implement login automation
    await page.fill(Locators.login.username, 'admin');
    await page.fill(Locators.login.password, 'password123');
    await page.click(Locators.login.signInButton);

    // Verify login success - checking for nav bar as per instructions
    await expect(page.locator(Locators.dashboard.nav)).toBeVisible();
  });

  testData.forEach((data) => {
    test(`Test Case ${data.id}: Verify "${data.task}" in "${data.app}" under "${data.column}"`, async ({ page }) => {
      // 1. Navigate to project (Web Application or Mobile Application)
      await page.locator(Locators.dashboard.nav).locator(Locators.dashboard.projectButton(data.app)).click();

      // 2. Verify project header to ensure navigation
      await expect(page.locator('h1.text-xl')).toHaveText(data.app);

      // 3. Verify task is in the correct column
      const column = page.locator(Locators.dashboard.column(data.column));
      const taskCard = column.locator(Locators.dashboard.taskCard(data.task));
      await expect(taskCard).toBeVisible();

      // 4. Confirm tags
      for (const tag of data.tags) {
        const tagLocator = taskCard.locator(Locators.dashboard.taskTag(tag));
        await expect(tagLocator).toBeVisible();
      }
    });
  });
});
