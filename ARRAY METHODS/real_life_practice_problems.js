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


const users = [
    { name: "Ali", active: true, verified: true },
    { name: "Sara", active: false, verified: true },
    { name: "John", active: true, verified: false }
  ];
  
  const validUsers = users.filter(user => user.active && user.verified);
  console.log(validUsers);
  

//   ------------------------------------------

// reduce

// Each blog post has a likes field. Calculate the total likes.

const posts = [
    { title: "Post 1", likes: 100 },
    { title: "Post 2", likes: 250 },
    { title: "Post 3", likes: 150 }
  ];
  
  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
  console.log("Total Likes:", totalLikes);
  


