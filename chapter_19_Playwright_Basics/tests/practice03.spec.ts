import { test, expect } from '@playwright/test';

const BASE_URL = 'https://app.thetestingacademy.com/playwright/ttacart/';
const VALID_PASSWORD = 'tta_secret';

/**
 * Practice 03: Negative & Validation Tests
 * Website: https://app.thetestingacademy.com/playwright/ttacart/
 * Description: Test login with invalid credentials and form validation
 */

test.describe('Negative & Validation Tests', () => {

  test('Login with invalid username and password', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('invalid_user');
    await page.locator('[data-test="password"]').fill('wrong_password');
    await page.locator('[data-test="login-button"]').click();
    
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
  });

  test('Login with valid username but invalid password', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('wrong_password');
    await page.locator('[data-test="login-button"]').click();
    
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
  });

  test('HTML5 validation prevents empty form submission', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Try to click login without filling fields
    // HTML5 required attribute should prevent submission
    await page.locator('[data-test="login-button"]').click();
    
    // Should still be on login page
    await expect(page).toHaveURL(BASE_URL);
    
    // Error message should NOT be visible (form never submitted due to HTML5 validation)
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).not.toBeVisible();
  });

  test('Error message clears after successful login', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // First trigger an error
    await page.locator('[data-test="username"]').fill('invalid_user');
    await page.locator('[data-test="password"]').fill('wrong_password');
    await page.locator('[data-test="login-button"]').click();
    
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    
    // Now enter valid credentials and try again
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill(VALID_PASSWORD);
    await page.locator('[data-test="login-button"]').click();
    
    // Should navigate away, error should not be visible
    await expect(page).toHaveURL(/.*\/inventory.*/);
    await expect(errorMessage).not.toBeVisible();
  });

});
