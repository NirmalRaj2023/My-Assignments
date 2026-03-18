import test from '@playwright/test';
import { log } from 'node:console';
test("Drop dwon",async({page}) =>{
await page.goto("https://leafground.com/select.xhtml");
await page.locator(".ui-selectonemenu").nth(0).selectOption({index:1})
const dropcount =page.locator("//select[@class='ui-selectonemenu']/option");
const count= await dropcount.count();
for(let i=0;i<count;i++){
const dc=await dropcount.nth(i).innerText();
console.log(dc);
}
console.log(count);
await page.locator(".ui-selectonemenu-trigger ").nth(0).click()
await page.locator('//li[text()="India"]').click()
await page.locator(".ui-selectonemenu-trigger ").nth(1).click()
await page.locator('//li[text()="Chennai"]').click()
await page.locator(".ui-autocomplete-dropdown ").click()
await page.locator('//li[text()="Appium"]').click()
await page.locator(".ui-autocomplete-dropdown ").click()
await page.locator('//li[text()="Selenium WebDriver"]').click()
await page.locator(".ui-autocomplete-dropdown ").click()
await page.locator('//li[text()="Playwright"]').click()
await page.locator(".ui-selectonemenu-trigger ").nth(2).click()
await page.locator('//li[text()="English"]').click()
await page.locator(".ui-selectonemenu-trigger ").nth(3).click()
await page.locator('//li[text()="Two"]').click()
})