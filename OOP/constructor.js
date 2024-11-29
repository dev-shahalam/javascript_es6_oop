// Create Constructor Method In Class Object with parameter


class person4 {
    constructor(first_name, last_name) {
        this.first_name = first_name
        this.last_name = last_name
        console.log(`${this.first_name} ${this.last_name}`)
    }

}
// let person4Obj = new person4("Mohammad", "Anas");


class sum {
    constructor(a, b) {
        this.a = a
        this.b = b
        console.log(this.a + this.b)
    }
}

// let sumObj = new sum(5, 10);

// Change class property using constructor parameter

class person5 {
    a = 10
    b = 20
    constructor(a, b) {
        this.a = a
        this.b = b
    }
    getSum() {
        return this.a + this.b
    }
}

let person5Obj = new person5(100, 200);
console.log(person5Obj.getSum()) // Output: 300


