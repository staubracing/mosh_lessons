// contructor function is a function that is used to create objects

function Circle (radius) { // Pascal Notation first letter of the function is capital
    this.radius = radius; // 'this' is a reference to the object that is executing this code
    this.draw = function() { // this is a method
        console.log('draw');
    }
}

const circle = new Circle(1); // 'new' is an operator that creates an empty object and then calls the constructor function
const x = {}; // this is the same as 'new Object()'

