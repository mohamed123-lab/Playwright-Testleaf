function launchBrowser(browserName)
{
    if (browserName == 'chrome')
    console.log("chrome browser is getting launched")
    else if (browserName == 'firefox')
    console.log("firefox is getting launched")
    else 
    console.log("Edge is getting launched")
}
function runTests(testType)
{
    switch(testType)
    {
    case "smoke":
    console.log("Running Smoke Test")
    break
    case  "sanity":
    console.log('Running sanity Test')
    break
    case "regression":
    console.log('Running Regression Test')
    break
    default:
    console.log("Running Smoke Test")
    }

}

launchBrowser("chrome")
launchBrowser('edge')
launchBrowser('firefox')
runTests("smoke")
runTests("sanity")
runTests("regression")
runTests("default")