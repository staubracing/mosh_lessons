
// Speedlimit = 70
// 5 -> 1 point
// math.floor(1.3)
// 12 points -> suspended 

// checkSpeed (80);

// function checkSpeed(speed) {
//     const Speedlimit = 70;
//     const kmPerPoint = 5;

//     if (speed < Speedlimit + kmPerPoint)
//     console.log ('Ok');
//     else {
//         const points = Math.floor((speed - Speedlimit) / kmPerPoint);
//         if (points >= 12)
//         console.log('License suspended')
//         else
//         console.log('Points', points);
//     }
// }

checkSpeed (76);
function checkSpeed(speed) {
    const Speedlimit = 70;
    const kmPerPoint = 5;

    if (speed < Speedlimit + kmPerPoint){
    console.log ('Ok');
    return;
    }

    const points = Math.floor((speed - Speedlimit) / kmPerPoint);
    if (points >= 12)
    console.log('License suspended')
    else
    console.log('Points', points);
}


