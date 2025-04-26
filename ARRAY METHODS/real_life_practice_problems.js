// for each...

// Question: On a blog post page, you have an array of user comments. How would you display each comment in the console?

// let comments = ["Nice", "Good product,100% recommended", "very fast delivery", "very good resutls"]

// comments.forEach((comment)=>{
//     console.log(comment)
// })


// let comments = ["Nice", "Good product,100% recommended", "very fast delivery", "very good resutls"]

// comments.forEach((comment, index)=>{
//     console.log(`Comment ${index + 1}: ${comment}`)
// })

// .....................................................


// Map


// Question: You have a shopping cart with product prices. How would you create a new array of prices with 10% discount?

// let prices = [500, 540, 760, 999, 678]
// let p = prices.map((price)=>{
//    return 0.9 * price
// })
// console.log(p)


// --------------------------------------------------------


// for in

// Question: A form sends data as an object. How would you print the field names and their values?

// let form = {
//     name: "ibrahim",
//     age: 19,
//     city: "karachi"
// }

// for(let key in form){
//     console.log(`key: ${key} value: ${form[key]}`)
// }

// -----------------------------------------------------------

// for

// You have an array of star ratings from 1 to 5. Print stars (⭐) for each rating using a for loop.

// let ratings = [3,4,5];
// for(let i = 0; i < ratings.length; i++){
//     let stars = "";
//     for(let j = 0; j < ratings[i]; j++){
//         stars += "⭐"; 
//     }
//     console.log(`Product: ${i + 1}: ${stars}`)
// }

// -----------------------------------------------------------
// 

// for off
// Loop through a list of important words and check if they appear in a paragraph.

// let paragraph = "learn javascript and react to become a frontend developer"
// let keyword = ["javascript", "react", "developer"]
// for(let word of keyword){
//     if(paragraph.includes(word)){
//         console.log(`Found keyword: ${word}`)
//     }
// }


// --------------------------------------------

// filter
// Given an array of user accounts, show only those who are active and verified.

// const users = [
// {name: "ibrahim", verified: true, active: true},

// { name: "Abaas", verified: true, active: true},

//  {name: "amjad", verified: false, active:false},

//  {name: "salah", verified: true, active: false},
// ]


// let filtered_user = users.filter((user)=>{
//   if(user.active && user.verified){
//     return true
//   }
//   else{
//     return false
//   }
// })

// console.log(filtered_user)

// --------------------------------------------------------


// reduce

// let numbers = [1,2,3,4,5]
// let total = numbers.reduce((accumulator, CurrentValue)=>{
//     return accumulator + CurrentValue
// }, 0)

// console.log(total)

// reduce is a method in JavaScript used to take all the values of an array and combine them into a single value.
// This "combination" can be addition, multiplication, joining strings, making a new object, anything.

// Each blog post has a likes field. Calculate the total likes.




// --------------------------------------------------------

// reduce


// let posts = [
//   {title: "post1", likes: 100},
//   {title: "post2", likes: 200},
//   {title: "post3", likes:300}
// ]

// let totalLikes = posts.reduce((sum, post)=>{
//   return sum + post.likes
// },200)

// console.log(totalLikes)

// ---------------------------------------------------

// reduce

// accumulator: where the result is stored (like a basket collecting stuff)

// currentValue: current item from the array

// initialValue: starting value for accumulator
// --------------------------------------------------------

// some()

// let products1 = [
//     {name: "laptop", status: true},
//     {name: "computer", status: false},
//     {name:"mobiles", status: false}
// ]

// let check_status1 = products1.some((product)=>{
//     return product.status === true
// })

// console.log(check_status1)


// // --------------------------------------------------------

// // every()

// let products = [
//     {name: "laptop", status: true},
//     {name: "computer", status: true},
//     {name:"mobiles", status: true}
// ]

// let check_status = products.every((product)=>{
//     return product.status === true
// })

// console.log(check_status)


// --------------------------------------------------------



























  
  


