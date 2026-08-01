import test, {chromium} from "@playwright/test";
//Creating a Test
test("Login Salesforce" ,async()=>{
 //Launching chromiun in Headlness Mode   
   const browser = await chromium.launch({headless:false})
 // Open a new page within the browser context.
   const context=await browser.newContext()
   const page=await context.newPage()
//Load the Url
   await page.goto("https://login.salesforce.com/")
//Enter the Username
   await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
 //Enter the Password  
   await page.locator('#password').fill("TestLeaf@2025")
//Click Loogin
   await page.locator('#Login').click()
 //Wait for 10 Secs  
   await page.waitForTimeout(10000);
   const pageTitle = await page.title()
   const currentUrl = await page.url()
//Printing the Page title
   console.log(`Page Title is ${pageTitle}`)
//Printing the Salesforce Cyrrent
   console.log(`Salesforce Current Url is ${currentUrl}`)
})