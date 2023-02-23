// Prime Numbers

// Write a function that prints all prime numbers between 2 and n

showPrimes(20);

// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++) {

//     let isPrime = true;
//     for (let factor = 2; factor < number; factor++) {
//       if (number % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) console.log(number);
//     }   
//   }

// Refactor the code above to use a function called isPrime 
// that you define. The function should return true if the
// argument is a prime number or false otherwise.

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0)
      return false;
  return true;
}
