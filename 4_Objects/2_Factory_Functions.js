// Factory Functions
// Factory functions are functions that return objects
// Factory functions are used to create multiple objects

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}


const circle1 = createCircle(1);
    console.log(circle1);
const circle2 = createCircle(2);
    console.log(circle2);
    console.log(circle1.draw()); // draw

