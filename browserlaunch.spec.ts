import {test,chromium, firefox} from '@playwright/test';
test("launch a browser",async ()=>{
const browser = await firefox.launch({'channel':'firefox','headless':false});
const context = await browser.newContext();
const page = await context.newPage();  
await page.goto("https://www.redbus.in");

const browser1 = await chromium.launch({'channel':'msedge','headless':false});
const context1 = await browser1.newContext();
const page1 = await context1.newPage();  
await page1.goto("https://www.flipkart.com");

})