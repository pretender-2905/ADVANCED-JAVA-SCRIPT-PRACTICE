// for each...

// Question: On a blog post page, you have an array of user comments. How would you display each comment in the console?

// let comments = ["Nice", "Good product,100% recommended", "very fast delivery", "very good resutls"]

// comments.forEach((comment)=>{
//     console.log(comment)
// })


let comments = ["Nice", "Good product,100% recommended", "very fast delivery", "very good resutls"]

comments.forEach((comment, index)=>{
    console.log(`Comment ${index + 1}: ${comment}`)
})

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

let form = {
    name: "ibrahim",
    age: 19,
    city: "karachi"
}

for(let key in form){
    console.log(`key: ${key} value: ${form[key]}`)
}


