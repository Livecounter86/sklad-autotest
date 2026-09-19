import { test, expect } from '@playwright/test';
import { makePart } from '../../../../utils/helpers/partHelper';

test('add part', async ({ page }) => {
  const part = makePart();

  await page.goto('http://127.0.0.1:5000/');
  await page.getByRole('button', { name: 'Warehouse' }).click();
  await expect(page.locator('.page-header'), 'Warehouse page is open').toContainText('Spare parts warehouse');
  await page.getByRole('button', { name: 'Add part' }).click();
  await page.locator('#add-name').fill(part.name);
  await expect(page.locator('#add-name'), 'Поле не пусте').not.toBeEmpty();
  await page.getByLabel('OEM number:').fill(part.origNumber);
  await page.getByLabel('Aftermarket:').fill(part.analog);
});
