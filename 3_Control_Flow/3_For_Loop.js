// For Loop - 

// for (intialExpression; condition; incrementExpression);

for (let i = 0; i < 5; i++) {
    console.log ('Hello World', i);    // Adding i just shows the increment of 'i' to the console
}

// i = 0 and the condition is i < 5 so the for loop will increment (i++) until i is no longer < 5.

// Hello World 0 This is the intial iteration '0'
// Hello World 1 This is the second iteration '1'  "0 is the first"
// Hello World 2 so on...
// Hello World 3
// Hello World 4 5th iteration and the for loop is complete and solved.  i = 5 now

// Odd Numbers up too 5
for (let i = 0; i <= 5; i++) {
if (i % 2 !== 0 )
    console.log (i); 
}
//odd numbers down to 1
for (let i = 5; i >= 1; i--) {
if (i % 2 !== 0 )
    console.log (i); 
}