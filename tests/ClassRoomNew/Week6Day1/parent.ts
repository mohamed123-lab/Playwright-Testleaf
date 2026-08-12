// ===============================
// PARENT CLASS
// File: Parent.ts
// ===============================
//
// export allows another TypeScript file
// to import and use this class.
//
// Browser is the PARENT / BASE class.
//
// Child classes such as Chrome and Edge
// can inherit the methods from Browser.

export class Browser {

    public browsertype() {
        console.log("Browser Type");
    }

    public browserversion() {
        console.log("Browser Version");
    }
}


// Create an object of Browser directly
let br = new Browser();

br.browsertype();
br.browserversion();