// ========================================
// CHECK IF A NUMBER IS ODD OR EVEN
// ========================================
//
// This program demonstrates:
// - Variables
// - Function parameters
// - Calling a function
// - return values
// - if / else
// - Modulus operator (%)
//
// % gives the remainder after division.
//
// Even number → remainder is 0 when divided by 2
// Odd number  → remainder is not 0 when divided by 2
// ========================================


// Numbers to check
let nbr1 = 10, nbr2 = 3;


// Call isOddOrEven() for each number
// and store the returned result.
let result1 = isOddOrEven(nbr1), result2 = isOddOrEven(nbr2);


// ========================================
// CHECK ODD OR EVEN
// ========================================
//
// If the number divided by 2 has a remainder of 0,
// it is EVEN.
//
// Otherwise, it is ODD.
// ========================================

function isOddOrEven(nbr) {

    if (nbr % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


// Print the number and the returned result
console.log("Number " + nbr1 + " is " + result1);
console.log("Number " + nbr2 + " is " + result2);