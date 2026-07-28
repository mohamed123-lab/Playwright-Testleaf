let number1 = 10, number2 = -10, number3 = 0
let result1 = checkthenumbertype(number1), result2 = checkthenumbertype(number2), result3 = checkthenumbertype(number3)

function checkthenumbertype(number) {
    if (number > 0) {
        return "Positive Number"
    } else if (number < 0) {
        return "Negative Number"
    } else {
        return "Neutral"
    }
}

console.log("Number " + number1 + " is " + result1)
console.log("Number " + number2 + " is " + result2)
console.log("Number " + number3 + " is " + result3)