/*  Method Over Loading
    -Javascript has no direct support for method overloading.
    - Yes, You can simulate method overloading by examining the number of arguments using count arguments by if else condition.
*/


class myClass {


    addNum(n1, n2, n3) {
        if (arguments.length === 1) {
            console.log(n1);
        }
        else if (arguments.length === 2) {
            console.log(n1 + n2);
        }
        else if (arguments.length === 3) {
            console.log(n1 + n2 + n3);
        }
    }

}

let obj = new myClass();
obj.addNum(10)
obj.addNum(10, 20)
obj.addNum(10, 20, 30)
