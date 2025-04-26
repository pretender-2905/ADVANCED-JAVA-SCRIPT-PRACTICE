// MAP
// practivce question
// Given an array 
// const nums = [1, 2, 3, 4, 5];
// , use map() to create a new array
//  where each number is doubled.

// const nums = [1,2,3,4,5];
// let a = nums.map((value)=>{
//     return value * value
// })
// console.log(a)

// --------------------------------------------


// FILTER
// Given an array const ages = [12, 17, 20, 8, 30];, use filter() to create a new array that only contains ages 18 or above.


// const ages = [12, 17, 20, 8, 30];
// newAgeArray = ages.filter((age)=>{
//     return age>17
// })
// console.log(newAgeArray)

// --------------------------------------------


// REDUCE
// Given an array const numbers = [10, 20, 30];, use reduce() to calculate the sum of all numbers.

// const numbers = [10, 20, 30];
// let b = numbers.reduce((n1 , n2)=>{
//     return n1 + n2
// })

// console.log(b)

// --------------------------------------------

//FOR EACH

// Given an array const names = ["Ali", "Sara", "John"];, use forEach() to print a greeting message for each name like "Hello, Ali!"

// const names = ["Ali", "Sara", "John"];
// let c = names.forEach((values)=>{
 
//     console.log("Hello! " + values)
// })

// --------------------------------------------


// for

// Given an array const fruits = ["Apple", "Banana", "Mango"];, use a regular for loop to print each fruit with its index (e.g., "0: Apple").


// const fruits = ["Apple", "Banana", "Mango"];
// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

// --------------------------------------------

// for of

// Given a string const word = "Hello";, use a for...of loop to print each character of the string.

// const word = "Hello"
// for(let i of word){
//     console.log(i)
// }


// for in

// let obj1 = {
//     name: "ibrahim",
//     age: 19
// }
// for(let key in obj1){
//     console.log(key)
//     console.log(obj1[key])
// }

// -------------------------------------------------
// Some()
// some check the arays and tell if some of the elements of array passed conditions or not and gives thre element that passes the conditions.

// let numbers = [1,2,3,4,5]
// let hasEven = numbers.some((num)=>{
   
//    return num % 5 === 0
// })

// console.log(hasEven);

// ---------------------------------------------------

// every()

// .every() is a method used with arrays.
// It checks every item in the array.
// It answers a yes or no question:
// 👉 “Do all the items pass the test?”

// If all items pass the test, it gives you true.
// If even one item fails, it gives you false.

// let numbers = [2,4,6,8]
// let numberPassed = numbers.every((num)=>{
//     if(num % 2 === 0){
//         return num
//     }
// })

// console.log("aLL values passed! " + numberPassed)

// ----------------------------------------------------------------

// optional chaining

// let obj = {
//     name:"ibrahim",
//     age: 19,
//     skills:{
//         language:"javascript",
//         framework: "react"
//     },
    

// }

// console.log(obj.name + " skilled in " + obj.skills.language + " and " + obj.skills.framework)




// ----------------------------------------------------------------


// Exponentiation Operator

// let power = Math.pow(5,2)
// console.log("5 to the power 2 is: " + power)

// another method

// let power1 = 5**2;
// console.log("5 to the power 2 is: "+ power1)


// ----------------------------------------------------------------


// Higher order function

// Accepts another function as an argument, or

// Returns a new function,

// --
// first:. accepting another function as an argument

// function shout(name){
//     return "Hello  " + name
// }

// function greet(fn, unserName){
//     return fn(unserName)
// }

// // console.log(greet(shout, "Ibrahim"))
// --

// second:  Returning a function

// function multiplyBy(x){
//     return function(y){
//         return x * y
//     }
// }

// let double = multiplyBy(2)
// console.log(double(5))

// ----------------------------------------------------------------

// closures()


// const outerFunction = ()=>{
//     let smit = "saylani";

//     const innerFunction = ()=>{
//         console.log(smit);
//     }
//     innerFunction()
// }

// outerFunction();

// ---------------------------------------------


















// ----------------------------------------------------------------