// ========================================
// PLAYWRIGHT - HANDLING DIALOGS & IFRAMES
// ========================================
//
// dialog.accept()  → clicks OK
// dialog.dismiss() → clicks Cancel
// frameLocator()   → interacts with elements inside an iframe

import { test, expect } from "@playwright/test";


// Accept the JavaScript confirmation dialog
test("Accept the Dialog message", async ({ page }) => {

    // Open webpage
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    // Locate the iframe
    const frame = page.frameLocator("#iframeResult");

    // Listen for dialog and click OK
    page.on("dialog", async (alert) => await alert.accept());

    // Click Try it button inside iframe
    await frame.locator("//button[text()='Try it']").click();

    // Capture and verify confirmation message
    let confirmationText = await frame.locator("#demo").innerText();
    console.log(confirmationText);
    expect(confirmationText).toBe("You pressed OK!");
});


// Dismiss the JavaScript confirmation dialog
test("Dismiss the Dialog message", async ({ page }) => {

    // Open webpage
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    // Locate the iframe
    const frame = page.frameLocator("#iframeResult");

    // Listen for dialog and click Cancel
    page.on("dialog", async (alert) => await alert.dismiss());

    // Click Try it button inside iframe
    await frame.locator("//button[text()='Try it']").click();

    // Capture and verify confirmation message
    let confirmationText = await frame.locator("#demo").innerText();
    console.log(confirmationText);
    expect(confirmationText).toBe("You pressed Cancel!");
});