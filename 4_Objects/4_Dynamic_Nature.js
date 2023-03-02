 // Dynamic Nature
 
    // This script is used to create a dynamic nature object.

const circle = {
    radius: 1
};

circle.color = 'yellow'; // this is a dynamic nature of an object
circle.draw = function() {} // this is a dynamic nature of an object

delete circle.color; // this is a dynamic nature of an object
delete circle.draw; // this is a dynamic nature of an object

console.log(circle); // this is a dynamic nature of an object

