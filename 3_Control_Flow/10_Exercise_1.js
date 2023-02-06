// Exercise 1: Max of two numbers
// This exercise can show you how to simplifiy your code

// let number = max(5, 5);
// console.log(number);

// function max (a, b){
//     if(a > b) return a;
//     else return b;
// }


// Same function without return statement

// let number = max(5, 5);
// console.log(number);

// function max (a, b){
//     if(a > b) return a;
//     return b;  // << deleted the else
// }


// Using conditional operator >> (condition) ? a : b
let number = max(7, 5);
console.log(number);

function max (a, b){
    return (a > b) ? a : b;
}