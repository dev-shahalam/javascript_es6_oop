// For Loop
var i;
for (i = 1; i <= 20; i++) {
    // console.log(i);
}




// For of loop
// For of loop using for get value or data from Array
// For of loop is best for array
var names = ['jamal', 'kamal', 'rakib'];

for (var name of names) {
    // console.log(name)
}





// For in loop
// For in loop using for get value or data from Object
// For in loop is best for Object


let person = {
    name: "Anas",
    age: 16,
    class: "Play",
    address: "Mirpur, Dhaka"
}

for (let props in person) {
    // console.log(props)
    // console.log(props + ": " + person[props])
}


const country = {
    name: 'Bangladesh',
    city: 'Dhaka',
}

for (city in country) {
    console.log(country[city])
    // console.log(city);
}
