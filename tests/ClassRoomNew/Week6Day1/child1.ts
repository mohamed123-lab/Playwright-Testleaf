// ===============================
// CHILD CLASS
// File: Chrome.ts
// ===============================
//
// import brings the Browser class
// from another file.
//
// extends means Chrome inherits
// the properties and methods of Browser.

import { Browser } from "./parent";


class Chrome extends Browser {

    // This method belongs specifically to Chrome.
    // It is NOT inherited from Browser.
    launchBrowser() {
        console.log("Browser is Chrome");
    }
}


// Create an object of Chrome
const cr = new Chrome();


// Inherited from Browser
cr.browsertype();

// Chrome's own method
cr.launchBrowser();

// Inherited from Browser
cr.browserversion();