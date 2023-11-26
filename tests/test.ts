import { expect, test } from '@playwright/test';

test('index page has expected nav element', async ({ page }) => {
  await page.goto('/');
  const nav = await page.waitForSelector('nav');
  expect(nav).toBeTruthy();
});
