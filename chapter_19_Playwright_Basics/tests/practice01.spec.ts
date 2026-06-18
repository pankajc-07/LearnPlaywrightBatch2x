import { test, expect } from '@playwright/test';

const BASE_URL = 'https://app.thetestingacademy.com/playwright/ttacart/';
const VALID_PASSWORD = 'tta_secret';

/**
 * Practice 01: UI & Navigation Tests
 * Website: https://app.thetestingacademy.com/playwright/ttacart/
 * Description: Verify all UI elements on the login page are present and correct
 */

test.describe('UI & Navigation', () => {

  test('Verify page title is correct', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle('TTACart - Login');
  });

  test('Verify TTACart heading is visible', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('h1.tta-brand-title')).toBeVisible();
    await expect(page.locator('h1.tta-brand-title')).toHaveText('TTACart');
  });

  test('Verify username input field is visible and enabled', async ({ page }) => {
    await page.goto(BASE_URL);
    const usernameField = page.locator('[data-test="username"]');
    await expect(usernameField).toBeVisible();
    await expect(usernameField).toBeEnabled();
  });

  test('Verify password input field is visible and enabled', async ({ page }) => {
    await page.goto(BASE_URL);
    const passwordField = page.locator('[data-test="password"]');
    await expect(passwordField).toBeVisible();
    await expect(passwordField).toBeEnabled();
  });

  test('Verify login button is visible and enabled', async ({ page }) => {
    await page.goto(BASE_URL);
    const loginButton = page.locator('[data-test="login-button"]');
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
    await expect(loginButton).toHaveText('Login');
  });

  test('Verify accepted usernames section is displayed', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.getByText('Accepted usernames are:')).toBeVisible();
    await expect(page.locator('[data-test="login-credentials"]')).toContainText('standard_user');
    await expect(page.locator('[data-test="login-credentials"]')).toContainText('locked_out_user');
    await expect(page.locator('[data-test="login-credentials"]')).toContainText('problem_user');
    await expect(page.locator('[data-test="login-credentials"]')).toContainText('performance_glitch_user');
    await expect(page.locator('[data-test="login-credentials"]')).toContainText('error_user');
    await expect(page.locator('[data-test="login-credentials"]')).toContainText('visual_user');
  });

  test('Verify password information is displayed', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.getByText('Password for all users:')).toBeVisible();
    await expect(page.locator('[data-test="login-password"]')).toHaveText(VALID_PASSWORD);
  });

  test('Verify password field masks input', async ({ page }) => {
    await page.goto(BASE_URL);
    const passwordField = page.locator('[data-test="password"]');
    await passwordField.fill('testpassword');
    await expect(passwordField).toHaveAttribute('type', 'password');
  });

  test('Verify username field has required attribute', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('[data-test="username"]')).toHaveAttribute('required');
  });

  test('Verify password field has required attribute', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('[data-test="password"]')).toHaveAttribute('required');
  });

  test('Verify login container is present', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('[data-test="login-container"]')).toBeVisible();
  });

});
