// ========================================
// PRINT ODD NUMBERS FROM 1 TO 20
// ========================================
//
// This program loops through numbers from 1 to 20
// and prints only the numbers that are odd.
//
// The % (modulus) operator gives the remainder
// after division.
//
// For an odd number:
// number % 2 !== 0
//
// Example:
// 5 % 2 = 1  → odd
// 6 % 2 = 0  → even
// ========================================


// Print a heading before displaying the numbers
console.log("The odd numbers are:");


// Start from 1
// Continue until 20
// Increase i by 1 after each loop
for (let i = 1; i <= 20; i++) {

    // Check whether the number is odd
    // If the remainder after dividing by 2 is NOT 0,
    // the number is odd.
    if (i % 2 !== 0) {

        // Print the odd number
        console.log(i);
    }
}