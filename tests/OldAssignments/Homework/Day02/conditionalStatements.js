// ========================================
// CONDITIONAL STATEMENTS & SWITCH CASE
// ========================================
//
// This program demonstrates two ways to make
// decisions based on a value:
//
// 1. if / else if / else
// 2. switch / case
// ========================================


// ========================================
// IF / ELSE IF / ELSE
// ========================================
//
// launchBrowser() receives a browser name
// and decides which browser to launch.
//
// if       → checks the first condition
// else if  → checks another condition
// else     → runs when none of the conditions match
// ========================================

function launchBrowser(browserName) {

    if (browserName == "chrome")
        console.log("Chrome browser is getting launched");

    else if (browserName == "firefox")
        console.log("Firefox is getting launched");

    else
        console.log("Edge is getting launched");
}


// ========================================
// SWITCH / CASE
// ========================================
//
// runTests() receives a test type and chooses
// the corresponding test to run.
//
// switch → checks the value
// case   → defines the possible values
// break  → stops the switch after a matching case
// default → runs when no case matches
// ========================================

function runTests(testType) {

    switch (testType) {

        case "smoke":
            console.log("Running Smoke Test");
            break;

        case "sanity":
            console.log("Running Sanity Test");
            break;

        case "regression":
            console.log("Running Regression Test");
            break;

        default:
            // If the test type doesn't match any case,
            // run Smoke Test by default.
            console.log("Running Smoke Test");
    }
}


// ========================================
// FUNCTION CALLS
// ========================================

// Test different browser names
launchBrowser("chrome");
launchBrowser("edge");
launchBrowser("firefox");

// Test different test types
runTests("smoke");
runTests("sanity");
runTests("regression");

// "default" does not match any case,
// so the default block executes.
runTests("default");