import { test, expect } from "@playwright/test";

test("Accept the Dialog message", async ({ page }) => {
    //Opening the Webpage
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    //Locating the Frame
    const frame = page.frameLocator("#iframeResult");
    //Call Event Listener and accept it
    page.on("dialog", async (alert) => {
        await alert.accept();
    });
    //Clicking on the Button
    await frame.locator("//button[text()='Try it']").click();
    //Capturing the ConfirmationText
    let confirmationText = await frame.locator("#demo").innerText();
    console.log(confirmationText);
    expect(confirmationText).toBe("You pressed OK!");

});

test("Dismiss the Dialog message", async ({ page }) => {
    //Opening the Webpage
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    //Locating the Frame
    
    const frame = page.frameLocator("#iframeResult");
      //Call Event Listener and Dismiss it
      page.on("dialog", async (alert) => {
        await alert.dismiss();
    });
    //Clicking on the Button
    await frame.locator("//button[text()='Try it']").click();
    //Capturing the ConfirmationText
    let confirmationText = await frame.locator("#demo").innerText();
    console.log(confirmationText);
    expect(confirmationText).toBe("You pressed Cancel!");

});