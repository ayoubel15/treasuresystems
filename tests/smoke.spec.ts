import { expect, test } from '@playwright/test';

test('landing page loads and key sections are visible', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/TREASURE SYSTEMS|Treasure Systems/i);
  await expect(page.getByRole('heading', { name: /Business Processes|نحوّل العمليات/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Services|الخدمات/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Work|أعمالنا/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Process|طريقة العمل/i })).toBeVisible();
});

test('trust section follows the selected language', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'مصمم للوضوح التشغيلي وقيمة أعمال قابلة للقياس.' })).toBeVisible();

  await page.getByRole('button', { name: 'القائمة' }).click();
  await page.getByRole('button', { name: 'EN' }).click();
  await expect(page.getByRole('heading', { name: 'Built for operational clarity and measurable business value.' })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');

  await page.getByRole('button', { name: 'Menu' }).click();
  await page.getByRole('button', { name: 'AR', exact: true }).click({ force: true });
  await expect(page.getByRole('heading', { name: 'مصمم للوضوح التشغيلي وقيمة أعمال قابلة للقياس.' })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
});

test('@a11y critical accessibility check', async ({ page }) => {
  await page.goto('/');
  const { default: AxeBuilder } = await import('@axe-core/playwright');

  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
