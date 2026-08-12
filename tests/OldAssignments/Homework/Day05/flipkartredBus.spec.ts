// =================================================
// PLAYWRIGHT: RUN TESTS IN EDGE AND FIREFOX
// =================================================
//
// This program demonstrates:
// - Launching different browsers
// - Launching Microsoft Edge using Chromium
// - Launching Firefox
// - Opening different websites in different browsers
// - Getting page title and URL
// - Closing browser instances
// =================================================

import { test, chromium, firefox } from "@playwright/test";


test("RedBus and Flipkart in Edge and Firefox Browsers", async () => {

    // ========================================
    // EDGE BROWSER
    // ========================================
    //
    // chromium.launch() is used for Chromium-based browsers.
    // channel: "msedge" tells Playwright to launch Microsoft Edge.
    // headless: false → browser window is visible.

    const edgeBrowser = await chromium.launch({ channel: "msedge", headless: false });
    const edgePage = await edgeBrowser.newPage();

    // Navigate to RedBus
    await edgePage.goto("https://www.redbus.in");

    // Get and print the page title and current URL
    console.log("RedBus Title :", await edgePage.title());
    console.log("RedBus URL   :", edgePage.url());


    // ========================================
    // FIREFOX BROWSER
    // ========================================
    //
    // firefox.launch() launches the Firefox browser.
    // headless: false → browser window is visible.

    const firefoxBrowser = await firefox.launch({ headless: false });
    const firefoxPage = await firefoxBrowser.newPage();

    // Navigate to Flipkart
    await firefoxPage.goto("https://www.flipkart.com");

    // Get and print the page title and current URL
    console.log("Flipkart Title :", await firefoxPage.title());
    console.log("Flipkart URL   :", firefoxPage.url());


    // Close both browser instances after the test
    await edgeBrowser.close();
    await firefoxBrowser.close();
});