import test from '@playwright/test'
test("Learn different locators", async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.getByRole('textbox', {name: 'Username'}).fill('democsr')
    await page.getByLabel('Password').fill('crmsfa')
    await page.getByRole("button").click()
    const welcomeMessage = await page.getByRole('heading').innerText()
    console.log(welcomeMessage)
    await page.getByRole('link', {name: 'CRM/SFA'}).click()
    await page.getByText('Leads', {exact: true}).click()
    await page.getByText('Create Lead').click()
    await page.getByAltText('opentaps CRM').click()
})