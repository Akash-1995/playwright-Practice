const {test,expect} = require('@playwright/test');
test('Session storage demo', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
   await page.goto('https://www.saucedemo.com/');

 //locators
let Username=  page.locator('[placeholder="Username"]');
let password=   page.locator('[placeholder="Password"]');
 let titleText =  page.locator('.header_label');
let LoginButton=  page.locator('#login-button');

//print page title()
 console.log(await page.title());

 //perform action
 await Username.fill('standard_user');
 await password.fill('secret_sauce');
 await LoginButton.click();
   // Wait until page fully loads
 await page.waitForLoadState('networkidle');
 await context.storageState({path:'state.json'});
 await context.close();
});

test('Use session storage to login', async ({browser})=>{
    let context = await browser.newContext({storageState:'state.json'});
    let page = await context.newPage();
    await page.goto('https://www.saucedemo.com/cart.html');
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await page.waitForLoadState('networkidle');
    await page.pause();
    await context.close();
});