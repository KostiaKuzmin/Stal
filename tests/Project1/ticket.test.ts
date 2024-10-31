import { test, expect } from '@playwright/test';
import { config } from '../config';

test.describe('Работа с тикетами', () => {
  test('создание тикета', async ({ page }) => {
    await page.goto(`${config.baseUrl}/tickets/new`);
    await page.fill('[name="title"]', 'Тестовый тикет');
    await page.fill('[name="description"]', 'Описание тестового тикета');
    await page.selectOption('select[name="priority"]', 'high');
    await page.click('button[type="submit"]');
    
    await expect(page.locator('.ticket-created-message')).toBeVisible();
  });
});