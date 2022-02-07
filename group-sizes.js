const prompt = require('prompt-sync')();

let num = Number (prompt('Class size: '));

if (num % 3 === 0) {
    let result = (num / 3)
    console.log("There are " + result + " groups of three.")
} else if (num % 3 === 2) {
    let result = (num - 2)
    console.log("There are " + result / 3 +" groups of 3 and 1 group of 2.")
} else if (num % 3 === 1) {
    let result = (num - 4)
    console.log("There are " + result / 3 +" groups of three and 2 groups of 2.")
}
