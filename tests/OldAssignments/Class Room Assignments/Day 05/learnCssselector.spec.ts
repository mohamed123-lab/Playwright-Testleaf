// ========================================
// PLAYWRIGHT LOGIN TEST - CSS SELECTORS
// ========================================
//
// Demonstrates:
// - Launching Microsoft Edge
// - Creating a new page
// - Navigating to a URL
// - Using CSS selectors
// - Using fill() and click()
// - Verifying an element with expect()
// ========================================

import { test, expect, chromium } from "@playwright/test";


test("Login using CSS Selector", async ({}) => {

    // Launch Microsoft Edge in visible mode
    const browser = await chromium.launch({ channel: "msedge", headless: false });

    // Create a new browser page/tab
    const page = await browser.newPage();

    // Navigate to Salesforce login page
    await page.goto("https://login.salesforce.com/?locale=in");

    // CSS ID selector: #username → element with id="username"
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");

    // Enter password using CSS ID selector
    await page.locator("#password").fill("TestLeaf@2025");

    // Click Login button using CSS ID selector
    await page.locator("#Login").click();

    // Verify that Home is visible
    await expect(page.locator("text=Home")).toBeVisible();

    // Fixed wait of 5 seconds
    // Prefer Playwright's automatic waiting in real projects
    await page.waitForTimeout(5000);
});


// ========================================
// PLAYWRIGHT LOGIN TEST - XPATH
// ========================================
//
// Demonstrates the same login flow using XPath.
//
// CSS selector:
// #username
//
// XPath:
// //input[@id='username']
// ========================================

test("Login using XPath", async ({ page }) => {

    // Navigate to Salesforce login page
    await page.goto("https://login.salesforce.com/?locale=in");

    // XPath: find input element where id="username"
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com");

    // XPath: find input element where id="password"
    await page.locator("//input[@id='password']").fill("TestLeaf@2025");

    // XPath: find input element where id="Login" and click
    await page.locator("//input[@id='Login']").click();

    // getByTitle() → finds an element using its title attribute
    await expect(page.getByTitle("Home")).toBeVisible();
});