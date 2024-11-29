/*
    Rest perameter
     -Using rest Perameter, a function can be called with any number of arguments.
     - Rest parameter is prefixed with three dots(...)
*/


function sum(...numbers) {
    let sum = 0;
    for (let i of numbers) {
        sum = sum + i;
    }
    console.log(sum)
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9);