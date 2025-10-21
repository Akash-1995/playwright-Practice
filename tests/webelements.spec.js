const { test, expect } = require('@playwright/test');
const data = require('../utils/loginTestdata');

test('Practice select dropdown in OrangeHRM', async ({ page }) => {
    // 1️⃣ Go to login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'domcontentloaded' });

    // 2️⃣ Login
    const username = page.locator('[placeholder="Username"]');
    const password = page.locator('[placeholder="Password"]');
    const loginButton = page.locator('[type="submit"]');

    await username.fill(data.username);
    await password.fill(data.password);
    await loginButton.click();

    // 3️⃣ Wait for main menu
    const Admin = page.locator('.oxd-main-menu-item', { hasText: 'Admin' });
    await Admin.click();
    await page.waitForLoadState('networkidle');

    // 4️⃣ Click User Role dropdown and select Admin
    const userRole = page.locator('.oxd-select-text.oxd-select-text--active').nth(1); // parent dropdown locator
    await userRole.click();
    await page.locator('div[role="option"]:has-text("Admin")').click(); // select option

    // 5️⃣ Wait for table to refresh
    const userCard = page.locator('.oxd-table-card');
    await expect(userCard.first()).toBeVisible();

    // 6️⃣ Count user cards
    const count = await userCard.count();
    console.log('Total users displayed:', count);

    // 7️⃣ Assertion: at least one user should appear
    expect(count).toBeGreaterThan(0);
});
