// ARRAY CHEATSHEET FOR TRAINING

// Example 1
// Array() - Creates a new array instance.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// Code:
let browsersUsingConstructor = new Array("Chrome", "Firefox", "Safari");
console.log("Before Array():", browsersUsingConstructor);
console.log("After Array():", browsersUsingConstructor);
console.log("================================================== END OF EXAMPLE 1 ==================================================");

// Example 2
// [] - Creates an array using literal notation.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// Code:
let browsers = ["Chrome", "Firefox", "Safari"];
console.log("Before []:", browsers);
console.log("After []:", browsers);
console.log("================================================== END OF EXAMPLE 2 ==================================================");

// Example 3
// push() - Adds elements to the end of an array.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari', 'Edge' ]
// Code:
let pushExample = ["Chrome", "Firefox", "Safari"];
console.log("Before push():", pushExample);
pushExample.push("Edge");
console.log("After push():", pushExample);
console.log("================================================== END OF EXAMPLE 3 ==================================================");

// Example 4
// unshift() - Adds elements to the beginning of an array.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// [ 'Opera', 'Chrome', 'Firefox', 'Safari' ]
// Code:
let unshiftExample = ["Chrome", "Firefox", "Safari"];
console.log("Before unshift():", unshiftExample);
unshiftExample.unshift("Opera");
console.log("After unshift():", unshiftExample);
console.log("================================================== END OF EXAMPLE 4 ==================================================");

// Example 5
// pop() - Removes the last element from an array.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// [ 'Chrome', 'Firefox' ]
// Removed Element Will Be:
// Safari
// Code:
let popExample = ["Chrome", "Firefox", "Safari"];
console.log("Before pop():", popExample);
let lastBrowser = popExample.pop();
console.log("After pop():", popExample);
console.log("Removed Element:", lastBrowser);
console.log("================================================== END OF EXAMPLE 5 ==================================================");

// Example 6
// shift() - Removes the first element from an array.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// [ 'Firefox', 'Safari' ]
// Removed Element Will Be:
// Chrome
// Code:
let shiftExample = ["Chrome", "Firefox", "Safari"];
console.log("Before shift():", shiftExample);
let firstBrowser = shiftExample.shift();
console.log("After shift():", shiftExample);
console.log("Removed Element:", firstBrowser);
console.log("================================================== END OF EXAMPLE 6 ==================================================");

// Example 7
// indexOf() - Finds the first index of the specified element.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// 1
// Code:
let indexOfExample = ["Chrome", "Firefox", "Safari"];
console.log("Before indexOf():", indexOfExample);
let index = indexOfExample.indexOf("Firefox");
console.log("After indexOf():", index);
console.log("================================================== END OF EXAMPLE 7 ==================================================");

// Example 8
// lastIndexOf() - Finds the last index of the specified element.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari', 'Chrome' ]
// After Output Will Be:
// 3
// Code:
let lastIndexOfExample = ["Chrome", "Firefox", "Safari", "Chrome"];
console.log("Before lastIndexOf():", lastIndexOfExample);
let lastIndex = lastIndexOfExample.lastIndexOf("Chrome");
console.log("After lastIndexOf():", lastIndex);
console.log("================================================== END OF EXAMPLE 8 ==================================================");

// Example 9
// find() - Finds the first element satisfying the provided function.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// Firefox
// Code:
let findExample = ["Chrome", "Firefox", "Safari"];
console.log("Before find():", findExample);
let found = findExample.find(browser => browser.startsWith("F"));
console.log("After find():", found);
console.log("================================================== END OF EXAMPLE 9 ==================================================");

// Example 10
// findIndex() - Finds the index of the first element satisfying the provided function.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// 1
// Code:
let findIndexExample = ["Chrome", "Firefox", "Safari"];
console.log("Before findIndex():", findIndexExample);
let foundIndex = findIndexExample.findIndex(browser => browser.startsWith("F"));
console.log("After findIndex():", foundIndex);
console.log("================================================== END OF EXAMPLE 10 ==================================================");

// Example 11
// forEach() - Executes a function for each array element.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// forEach item: Chrome
// forEach item: Firefox
// forEach item: Safari
// Code:
let forEachExample = ["Chrome", "Firefox", "Safari"];
console.log("Before forEach():", forEachExample);
forEachExample.forEach(browser => console.log("forEach item:", browser));
console.log("================================================== END OF EXAMPLE 11 ==================================================");

// Example 12
// map() - Creates a new array populated with the results of the function on every element.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// [ 6, 7, 6 ]
// Code:
let mapExample = ["Chrome", "Firefox", "Safari"];
console.log("Before map():", mapExample);
let lengths = mapExample.map(browser => browser.length);
console.log("After map():", lengths);
console.log("================================================== END OF EXAMPLE 12 ==================================================");

// Example 13
// every() - Checks if every element passes the test.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// true
// Code:
let everyExample = ["Chrome", "Firefox", "Safari"];
console.log("Before every():", everyExample);
let allLong = everyExample.every(browser => browser.length > 3);
console.log("After every():", allLong);
console.log("================================================== END OF EXAMPLE 13 ==================================================");

// Example 14
// some() - Checks if at least one element passes the test.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// true
// Code:
let someExample = ["Chrome", "Firefox", "Safari"];
console.log("Before some():", someExample);
let anyLong = someExample.some(browser => browser.length > 6);
console.log("After some():", anyLong);
console.log("================================================== END OF EXAMPLE 14 ==================================================");

