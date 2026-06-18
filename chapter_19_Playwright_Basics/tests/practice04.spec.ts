import { test, expect } from '@playwright/test';

const BASE_URL = 'https://app.thetestingacademy.com/playwright/ttacart/';

/**
 * Practice 04: Accessibility Tests
 * Website: https://app.thetestingacademy.com/playwright/ttacart/
 * Description: Verify accessibility attributes and ARIA properties
 */

test.describe('Accessibility', () => {

  test('Username field has correct placeholder', async ({ page }) => {
    await page.goto(BASE_URL);
    const usernameField = page.locator('[data-test="username"]');
    await expect(usernameField).toHaveAttribute('placeholder', 'Username');
  });

  test('Password field has correct placeholder', async ({ page }) => {
    await page.goto(BASE_URL);
    const passwordField = page.locator('[data-test="password"]');
    await expect(passwordField).toHaveAttribute('placeholder', 'Password');
  });

  test('Error container has alert role', async ({ page }) => {
    await page.goto(BASE_URL);
    const errorContainer = page.locator('[data-test="error"]');
    await expect(errorContainer).toHaveAttribute('role', 'alert');
  });

  test('Form has autocomplete attributes', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('[data-test="username"]')).toHaveAttribute('autocomplete', 'username');
    await expect(page.locator('[data-test="password"]')).toHaveAttribute('autocomplete', 'current-password');
  });

});
