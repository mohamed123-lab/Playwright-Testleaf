function isAnagram(string1, string2) {
    // Convert to lowercase, remove spaces, split into characters,
    // sort them, and join back into strings
    string1 = string1.toUpperCase().split("").sort().join("");
    string2 = string2.toUpperCase().split("").sort().join("");

   return string1 === string2;
}

let testCases = [
    ["listen", "silent"],
    ["Listen", "Silent"],
    ["conversation", "voices rant on"],
    ["hello", "world"]
];

for (let i = 0; i < testCases.length; i++) {
    let [string1, string2] = testCases[i];
    console.log(testCases[i])

    if (isAnagram(string1, string2)) {
        console.log(`${string1} and ${string2} are anagrams.`);
    } else {
       console.log(`${string1} and ${string2} are  not anagrams.`);
    }
}