// Create an abstract class
// fill() -> implemented method
// clear() -> implemented method
// textbox -> abstract property; child class MUST implement it
// locator() -> abstract/unimplemented method
// frame() -> abstract/unimplemented method

abstract class class1 {

    // Abstract property:
    // Any concrete child class must provide an instance property called textbox.
    abstract textbox: string;

    // Implemented methods
    fill() {
        console.log("Filling the Text");
    }

    clear() {
        console.log("Clearing the Text");
    }

    // Abstract methods:
    // Child class MUST provide the implementation.
    abstract locator(): void;
    abstract frame(): void;
}


class class2 extends class1 {

    // Static property:
    // Belongs to the CLASS itself, not to individual objects.
    // Access using: class2.textbox
    static textbox: string =
        "This value belongs to the class because it uses the static keyword.";

    // Instance property:
    // Required because class1 declared abstract textbox.
    // Belongs to each object created from class2.
    // Access using: capture.textbox
    textbox: string =
        "This value belongs to the object because it is an instance property.";

    // Implement abstract methods from class1
    locator(): void {
        console.log("Locate the Elements");
    }

    frame(): void {
        console.log("Capturing the frame");
    }
}


// Create an object from class2
let capture = new class2();

capture.clear();
capture.fill();
capture.frame();
capture.locator();


// Access the STATIC property through the class
console.log(class2.textbox);

// Access the INSTANCE property through the object
console.log(capture.textbox);