// HOISTED VARIABLE is the behaviour of variable and function decleration move at the top of their containing scope, only var is ahoisted variable


// with var

var x;
console.log(x); // output: undefined
x = 5;
console.log(x); // output:  5


// with let and const

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;



console.log(z); // ReferenceError
const z = 20;