// Example 15
// filter() - Creates a new array with elements that pass the test.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// Code:
let filterExample = ["Chrome", "Firefox", "Safari"];
console.log("Before filter():", filterExample);
let longNames = filterExample.filter(browser => browser.length > 5);
console.log("After filter():", longNames);
console.log("================================================== END OF EXAMPLE 15 ==================================================");

// Example 16
// reduce() - Reduces the array to a single value.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// 19
// Code:
let reduceExample = ["Chrome", "Firefox", "Safari"];
console.log("Before reduce():", reduceExample);
let totalLength = reduceExample.reduce((total, browser) => total + browser.length, 0);
console.log("After reduce():", totalLength);
console.log("================================================== END OF EXAMPLE 16 ==================================================");

// Example 17
// reduceRight() - Applies reduce() but from right to left.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// 19
// Code:
let reduceRightExample = ["Chrome", "Firefox", "Safari"];
console.log("Before reduceRight():", reduceRightExample);
let totalLengthRight = reduceRightExample.reduceRight((total, browser) => total + browser.length, 0);
console.log("After reduceRight():", totalLengthRight);
console.log("================================================== END OF EXAMPLE 17 ==================================================");

// Example 18
// flat() - Flattens nested arrays.
// Before Output Will Be:
// [ 1, [ 2, 3 ], [ 4, 5 ] ]
// After Output Will Be:
// [ 1, 2, 3, 4, 5 ]
// Code:
let flatExample = [1, [2, 3], [4, 5]];
console.log("Before flat():", flatExample);
let flattened = flatExample.flat();
console.log("After flat():", flattened);
console.log("================================================== END OF EXAMPLE 18 ==================================================");

// Example 19
// flatMap() - First maps each element using a mapping function, then flattens the result.
// Before Output Will Be:
// [ 1, 2, 3 ]
// After Output Will Be:
// [ 1, 2, 2, 4, 3, 6 ]
// Code:
let flatMapExample = [1, 2, 3];
console.log("Before flatMap():", flatMapExample);
let nestedOperations = flatMapExample.flatMap(x => [x, x * 2]);
console.log("After flatMap():", nestedOperations);
console.log("================================================== END OF EXAMPLE 19 ==================================================");

// Example 20
// sort() - Sorts the array.
// Before Output Will Be:
// [ 10, 2, 15, 1 ]
// After Output Will Be:
// [ 1, 2, 10, 15 ]
// Code:
let sortExample = [10, 2, 15, 1];
console.log("Before sort():", sortExample);
sortExample.sort((a, b) => a - b);
console.log("After sort():", sortExample);
console.log("================================================== END OF EXAMPLE 20 ==================================================");

// Example 21
// reverse() - Reverses the order of the array.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// [ 'Safari', 'Firefox', 'Chrome' ]
// Code:
let reverseExample = ["Chrome", "Firefox", "Safari"];
console.log("Before reverse():", reverseExample);
reverseExample.reverse();
console.log("After reverse():", reverseExample);
console.log("================================================== END OF EXAMPLE 21 ==================================================");

// Example 22
// slice() - Extracts a section of an array.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari', 'Edge' ]
// After Output Will Be:
// [ 'Firefox', 'Safari' ]
// Code:
let sliceExample = ["Chrome", "Firefox", "Safari", "Edge"];
console.log("Before slice():", sliceExample);
let newBrowsers = sliceExample.slice(1, 3);
console.log("After slice():", newBrowsers);
console.log("================================================== END OF EXAMPLE 22 ==================================================");

// Example 23
// join() - Joins all elements into a string.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// Chrome, Firefox, Safari
// Code:
let joinExample = ["Chrome", "Firefox", "Safari"];
console.log("Before join():", joinExample);
let browserString = joinExample.join(", ");
console.log("After join():", browserString);
console.log("================================================== END OF EXAMPLE 23 ==================================================");

// Example 24
// concat() - Merges two or more arrays.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari', 'Vivaldi', 'Brave' ]
// Code:
let concatExample = ["Chrome", "Firefox", "Safari"];
console.log("Before concat():", concatExample);
let combined = concatExample.concat(["Vivaldi", "Brave"]);
console.log("After concat():", combined);
console.log("================================================== END OF EXAMPLE 24 ==================================================");

// Example 25
// includes() - Determines whether the array contains a certain value.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// true
// Code:
let includesExample = ["Chrome", "Firefox", "Safari"];
console.log("Before includes():", includesExample);
let hasChrome = includesExample.includes("Chrome");
console.log("After includes():", hasChrome);
console.log("================================================== END OF EXAMPLE 25 ==================================================");

// Example 26
// fill() - Fills all the elements with a static value.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari' ]
// After Output Will Be:
// [ 'NewBrowser', 'NewBrowser', 'NewBrowser' ]
// Code:
let fillExample = ["Chrome", "Firefox", "Safari"];
console.log("Before fill():", fillExample);
fillExample.fill("NewBrowser");
console.log("After fill():", fillExample);
console.log("================================================== END OF EXAMPLE 26 ==================================================");

// Example 27
// copyWithin() - Copies part of an array to another location in the same array.
// Before Output Will Be:
// [ 'Chrome', 'Firefox', 'Safari', 'Edge' ]
// After Output Will Be:
// [ 'Chrome', 'Firefox', 'Chrome', 'Firefox' ]
// Code:
let copyWithinExample = ["Chrome", "Firefox", "Safari", "Edge"];
console.log("Before copyWithin():", copyWithinExample);
copyWithinExample.copyWithin(2, 0);
console.log("After copyWithin():", copyWithinExample);
console.log("================================================== END OF EXAMPLE 27 ==================================================");