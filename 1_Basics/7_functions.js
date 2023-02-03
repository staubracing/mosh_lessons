// Functions

// A function is a set statements that performs a task or calculates a value
// Functions can have inputs as a variable in the parenthesis ()

function greet(name, lastName){ //The variable in the () is only accesible in the fucntion 
    //this is the body of the function
console.log('Hello ' + name + ' ' + lastName);
}

greet('Joe', 'Naber');
greet('Mary');


//function greet(name){   //In this case 'name' is the parameter.
    
//console.log('Hello ' + name + ' you suck');
//}

//greet('Joe');  //('Joe') is the argument


//A parameter is what we have at the time of declaration "function greet(name)" and the argument "greet('Joe')"is the actual value of supply for that parameter 

//Hello Joe undefined  // This is when called out last name in the parameter but not in the argument
//Hello Mary undefined