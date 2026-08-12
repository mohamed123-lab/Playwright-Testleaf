// ========================================
// FUNCTIONS - DIFFERENT TYPES
// ========================================
//
// This program demonstrates four types of functions:
//
// 1. Function Declaration
// 2. Arrow Function
// 3. Anonymous Function
// 4. Callback Function
// ========================================


// ========================================
// TASK 1: FUNCTION DECLARATION
// ========================================
//
// A function declaration uses the "function" keyword
// followed by a function name.
//
// userProfile() accepts "name" as a parameter.
// ========================================

let name = "MohamedR";

function userProfile(name) {
    console.log("User name is: " + name);
}

// Call the function when needed:
// userProfile(name);


// ========================================
// TASK 2: ARROW FUNCTION
// ========================================
//
// An arrow function is another way to write a function.
//
// Syntax:
// const functionName = (parameter) => {
//     return value;
// };
//
// This function takes a number and returns
// its value multiplied by 10.
// ========================================

let double = (number) => {
    return number * 10;
};

// Example:
// console.log(double(5));


// ========================================
// TASK 3: ANONYMOUS FUNCTION
// ========================================
//
// An anonymous function is a function without a name.
//
// Here, the anonymous function is passed directly
// to setTimeout().
//
// setTimeout() executes the function after
// the specified delay.
//
// 2000 milliseconds = 2 seconds.
// ========================================

setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);


// ========================================
// TASK 4: CALLBACK FUNCTION
// ========================================
//
// A callback is a function passed as an argument
// to another function.
//
// getUserData() receives a callback function.
//
// After 3 seconds, simulated user data is created
// and passed to the callback.
// ========================================

function getUserData(callback) {

    // Simulate fetching data from a server.
    // 3000 milliseconds = 3 seconds.
    setTimeout(function () {

        let user = {
            username: "Mohamed",
            age: 20
        };

        // Call the callback and pass the user object.
        callback(user);

    }, 3000);
}


// Call getUserData() and provide an anonymous
// callback function.
//
// The "user" parameter receives the object
// passed by callback(user).

getUserData(function (user) {
    console.log("User name is: " + user.username);
    console.log("User age is: " + user.age);
});