/*
    Array
     -Create Array using 2 methods
 */

var country = ['Bangladesh', 'Pakistan', 'India'];
var city = new Array('Mirpur', 'Gulshan', 'Uttara');

//   console.log(country[0])

for (let item of city) {
    // console.log(item)
}



/* ---------------------------------------------------
  Multidimensional Arrays
   -  Multidimensional Arrays means nested array
*/
var country = ['Bangladesh', 'Pakistan', 'India'];
var city = new Array('Mirpur', 'Gulshan', 'Uttara');

var asia = [country, city]
// console.log(asia[2][1])



/* ------------------------------------------------
    Array De-structuring
     - break down a complex structure into simpler parts
*/

var area = new Array('Mirpur', 'Gulshan', 'Uttara', 'Badda');

var [a, b, , d] = area

console.log(a)