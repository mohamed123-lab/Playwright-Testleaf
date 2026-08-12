// ===============================
// CHILD CLASS
// File: Edge.ts
// ===============================
//
// Edge also inherits from Browser.

import { Browser } from "./parent";


class Edge extends Browser {

    // Edge-specific method
    launchBrowser() {
        console.log("Browser is Edge");
    }
}


// Create an object of Edge
const ed = new Edge();


// Inherited from Browser
ed.browsertype();

// Edge's own method
ed.launchBrowser();

// Inherited from Browser
ed.browserversion();