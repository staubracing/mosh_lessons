// Exercise 5 even and off numbers

showNUmbers (10);

function showNUmbers (limit) {
    // for loop up to limit
    // irrette through and use moduluos
    // console.log the even and odd based on if else statements
    for (let i = 0; i <= limit; i++) { // i = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        if (i % 2 === 0) console.log(i, 'EVEN'); // 0, 2, 4, 6, 8, 10
        else console.log(i, 'ODD'); // 1, 3, 5, 7, 9
    }
}