import { expect, test } from '@playwright/test';

test('landing page loads and key sections are visible', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/أتمتة المتاجر الإلكترونية/i);
  await expect(page.getByRole('heading', { name: 'متجرك يكبر. وعملياتك تواكبه.' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'الحلول', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'مسار توضيحي', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'من أول رسالة إلى طلب واضح.' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'أمثلة من أنظمة موجودة' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'أسئلة قبل أن نبدأ' })).toBeVisible();
  await expect(page.getByLabel('اسمك')).toBeVisible();
});

test('store content follows the selected language', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'الأتمتة الجيدة تبدأ من المشكلة، لا من الأداة.' })).toBeVisible();

  await page.getByRole('button', { name: 'EN', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Good automation starts with the problem, not the tool.' })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');

  await page.getByRole('button', { name: 'AR', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'الأتمتة الجيدة تبدأ من المشكلة، لا من الأداة.' })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
});

test('mobile layout fits and enquiry contact selection works', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  const widths = await page.evaluate(() => ({
    document: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth,
  }));
  expect(widths.document).toBeLessThanOrEqual(widths.viewport);
  await expect(page.getByRole('heading', { name: 'متجرك يكبر. وعملياتك تواكبه.' })).toBeVisible();

  await page.getByRole('radio', { name: 'البريد الإلكتروني' }).check();
  await expect(page.locator('input[name="contact"]')).toHaveAttribute('type', 'email');
});

test('workflow examples and FAQ reveal useful detail', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('tab', { name: 'تفاصيل الطلب' }).click();
  const demoPanel = page.getByRole('tabpanel');
  await expect(demoPanel).toContainText('بيانات الزبون والمنتج تصل في رسائل متفرقة.');
  await expect(demoPanel).toContainText('تُرتّب التفاصيل في ملخص واحد قابل للمراجعة.');
  await expect(demoPanel).toContainText('يرى الفريق ما اكتمل وما يزال ناقصًا قبل المتابعة.');

  await page.getByText('هل يمكن تنظيم رسائل إنستغرام؟').click();
  await expect(page.getByText(/نتحقق من صلاحيات الحساب/)).toBeVisible();
});

test('@a11y critical accessibility check', async ({ page }) => {
  await page.goto('/');
  const { default: AxeBuilder } = await import('@axe-core/playwright');

  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
