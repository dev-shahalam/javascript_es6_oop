/*
    Set
     - Can not use duplicate vule in this set
     - avoid duplicate value
*/


var mySet = new Set();

mySet.add('Bangladesh')
mySet.add('Nepal')
mySet.add('Bhutan')
mySet.add('Pakistan')

// clear()
// mySet.clear()

// delete('value)
// mySet.delete('Nepal')

// size
// console.log(mySet.size)

// values()
// console.log(mySet.values())


// has()
if (mySet.has('Bangladesh')) {
    console.log('Founded')
} else {
    console.log('Not Founded')
}

// console.log(mySet)