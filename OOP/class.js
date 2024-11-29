
/*
     Why need Class ? Create Class and use.
      - Before ES6, It was hard to create a class in javascript
      - But in ES6, we can create the class by using the class keyword

*/


class Person1 {
    first_name = "Mohammad"
    last_name = "Anas"

    getFullName() {
        return `My name is ${this.first_name} ${this.last_name}`
    }
    greet() {
        return `Welcome, ${this.first_name}`
    }
}

let person = new Person1();
// console.log(person.greet()); // Output: Welcome, Mohammad
// console.log(person.getFullName()); // Output: My name is Mohammad Anas



// Rediclare way in class
// can not rediclare in same class

let person2 = class {
    first_name = "Mohammad"
    last_name = "Anas"
    getFullName() {
        return `My name is ${this.first_name} ${this.last_name}`
    }
}

let person3 = class {
    first_name = "John"
    last_name = "Doe"
    getFullName() {
        return `My name is ${this.first_name} ${this.last_name}`
    }
}
let personObj2 = new person2();
// let person = new person2();
// console.log(person.getFullName()); // Output: Welcome, John
// console.log(person.greet()); // Output: Welcome, John
