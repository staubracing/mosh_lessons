// Stars
//Nested loop


showStars(56);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) { // row <= rows
        let pattern = ''; // let pattern = '';
        for (let i = 0; i < row; i++) // i < row
            pattern += '*'; //
        console.log(pattern);//

    }
}