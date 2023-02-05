// Break and Continue:

let i = 0;
while (i <= 10) {

    // if (i === 5) break; // this breaks it 5 ( actually 4 because of the 0)

    if (i % 2 === 0) {
    i++;
    continue;
}
    console.log(i);
    i++;
}
