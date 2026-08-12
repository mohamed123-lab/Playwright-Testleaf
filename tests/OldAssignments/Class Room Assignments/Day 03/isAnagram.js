// ========================================
// CHECK IF TWO STRINGS ARE ANAGRAMS
// ========================================
//
// An anagram contains the same letters as another
// word/phrase, but the letters can be in a different order.
//
// Examples:
// "listen" → "silent"
// "conversation" → "voices rant on"
//
// Steps:
// 1. Convert both strings to lowercase.
// 2. Split them into individual characters.
// 3. Sort the characters.
// 4. Join them back into strings.
// 5. Compare the sorted strings.
//
// If both sorted strings are equal,
// they are anagrams.
// ========================================

function isAnagram(string1, string2) {

    // Convert the first string to lowercase,
    // split into characters, sort, and join back.
    string1 = string1.toLowerCase().split("").sort().join("");

    // Do the same for the second string.
    string2 = string2.toLowerCase().split("").sort().join("");

    // Return true if both processed strings are equal.
    return string1 === string2;
}


// ========================================
// TEST CASES
// ========================================
//
// Each array contains two strings to compare.
// ========================================

let testCases = [
    ["listen", "silent"],
    ["Listen", "Silent"],
    ["conversation", "voices rant on"],
    ["hello", "world"]
];


// ========================================
// LOOP THROUGH ALL TEST CASES
// ========================================
//
// i represents the current array index.
// testCases.length gives the total number of test cases.
// ========================================

for (let i = 0; i < testCases.length; i++) {

    // Extract the two strings from the current test case.
    let [string1, string2] = testCases[i];

    // Print the current test case.
    console.log(testCases[i]);

    // Check whether the two strings are anagrams.
    if (isAnagram(string1, string2)) {
        console.log(`${string1} and ${string2} are anagrams.`);
    } else {
        console.log(`${string1} and ${string2} are not anagrams.`);
    }
}