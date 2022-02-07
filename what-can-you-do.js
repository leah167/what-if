const prompt = require('prompt-sync')();

let num = Number (prompt('Enter a number: '));

if (num < 16) {
    console.log("You can't drive.")
} else if (num === 16) {
    console.log("You can drive but not vote.")
} else if (num === 17) {
    console.log("You can drive but not vote.")   
} else if (num === 18) {
    console.log("You can vote but not rent a car.")
} else if (num === 19) {
    console.log("You can vote but not rent a car.")    
} else if (num === 20) {
    console.log("You can vote but not rent a car.")   
} else if (num === 21) {
    console.log("You can vote but not rent a car.")     
} else if (num === 22) {
    console.log("You can vote but not rent a car.")    
} else if (num === 23) {
    console.log("You can vote but not rent a car.")    
} else if (num === 24) {
    console.log("You can vote but not rent a car.")    
} else {
    console.log("You can do pretty much anything.")
}