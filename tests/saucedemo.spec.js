const{test,expect}=require('@playwright/test');
const { count } = require('console');
//imported the test library in the test file, and extracted test and expect functions

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

});


test('Print all Items', async ({ page }) => {
  // Go to URL
  await page.goto('https://www.saucedemo.com/');

  // Locators
  const username = page.locator('[placeholder="Username"]');
  const password = page.locator('[placeholder="Password"]');
  const loginButton = page.locator('#login-button');
  const listItem = page.locator('.inventory_item'); // Correct selector

  // Perform actions
  await username.fill('standard_user');
  await password.fill('secret_sauce');
  await loginButton.click();

  // Wait until page fully loads
  await page.waitForLoadState('networkidle');

  // Count all inventory items
  const count = await listItem.count();
  console.log('Total items:', count);

  // Print all item names
  for (let i = 0; i < count; i++) {
    const name = await listItem.nth(i).locator('.inventory_item_name').textContent();
    console.log(`Item ${i + 1}: ${name}`);
  }
  await expect(listItem).toHaveCount(6); // Swag Labs always shows 6 products

// Click on the "Add to Cart" button of the first item
await listItem.first().locator('#add-to-cart-sauce-labs-onesie').click();


});
