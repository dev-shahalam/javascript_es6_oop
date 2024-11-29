/*
    What is Encapsulation ? How to work ?
        - Grouping data & actions
        - Hides complexity
        - Data Protection
        - Controlled access
        - Enhances Maintainability

    Using Encapsulation by 3 Methods in Javascript
        1. Encapsulation using closures
        2. Using Constructor functions
        3. Using ES6 Classes
*/




//  1. Encapsulation using closures
function makeCounter() {
    let count = 0;
    return {
        increment: function () {
            count++
        },
        decrement: function () {
            count--
        },
        getCount: function () {
            return count;
        }
    }
}

let count = new makeCounter();
count.increment()
count.increment()
count.increment()
count.increment()
count.increment()
count.decrement()
count.decrement()
// console.log(count.getCount())




// 2. Using Constructor functions
function setCounter() {
    let count = 0;
    this.increment = () => {
        count++
    }
    this.decrement = () => {
        count--
    }
    this.getCount = () => {
        return count;
    }
}

let counts = new setCounter();
counts.increment()
counts.increment()
counts.increment()
counts.decrement()



console.log(counts.getCount())





// 3. Using ES6 Classes

class createCounter {
    #count = 0;
    increment() {
        this.#count++
    }
    decrement() {
        this.#count--
    }
    getCount() {
        return this.#count
    }
}

let counter = new createCounter()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.decrement()
counter.decrement()

// console.log(counter.getCount())
