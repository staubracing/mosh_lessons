// Exercise 6 Count Truthy
// write a function called countTruthy that takes an array of values and returns the number of truthy values in the array
// truthy values are values that resolve to true in a boolean context
// ex: 1, true, 'hello', 34, -5, 'false' are all truthy values
// ex: 0, false, '', null, undefined, NaN are all falsy values
// ex: countTruthy([0, null, undefined, '', 2, 3]) // 2


const array = [1, 2, 3, 0, null, '', undefined];

console.log(countTruthy(array))

function countTruthy (array) {
 let count = 0;
 for (let value of array)
    if (value)
        count++
 return count;
}