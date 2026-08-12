// accessModifiers.ts

// ===============================
// ACCESS MODIFIERS
// ===============================
//
// public    → accessible from anywhere
// private   → accessible ONLY inside the same class
// protected → accessible inside the same class
//             AND inside child/subclasses
//
// If no access modifier is specified,
// TypeScript treats the member as PUBLIC by default.

class Calculation {

    // PUBLIC
    // Can be accessed from outside the class.
    public add(a: number, b: number) {

        console.log("This is add public method");
        console.log("Addition:", a + b);

        return a + b;
    }


    // PRIVATE
    // Can ONLY be accessed inside Calculation.
    // Cannot be accessed directly using the object.
    private sub(c: number, d: number) {

        console.log("This is sub private method");
        console.log("Subtraction:", c - d);

        return c - d;
    }


    // PROTECTED
    // Can be accessed inside Calculation
    // AND inside classes that extend Calculation.
    //
    // Cannot be accessed directly using the object
    // from outside the class.
    protected mul(e: number, f: number) {

        console.log("This is mul protected method");
        console.log("Multiplication:", e * f);

        return e * f;
    }


    // NO ACCESS MODIFIER
    // By default, this is PUBLIC.
    printDetails() {

        // Because we are inside Calculation,
        // we can access:
        // public add()
        // private sub()
        // protected mul()

        console.log(
            `Calculated values are: ${this.add(2, 4)}, ${this.sub(2, 4)}, ${this.mul(5, 6)}`
        );
    }


    public readdata() {

        // We are still INSIDE the Calculation class,
        // so we can access private and protected methods.

        this.sub(2, 4);
        this.mul(2, 5);
    }
}


// Create an object
const calc = new Calculation();


// PUBLIC → allowed
calc.add(2, 4);

// PUBLIC method → allowed
calc.readdata();

// PUBLIC method → allowed
calc.printDetails();


// These would NOT be allowed:
//
// calc.sub(2, 4);
// ❌ sub() is private
//
// calc.mul(2, 5);
// ❌ mul() is protected