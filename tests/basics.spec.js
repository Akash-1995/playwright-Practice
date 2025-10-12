const {expect,test}=require('@playwright/test')
test('i am not starting over,i am starting from where i pause',async ({browser})=>{
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://www.google.com/")
let title=await page.title();
console.log(title);
await context.close();

});