import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uibank.uipath.com/welcome');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('FebApiuser');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Eagle@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'I agree to the Privacy Policy' }).click();
  await page.getByText('Apply For New Account').click();
  await page.getByRole('textbox', { name: 'Give a Nickname to Your' }).click();
  await page.getByRole('textbox', { name: 'Give a Nickname to Your' }).fill('test test');
  await page.getByLabel('Type of Account').selectOption('savings');
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByText('View Your Accounts').click();
  await page.getByRole('link', { name: 'Transfer Funds →' }).click();
  await page.getByLabel('From').selectOption('14: Object');
  await page.getByLabel('To', { exact: true }).selectOption('0: Object');
  await page.getByRole('spinbutton', { name: 'How much would you like to' }).click();
  await page.getByRole('spinbutton', { name: 'How much would you like to' }).fill('20');
  await page.getByRole('button', { name: 'Review' }).click();
  await page.getByText('Confirm Transfer →').click();
  await page.getByRole('heading', { name: 'Your transfer was successful!' }).click();
  await page.getByRole('heading', { name: 'Your money is available' }).click();
});