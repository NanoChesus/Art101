// index.js - to creat and use an anon function
// Author: Jesus Barrios
// Date: 5-6-2024

// code

const staircase = [1, 2, 3, 4, 5];

console.log("originle array", staircase);

//Named function
function tallerStairs (x) {
    var results = x*2
    return results
}

//Anon function
staircase.map(tallerStairs);

console.log("taller Stairs Array")

//displays code in console
console.log(staircase.map(tallerStairs));
