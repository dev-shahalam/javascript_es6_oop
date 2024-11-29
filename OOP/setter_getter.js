// Set new property and get this property from  class

class product {

    set setQty(value) {
        this.qty = value
    }

    get getQty() {
        return this.qty
    }

}

let productObj = new product(50)
productObj.setQty = 15
console.log(productObj.getQty) // Output: 10