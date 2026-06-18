import { test, expect } from '@playwright/test';

const BASE_URL = 'https://app.thetestingacademy.com/playwright/ttacart/';
const VALID_PASSWORD = 'tta_secret';

/**
 * Practice 05: Data-Driven Tests
 * Website: https://app.thetestingacademy.com/playwright/ttacart/
 * Description: Run same test logic with multiple sets of data
 */

test.describe('Data-Driven Tests', () => {

  const invalidCredentials = [
    { username: 'invalid', password: 'invalid', description: 'completely invalid credentials' },
    { username: 'standard_user', password: 'wrongpass', description: 'valid username, wrong password' },
  ];

  for (const cred of invalidCredentials) {
    test(`Should show error for ${cred.description}`, async ({ page }) => {
      await page.goto(BASE_URL);
      await page.locator('[data-test="username"]').fill(cred.username);
      await page.locator('[data-test="password"]').fill(cred.password);
      await page.locator('[data-test="login-button"]').click();
      
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    });
  }

  const validUsers = [
    'standard_user',
    'performance_glitch_user',
    'visual_user',
  ];

  for (const user of validUsers) {
    test(`Should login successfully with ${user}`, async ({ page }) => {
      await page.goto(BASE_URL);
      await page.locator('[data-test="username"]').fill(user);
      await page.locator('[data-test="password"]').fill(VALID_PASSWORD);
      await page.locator('[data-test="login-button"]').click();
      
      if (user === 'performance_glitch_user') {
        await expect(page).toHaveURL(/.*\/inventory.*/, { timeout: 10000 });
      } else {
        await expect(page).toHaveURL(/.*\/inventory.*/, { timeout: 10000 });
      }
    });
  }

});
