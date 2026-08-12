// ========================================
// CHECK IF A NUMBER IS POSITIVE, NEGATIVE,
// OR NEUTRAL
// ========================================
//
// This program demonstrates:
// - Function parameters
// - Function calls
// - return values
// - if / else if / else
// - Comparison operators
//
// Conditions:
// number > 0 → Positive
// number < 0 → Negative
// number === 0 → Neutral
// ========================================


// Numbers to check
let number1 = 10, number2 = -10, number3 = 0;


// Call checkthenumbertype() for each number
// and store the returned result.
let result1 = checkthenumbertype(number1),
    result2 = checkthenumbertype(number2),
    result3 = checkthenumbertype(number3);


// ========================================
// CHECK NUMBER TYPE
// ========================================
//
// if       → checks whether the number is greater than 0
// else if  → checks whether the number is less than 0
// else     → runs when neither condition is true,
//            which means the number is 0.
// ========================================

function checkthenumbertype(number) {

    if (number > 0) {
        return "Positive Number";

    } else if (number < 0) {
        return "Negative Number";

    } else {
        return "Neutral";
    }
}


// Print the number and its classification
console.log("Number " + number1 + " is " + result1);
console.log("Number " + number2 + " is " + result2);
console.log("Number " + number3 + " is " + result3);