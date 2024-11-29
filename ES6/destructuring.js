/*
    Destructuring from array
     - use this for assign value from array in single property
*/


const array = [2, 4, 6, 7, 8, 9];
const [a, b, c, , ...d] = array;
// console.log(a, b, c, d)



/*
    Destructuring from Object
*/

const person = {
    name: "Anas",
    age: 11,
    sex: "Male",
    class: 'play'
}

const { name, age, ...rest } = person;
// console.log(name, age, rest)


/*
    Destructuring from function
*/

function getData() {
    const area = "Mirpur"
    const city = "Dhaka"
    return { area, city }
}
console.log(getData())

const { city, area } = getData();
console.log(area, city)