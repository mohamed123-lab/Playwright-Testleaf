// ========================================
// VARIABLES, VALUES & DATA TYPES
// ========================================
//
// TypeScript can automatically determine the type
// of a variable based on the value assigned to it.
//
// typeof is used to find the data type of a value.
//
// Examples:
// "Mohamed" → string
// true      → boolean
// undefined → undefined
// ========================================


// Assign values to variables

let firstName = "Mohamed";       // string
let companyName = "NoCompany";   // string
let mobileNumber = "154236515";  // string (because it is inside quotes)
let isAutomation = true;         // boolean

// No value is assigned, so the value is undefined.
// TypeScript infers this as undefined.
let hasPlaywright;


// ========================================
// PRINT VALUE AND TYPE
// ========================================
//
// typeof variable
// → returns the type of the value stored
//   in the variable.
//
// \t
// → adds a tab space in the console.
// ========================================

console.log("firstName is " + firstName + "\t\t\tType of firstName is " + typeof firstName);

console.log("companyName is " + companyName + "\t\tType of companyName is " + typeof companyName);

console.log("mobileNumber is " + mobileNumber + "\t\tType of mobileNumber is " + typeof mobileNumber);

console.log("isAutomation is " + isAutomation + "\t\t\tType of isAutomation is " + typeof isAutomation);

console.log("hasPlaywright is " + hasPlaywright + "\t\tType of hasPlaywright is " + typeof hasPlaywright);