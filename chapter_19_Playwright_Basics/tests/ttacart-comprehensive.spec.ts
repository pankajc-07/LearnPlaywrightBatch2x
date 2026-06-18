import { test, expect } from '@playwright/test';

const BASE_URL = 'https://app.thetestingacademy.com/playwright/ttacart/';
const VALID_PASSWORD = 'tta_secret';

/**
 * Test Suite: TTACart Login Page
 * Website: https://app.thetestingacademy.com/playwright/ttacart/
 * Description: Comprehensive test cases for login functionality
 */

// ============ UI & Navigation Tests ============

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

// ============ Login Functionality Tests ============

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

// ============ Negative & Validation Tests ============

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

// ============ Accessibility Tests ============

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

// ============ Data-Driven Tests ============

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
