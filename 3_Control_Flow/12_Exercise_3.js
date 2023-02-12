// Exercise 12 - Fizz Buzz

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 & 5 => FizzBuzz
// Not Divisible by both 3 & 5 => input
// Not  a number => 'Not a Number

const output = fizzBuzz(input); // replace input with the value i.e 5, 10, 15, true, false, 'Joe'
console.log(output);

function fizzBuzz(input){
    if (typeof input !== 'number')
        return Nan // <== this is cleaner
        // return 'Not a Number'; other way of doing it
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 == 0)
        return 'Fizz';
        
    if (input % 5 == 0)
        return 'Buzz';

}

