/*
 Access a class property with out create new object Using static keyword
 Benifite by using this static keyword
 1. shared properties, 2.Utility functions, 3. Memory efficiency, 4.Best performance
*/

class person {
    static first_name = 'Mohammad'
    static last_name = 'Anas'

    static getName() {
        return `My name is ${this.first_name} ${this.last_name}`
    }
}

// const person1 = new person()
// console.log(person.getName())


/*
  Access any property from class by using Static keyword in Inheritance
*/

class Father {
    static greetFather() {
        console.log('Hello , I am Father')
    }
}
class Son {
    static greetSon() {
        console.log('Hello , I am Son')
    }
}

// let fatherObj=new Father()
// fatherObj.greetFather()
Father.greetFather()
// let sonObj=new Son()
Son.greetSon()
// sonObj.greetSon()