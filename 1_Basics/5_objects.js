// Objects

//let name = 'chris'; //variables
//let age = '50'; //variables

// or put together to make a object 
//  let person = {} // object literal inside the curly braces

let person = {
    name: 'chris',
    age: 50
};


//dot notation (cleaner) used to access a property of the object
    person.name = 'john';

//bracket Notation also used to access a property of the object
//Braket notation can be used if there is another varible that isnt known at time of coding
let selection = 'name';

person[selection] = 'Joe';  

console.log(person.name);
