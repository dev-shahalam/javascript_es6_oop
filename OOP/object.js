// How to Write object using object literal

const person1 = {
    first_name: "Mohammad",
    last_name: "Anas",
    age: 30,
    city: "Dhaka",
    isBangladeshi: true,
    getName: () => {
        // return this.first_name + " " + this.last_name;
        return "My name is " + person.first_name + " " + person.last_name;
        // console.log(`My name is ${person.first_name} ${person.last_name}`)
    }
}
//person1.getName(); // Output: My name is Mohammad Anas
// console.log(person1.getName())



// How to write object By creating instance of object --------

const person2 = new Object();
person2.first_name = "Mohammad";
person2.last_name = "Anas";
person2.age = 30;
person2.city = "Dhaka";
person2.isBangladeshi = true;
person2.getName = () => {
    return "My name is " + person2.first_name + " " + person2.last_name;
}
// console.log(person2.last_name)
// console.log(person2.getName()); // Output: My name is Mohammad Anas





// How to write object By using an object constructor --------

function person(){
    this.first_name = "Mohammad";
    this.last_name = "Anas";
    this.age = 30;
    this.city = "Dhaka";
    this.isBangladeshi = true;
    this.getName = () => {
        return "My name is " + this.first_name + " " + this.last_name;
    }
}
const person3 = new person();
// console.log(person3)


