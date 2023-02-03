
// Logical 'AND' (&&)
// Returns TRUE if both operands are true

// console.log(true && true); // Result: TRUE

// console.log(false && true); // Result: FALSE

// console.log(false && false); // Result: FALSE


// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;

// console.log (eligibleForLoan); // Reult is TRUE


// Logical 'OR' (||)

// Returns TRUE if one of the operands is TRUE 
//same example but replace the (&&) with (||)

let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;

console.log ('Eligible', eligibleForLoan); // Result is true 

// Logical 'NOT' (!)

let applicationRefused = !eligibleForLoan;  //this creates the 'NOT' varible.  It's the opisite of the elifible varible

console.log('Application Refused', applicationRefused);





