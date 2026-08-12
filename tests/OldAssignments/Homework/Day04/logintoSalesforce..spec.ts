// =================================================
// PLAYWRIGHT: SALESFORCE LOGIN
// =================================================
//
// This program demonstrates:
// - Creating a Playwright test
// - Launching Chromium
// - Creating a browser context
// - Creating a page
// - Navigating to a URL
// - Locating elements using CSS selectors
// - Entering username and password
// - Clicking a button
// - Getting the page title and URL
// =================================================

import { test, chromium } from "@playwright/test";


test("Login Salesforce", async () => {

    // Launch Chromium browser.
    // headless: false → browser window will be visible.
    const browser = await chromium.launch({ headless: false });

    // Create a new browser context.
    // A context provides an isolated browser session.
    const context = await browser.newContext();

    // Create a new page/tab inside the browser context.
    const page = await context.newPage();


    // Navigate to the Salesforce login page.
    await page.goto("https://login.salesforce.com/");


    // Locate the username field using CSS ID selector
    // and enter the username.
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");


    // Locate the password field and enter the password.
    await page.locator("#password").fill("TestLeaf@2025");


    // Locate the Login button and click it.
    await page.locator("#Login").click();


    // Wait for 10 seconds.
    // Note: Prefer Playwright's automatic waiting/assertions
    // instead of fixed waits in real projects.
    await page.waitForTimeout(10000);


    // Get the current page title.
    const pageTitle = await page.title();

    // Get the current page URL.
    const currentUrl = await page.url();


    // Print the page title.
    console.log(`Page Title is ${pageTitle}`);

    // Print the current Salesforce URL.
    console.log(`Salesforce Current URL is ${currentUrl}`);
});