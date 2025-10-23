const {test,expect}=require('@playwright/test');
const data =require('../utils/loginTestdata.json')

test('Add product to card ', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    //locators

    let username= page.locator('[placeholder="email@example.com"]');
    let password= page.locator('[placeholder="enter your passsword"]');
    let loginButton=page.locator('[name="login"]');
    let product=page.locator('.row .card');
    let productCards=product.locator('.card-body');


    await username.fill(data.username2);
    await password.fill(data.password2);
    await loginButton.click();
    await page.waitForLoadState('networkidle');

    let count =await productCards.count();
    console.log(count);

    for(let i=0;i<count;i++)
    {
       let titleText=await productCards.nth(i).locator('b').textContent();
       console.log(titleText);
       if(titleText==='ZARA COAT 3'){
        await productCards.nth(i).locator('text=Add To Cart').click();
      console.log('ZARA COAT 3 added to cart!');
      break;
       }
    }
    

})