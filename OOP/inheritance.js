/*
    Inheritance
*/
class parent {

    a = 30
    b = 40
    sum() {
        return this.a + this.b
    }
}

class child extends parent {

}
// let childObj = new child()
// console.log(childObj.sum()) // Output: 70





/*
     How to work Inheritance constructor
     - The constructor of the child class can call the constructor of the parent class using the super() keyword.
*/

class father {
    constructor(father_msg) {
        console.log(father_msg)
    }

}

class son extends father {

    constructor(son_msg) {
        super()
        console.log(son_msg)
    }
}

let fatherObj = new father("This is Father constructor")
let sonObj = new son("This is Son constructor")

