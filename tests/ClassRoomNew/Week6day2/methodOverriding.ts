// ===============================
// METHOD OVERRIDING
// ===============================
//
// Method overriding means:
// A child class provides its own implementation
// of a method that already exists in the parent class.
//
// Parent class  → defines the method
// Child class   → overrides the method
//
// super.methodName()
// → calls the parent class version of the method.
//
// If we don't use super(), the parent method will NOT execute.


// Create a parent class
class Browser {

    // Parent class method
    browserVersion() {
        console.log("Edge Browser Version is 10.05");
    }
}


// Create a child class that extends Browser
class Chrome extends Browser {

    // Override the parent class method
    browserVersion() {

        // Call the parent class version first
        super.browserVersion();

        // Then execute the child class's own implementation
        console.log("Chrome Browser Version is 11.84");
    }
}


// Create an object of the child class
let ad = new Chrome();

// Calls Chrome's overridden browserVersion() method
ad.browserVersion();


