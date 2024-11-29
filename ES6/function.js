

/* ------------------------------------------
    Simple Function
*/
function addNum() {
    var a = 10
    var b = 30
    console.log(a + b);
}
// addNum()




/* ----------------------------------------------
    Parameterized Function
*/
function addNum(a, b) {
    console.log(a + b);
}
// addNum(29,39)



/* ---------------------------------------------
    Rest Parameterized Function
*/

function restParamsFun(...nums) {
    var sum = 0;
    for (let i of nums) {
        sum = sum + i;
    }
    console.log(sum);
    // console.log(nums[4])
}
// restParamsFun(2, 2, 34, 5, 67, 3);



/* ------------------------------------------
     Daynamic Function
      - A Function without name
      - It can be declared dynamically at runtime
      - An anonymouse function can be assign within a variable
      - This function has no name
      - This function hold on a variable
*/

let sum = function (a, b) {
    return a + b
}

// console.log(sum(23, 12))




/* -----------------------------------------------------------
    ES6 Arrow Function
     - To write smaller function syntax.
     - Arrow Functions make your code more readable and structured
     - Arrow functions are anonymous function
     - Can declare with out the function keyword

     - Arrow functions cannot be used as the constructors.
*/


var arrowFun = (peram) => {
    console.log(peram)
    console.log("this is arrow function")
}
// arrowFun("this is arrow function from perams")


// Arrow functions with rest perameters
var restPeram = (...n) => {
    console.log(n)
}
// restPeram(1,2,3,4,5,6,7)




/*
    Defult perameter in function
*/
function greet(name, title = 'Mr.') {
    return `Welcome, ${title} ${name}  `
}
console.log(greet('Jone Doe', 'Mrs.'))
console.log(greet('Jane Doe'))