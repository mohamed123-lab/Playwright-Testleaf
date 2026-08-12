// ===============================
// METHOD OVERLOADING
// ===============================
//
// Method overloading allows us to call the SAME method
// in different ways.
//
// Here we want fill() to support:
//
// 1. fill(text)
// 2. fill(text, locator)
//
// TypeScript uses the overload signatures to define
// which ways the method can be called.
//
// There is still only ONE actual implementation.

class TextBox {

    // Overload signature 1
    // fill() can be called with only text
    fill(text: string): void;

    // Overload signature 2
    // fill() can be called with text + locator
    fill(text: string, locator: string): void;

    // ONE implementation handles both overloads
    //
    // locator is optional because the implementation
    // must be able to handle BOTH cases:
    //
    // fill("Test")
    //        ↓
    // locator = undefined
    //
    // fill("Test", "Leaf")
    //        ↓
    // locator = "Leaf"
    //
    fill(text: string, locator?: string) {

        // If locator was provided
        if (locator) {

            console.log(
                "The Text box contains",
                text,
                "and the locator is",
                locator
            );

        } else {

            // If locator was NOT provided
            console.log(
                "The Text box contains",
                text
            );
        }
    }
}


// Create an object
let br = new TextBox();


// Calls overload #1
br.fill("Test");

// Calls overload #2
br.fill("Test", "Leaf");