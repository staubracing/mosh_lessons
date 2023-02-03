// Hour
// If hour is between 6am and 12pm: Good Morning!
// It it is between 12pm and 6pm: Good Aftenoon!
// Otherwise: Good Evening!

/*
if(condition) {
    statement
}
else if (anotherCondtion) { //Note the curly brace location.  same line as the if, better coding standard
    statement
}
else if (yetAnothercondition)
    staement

else
    statement
*/


let hour = 10;

if(hour >= 6 && hour <12) {
    console.log('Good Morning!');
}
else if (hour >= 12 && hour > 6) {
    console.log('Good Afternoon!');
}
else
console.log('Good Evening!');

// Below is the exact same code just cleaner . No curly braces {}

if(hour >= 6 && hour <12) 
    console.log('Good Morning!');
else if (hour >= 12 && hour > 6) 
    console.log('Good Afternoon!');
else
    console.log('Good Evening!');
