const { test, expect, request } = require('@playwright/test');

test.describe('E-commerce API & UI tests', () => {
const loginPayload = {
  userEmail: "test13@yopmail.com",
  userPassword: "Test@123"
};

let apiContext;
let token;

test.describe('E-commerce API & UI tests', () => {

  // -------------------- Login before all tests --------------------
  test.beforeAll(async () => {
    // Create API context
    apiContext = await request.newContext();

    // Login via API
    const apiResponse = await apiContext.post(
      'https://rahulshettyacademy.com/api/ecom/auth/login',
      { data: loginPayload }
    );

    // Validate status code
    expect(apiResponse.status()).toBe(200);

    // Extract token
    const jsonResponse = await apiResponse.json();
    console.log('Login response:', jsonResponse);
    token = jsonResponse.token;
    console.log(jsonResponse.message);
  });

  // -------------------- Set token in local storage --------------------
  test('Add token in local storage and open My Orders page', async ({ page }) => {
    await page.addInitScript(value => {
      window.localStorage.setItem('token', value);
    }, token);

    await page.goto('https://rahulshettyacademy.com/client/#/dashboard/myorders');
    await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/myorders');
  });
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // }, 
})
});