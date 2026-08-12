// ========================================
// CHECK IF TWO STRINGS ARE ANAGRAMS
// ========================================
//
// An anagram is a word or phrase that contains
// the same letters as another word or phrase,
// but in a different order.
//
// Examples:
// "listen"       → "silent"
// "conversation" → "voices rant on"
//
// The program:
// 1. Converts both strings to lowercase.
// 2. Splits each string into individual characters.
// 3. Sorts the characters alphabetically.
// 4. Joins the characters back into a string.
// 5. Compares the two resulting strings.
//
// If the sorted strings are identical,
// the original strings are anagrams.
// ========================================


function isAnagram(string1: string, string2: string): boolean {

    // Convert the first string to lowercase,
    // split it into individual characters,
    // sort the characters,
    // and join them back into a string.
    string1 = string1
        .toLowerCase()
        .split("")
        .sort()
        .join("");

    // Do the same for the second string.
    string2 = string2
        .toLowerCase()
        .split("")
        .sort()
        .join("");

    // Compare the processed strings.
    // If they are identical, return true.
    // Otherwise, return false.
    return string1 === string2;
}


// ========================================
// TEST CASES
// ========================================
//
// Each inner array contains two strings
// that we want to compare.
//
// testCases[0] → ["listen", "silent"]
// testCases[1] → ["Listen", "Silent"]
// etc.
// ========================================

let testCases: string[][] = [
    ["listen", "silent"],
    ["Listen", "Silent"],
    ["conversation", "voices rant on"],
    ["hello", "world"]
];


// ========================================
// LOOP THROUGH ALL TEST CASES
// ========================================
//
// i represents the index of the current
// test case.
//
// testCases.length gives the total number
// of test cases.
// ========================================

for (let i = 0; i < testCases.length; i++) {

    // Extract the two strings from the
    // current test case.
    //
    // Example:
    // ["listen", "silent"]
    //        ↓
    // string1 = "listen"
    // string2 = "silent"
    let [string1, string2] = testCases[i];


    // Print the current test case
    console.log(testCases[i]);


    // Call the isAnagram() function
    // to check whether the two strings
    // contain the same letters.
    if (isAnagram(string1, string2)) {

        console.log(
            `${string1} and ${string2} are anagrams.`
        );

    } else {

        console.log(
            `${string1} and ${string2} are not anagrams.`
        );
    }
}