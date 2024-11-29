/*
 Template-Literals
*/

let fname = "Mohammad"
let lname = "Anas"

const fullname = `My Name is ${fname} ${lname}`
console.log(fullname);


function sum() {
    let a = 10;
    let b = 30;
    return `${a}+${b}=${a + b}`// expresion
}
console.log(sum())



/*
    Object literals
*/

let firt_name='Mohammad'
let last_name='Anas'

const person={
    // firt_name:firt_name,
    // last_name:last_name,
    firt_name, //ES6 feature
    last_name //ES6 feature
}

console.log(person)

