// For in loop:

const person = {
    name: 'mosh',
    age: 30
};

for(let key in person)
// console.log(key, person[key]); // need the brackert to make it work
console.log(key, person.key); // This will only show the keys and show undefinded 


// //dot notation
// person.name

// //Bracket Notation
// person['name']

const colors = ['red', 'green', 'blue'];

for (let index in colors)
    // console.log(index);  // it will print out index 0,1,2
    console.log(index, colors[index]);  // it will print out index 0,1,2 and the colors = 0 red 1 green  2 blue

