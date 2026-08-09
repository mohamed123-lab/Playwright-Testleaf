import {test,expect, chromium} from '@playwright/test'

test ('Login using CSS Selector', async ({}) => {
    const browser = await chromium.launch({
        channel: 'msedge',
        headless: false
    })

    const page = await browser.newPage();

//Navigate to the URL
await page.goto('https://login.salesforce.com/?locale=in')
//Enter username
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
// Enter Password
await page.locator('#password').fill('TestLeaf@2025')
// click Login button
await page.locator('#Login').click()
// check if the page has the Text Home
await expect(page.locator('text=Home')).toBeVisible()
await page.waitForTimeout(5000)
    
}

)

test ('Login using Xpath', async ({page}) => {
//Navigate to the URL
await page.goto('https://login.salesforce.com/?locale=in')
//Enter username
await page.locator("//input[@id='username']").fill('dilipkumar.rajendran@testleaf.com')
// Enter Password
await page.locator("//input[@id='password']").fill('TestLeaf@2025')
// click Login button
await page.locator("//input[@id='Login']").click()
// check if the page has the Text Home
await expect(page.getByTitle('Home')).toBeVisible()
}
)