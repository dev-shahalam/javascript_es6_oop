/*
   Spread
       - Incress any array with another array using three dot (...)
       - Bettar using spread operator from array push
*/


let poorCountry = ['Bangladesh', 'Srilanka'];
let richCountry = [...poorCountry, 'America', 'Canada'];

// console.log(richCountry)

/*

        - Incress any array with another array with out using spread operator or three dot (...)

*/

let pCountry = ['Bangladesh', 'Srilanka'];
let rCountry = [pCountry, 'America', 'Canada'];
rCountry.push(pCountry)
console.log(rCountry)


// Spread Opetator
function sum(x,y,...numbers){
        // console.log(numbers)
}

sum(1,4,6,4);

function sum1(...numbers){
        // console.log(numbers)
        return numbers.reduce((b,s)=>b*s)
}

console.log(sum1(1,4,6,4))