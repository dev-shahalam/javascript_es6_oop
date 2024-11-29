// Method  Overridding in class

class parent {
    num1 = 10
    num2 = 20
    addNum() {
        console.log(this.num1 + this.num2)
    }
}

class child {
    num1 = 100
    num2 = 200
    addNum() {
        console.log(this.num1 + this.num2)
    }
}


let parentObj = new parent()
parentObj.addNum()

let childObj = new child()
childObj.addNum()