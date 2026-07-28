let nbr1 = 10, nbr2 = 3
let result1 = isOddOrEven(nbr1), result2 =  isOddOrEven(nbr2)

function isOddOrEven(nbr) {
    if (nbr % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

console.log("Number " + nbr1 + " is " + result1)
console.log("Number " + nbr2 + " is " + result2)