const { test, expect } = require('@playwright/test');
const data = require('../utils/loginTestdata');



test('@sanity Test on new page navigation', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  console.log(`Page title: ${await page.title()}`);

  await expect(page).toHaveURL(/AutomationPractice/);

  const blinkingLink = page.locator('.blinkingText');

  // Since it opens in the same tab, wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    blinkingLink.click(),
  ]);

  console.log(`New page URL: ${page.url()}`);
  console.log(`New page title: ${await page.title()}`);

  await expect(page).toHaveURL(/documents-request/);
});


//practice inputvalue() method

test(`@abs practice `,async({page})=>{
    await page.goto('https://sso.teachable.com/secure/9521/identity/login/otp');
     let email= page.locator('[placeholder="you@email.com"]');
     await email.fill('test@yopmail.com');

     console.log(await email.inputValue());
})