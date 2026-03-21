import  {expect, test} from '@playwright/test';
test('should launch the browser', async ({page}) => {
  await page.goto('https://leafground.com/radio.xhtml');
await expect(page.getByRole("radio",{name:"Safari"}).nth(1)).toBeChecked();

await page.locator('(//label[text()="Chrome"])[1]').click();
await expect(page.locator('(//label[text()="Chrome"])[1]')).toBeChecked();

await page.locator('//label[text()="Chennai"]').click();

await expect(page.getByLabel("21-40 Years")).toBeChecked();
await page.waitForTimeout(3000);
}) 