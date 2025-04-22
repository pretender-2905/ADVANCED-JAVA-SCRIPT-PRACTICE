// Array Methods(forEach, map, filter, reduce, some, every)

// for loop
// let num = [1,2,3,4]
// for(let i = 0; i<num.length; i++){
//     console.log(num[i])
// }

// // -------------------------------------------------------
// // for each:
// // for each loop hr array element mai koi operation krta hai
// // num.forEach((element)=>{
// //     console.log(element * element)
// // })

// // another example:

// let num2 = [4,8,7,6,10]
// num2.forEach((element)=>{
//     console.log(element * element)
// })

// // ----------------------------------------------------------------

// // Array.from
// //  ==> used to convert an object in to array
// let name = "ibrahim"
// let arr = Array.from(name)
// console.log(arr)
// // ------------------------------------------------------------------


// // for ....of
// // used to acces array values
// for (let i of num){
//     console.log(i)
// }

// // -----------------------------------------------------------------------
// // for ...  in

// for(let i in num){
//     console.log(num[i])
// }

// // -----------------------------------------------------------------------

// //map
// // map iak new aray bana ke usy return krta hai
// let arr1 = [45,23,21]
// // console.log(arr1)
// arr1.map((value)=>{
//     console.log(value)
// })

// // another exampoole

// let a = arr1.map((value)=>{
//     console.log(value)
//     return value + 1
// })
// console.log(a)

// // we can give more two arguments just instead of value, we can give indexedDB,array as an argument also

// let arr2 = [4,6,8,9]
// let b = arr2.map((value, index, array)=>{
//     console.log(value,index,array)
//     return value + 1
// })
// console.log(b)

// // ---------------------------------------------------------------

// // filter
// // filter used to filter out the values, the values which passes the array filtered out

// let arr3 = [5,6,7,12,45,43,67,54]
// let c = arr3.filter((values)=>{
//     return values>10
// })

// console.log(c)

// // ------------------------------------------------------------

// reduce
// array reduce method reduce an array to a single value
// let arr4 = [1,2,3,5,2,1]
// let newarr4 = arr4.reduce((v1,v2)=>{
// return v1 + v2
// })

// console.log(newarr4)

// or function can also passes as variable in js

let arr5 = [1,2,3,4,5,6,7]
const reduce_func = (h1,h2)=>{
    return h1 + h2
}
let newarr5 = arr5.reduce(reduce_func)
console.log(newarr5)
