import { test, expect } from '@playwright/test';
import { config } from '../config';

test.describe('Авторизация', () => {
  test('успешная авторизация', async ({ page }) => {
    await page.goto(`${config.baseUrl}/login`);
    await page.fill('[name="username"]', 'testuser');
    await page.fill('[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    
    await expect(page.locator('.user-profile')).toBeVisible();
  });
});