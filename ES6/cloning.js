/*
    Object Cloning
*/

const person = {
    name: 'Anas',
    age: 11
}

const newPerson = person; // This way can not clone this object just refarence this object
// newPerson.age = 15;
// console.log(newPerson)
// console.log(person)



const anotherPerson = Object.assign({}, person); //This way we can clone any object
anotherPerson.age = 12;
console.log(anotherPerson);
console.log(person);

