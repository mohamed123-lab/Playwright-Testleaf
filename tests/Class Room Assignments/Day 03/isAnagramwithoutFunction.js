// Example 1
{
    let string1 = 'listen';
    let string2 = 'silent';
    
       console.log("String 1 is: " + string1);
       console.log("String 2 is: " + string2);
    string1 = string1.toLowerCase().split('').sort().join('');
    string2 = string2.toLowerCase().split('').sort().join('');

    console.log("Sorted String 1 is: " + string1);
    console.log("Sorted String 2 is: " + string2);

     if (string1 === string2)
        console.log("The strings are anagrams.");
    else
        console.log("The strings are not anagrams.");
}
console.log("----------------------------------------------------------------------------------------------------------")

// Example 2
{
    let string1 = 'Listen';
    let string2 = 'Silent';
        console.log("String 1 is: " + string1);
        console.log("String 2 is: " + string2);
    string1 = string1.toLowerCase().split('').sort().join('');
    string2 = string2.toLowerCase().split('').sort().join('');
    console.log("Sorted String 1 is: " + string1);
    console.log("Sorted String 2 is: " + string2);
    if (string1 === string2)
        console.log("The strings are anagrams.");
    else
        console.log("The strings are not anagrams.");
}
console.log("----------------------------------------------------------------------------------------------------------")

// Example 3
{
    let string1 = 'conversation';
    let string2 = 'voices rant on';
        console.log("String 1 is: " + string1);
        console.log("String 2 is: " + string2);

    string1 = string1.toLowerCase().replace(/\s/g, '').split('').sort().join('');

    string2 = string2.toLowerCase().replace(/\s/g, '').split('') .sort().join('');
       console.log("Sorted String 1 is: " + string1);
        console.log("Sorted String 2 is: " + string2);   

    if (string1 === string2)
        console.log("The strings are anagrams.");
    else
        console.log("The strings are not anagrams.");
}

    console.log("----------------------------------------------------------------------------------------------------------")

// Example 4
{
    let string1 = 'hello';
    let string2 = 'world';

        console.log("String 1 is: " + string1);
        console.log("String 2 is: " + string2);

    string1 = string1.toLowerCase().split('').sort().join('');
    string2 = string2.toLowerCase().split('').sort().join('');

        console.log("Sorted String 1 is: " + string1);
        console.log("Sorted String 2 is: " + string2);

    if (string1 === string2)
        console.log("The strings are anagrams.");
    else
        console.log("The strings are not anagrams.");
}
console.log("----------------------------------------------------------------------------------------------------------")