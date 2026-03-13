import {test} from '@playwright/test';
import { doesNotThrow } from 'node:assert';
//browser launch
test('should launch the browser', async ({page}) => {
  await page.goto('http://leaftaps.com/opentaps/control/main');
  await page.locator('#username').fill('Democsr2');
  await page.locator('#password').fill('crmsfa');
  await page.locator('.decorativeSubmit').click();
  await page.locator('a').nth(1).click();
  //Click Leads   
await page.locator('a:has-text("Leads")').click();
await page.locator('a:has-text("Create Lead")').click();
//8. Fill the Company details: Company Name, First Name, Last Name, Personal Title, General Prof Title, Annual Revenue, Department Name, Primary Phone Number
await page.locator('#createLeadForm_companyName').fill('TestLeaf');
await page.locator('#createLeadForm_firstName').fill('Haja');
await page.locator('#createLeadForm_lastName').fill('J');
await page.locator('#createLeadForm_personalTitle').fill('TestLeaf');
await page.locator('#createLeadForm_generalProfTitle').fill('TestLeaf');
await page.locator('#createLeadForm_annualRevenue').fill('1000000');    
await page.locator('#createLeadForm_departmentName').fill('QA');
await page.locator('#createLeadForm_primaryPhoneNumber').fill('1234567890');
await page.locator('input:has-text("Create Lead")').click();
await page.title().then((title)=>{
  console.log(title);
});
});