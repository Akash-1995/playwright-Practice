const{test,expect}=require('@playwright/test');
const { count } = require('console');
//imported the test library in the test file, and extracted test and expect functions
test.describe('SauceDemo Login Test Suite',()=>{
test('login to the application',async ({page})=>{
//goto Url
 await page.goto('https://www.saucedemo.com/');

 //locators
let Username= await page.locator('[placeholder="Username"]');
let password=  await page.locator('[placeholder="Password"]');
 let titleText = await page.locator('.header_label');
let LoginButton= await page.locator('#login-button');

//print page title()
 console.log(await page.title());

 //perform action
 await Username.fill('standard_user');
 await password.fill('secret_sauce');
 await LoginButton.click();
   // Wait until page fully loads
 await page.waitForLoadState('networkidle');
 //print Title
 console.log(await titleText.textContent());

})

});
