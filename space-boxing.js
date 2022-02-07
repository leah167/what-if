const prompt = require('prompt-sync')();

let num1 = Number (prompt('Earth weight: '));
let num2 = Number (prompt('Enter planet number:'));

if (num2 === 1) {
    let result = (num1 * 0.78);
    console.log("Your weight on Venus is " + result +" pounds.")
} else if (num2 === 2) {
    let result = (num1 * 0.39);
    console.log("Your weight on Mars is " + result +" pounds.")
} else if (num2 === 3) {
    let result = (num1 * 2.65)
    console.log("Your weight on Jupiter is " + result +" pounds.")
} else if (num2 === 4) {
    let result = (num1 * 1.17)
    console.log("Your weight on Saturn is " + result +" pounds.")
} else if (num2 === 5) {
    let result = (num1 * 1.05)
    console.log("Your weight on Uranus is " + result +" pounds.")
} else if (num2 === 6) {
    let result = (num1 * 1.23)
    console.log("Your weight on Neptune is " + result +" pounds.")
}