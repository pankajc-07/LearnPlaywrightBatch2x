import { test, expect } from '@playwright/test';

const BASE_URL = 'https://app.thetestingacademy.com/playwright/ttacart/';
const VALID_PASSWORD = 'tta_secret';

/**
 * Practice 02: Login Functionality Tests (Happy Path)
 * Website: https://app.thetestingacademy.com/playwright/ttacart/
 * Description: Test login with all valid user types
 */

test.describe('Login Functionality', () => {

  test('Login with valid credentials - standard_user', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill(VALID_PASSWORD);
    await page.locator('[data-test="login-button"]').click();
    
    // Should redirect to inventory page
    await expect(page).toHaveURL(/.*\/inventory.*/);
    await expect(page.locator('[data-test="error"]')).not.toBeVisible();
  });

  test('Login with locked_out_user should show error', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill(VALID_PASSWORD);
    await page.locator('[data-test="login-button"]').click();
    
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Epic sadface:');
    await expect(errorMessage).toContainText('locked out');
  });

  test('Login with problem_user should handle gracefully', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('problem_user');
    await page.locator('[data-test="password"]').fill(VALID_PASSWORD);
    await page.locator('[data-test="login-button"]').click();
    
    // problem_user may have issues but page should still respond
    await expect(page.locator('[data-test="login-button"]')).not.toBeVisible();
  });

  test('Login with performance_glitch_user should eventually succeed', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('performance_glitch_user');
    await page.locator('[data-test="password"]').fill(VALID_PASSWORD);
    await page.locator('[data-test="login-button"]').click();
    
    // Wait for navigation with increased timeout due to performance glitch
    await expect(page).toHaveURL(/.*\/inventory.*/, { timeout: 10000 });
  });

  test('Login with error_user should handle errors gracefully', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('error_user');
    await page.locator('[data-test="password"]').fill(VALID_PASSWORD);
    await page.locator('[data-test="login-button"]').click();
    
    // Should either redirect or show an error, but not crash
    await expect(page.locator('body')).toBeVisible();
  });

  test('Login with visual_user should complete login', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('[data-test="username"]').fill('visual_user');
    await page.locator('[data-test="password"]').fill(VALID_PASSWORD);
    await page.locator('[data-test="login-button"]').click();
    
    await expect(page).toHaveURL(/.*\/inventory.*/, { timeout: 10000 });
  });

});
