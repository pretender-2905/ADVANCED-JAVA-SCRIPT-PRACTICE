// Array Methods(forEach, map, filter, reduce, some, every)

// for loop
let num = [1,2,3,4]
for(let i = 0; i<num.length; i++){
    console.log(num[i])
}

// -------------------------------------------------------
// for each:

// num.forEach((element)=>{
//     console.log(element * element)
// })

// another example:

let num2 = [4,8,7,6,10]
num2.forEach((element)=>{
    console.log(element * element)
})

// ----------------------------------------------------------------

// Array.from
//  ==> used to convert an object in to array
let name = "ibrahim"
let arr = Array.from(name)
console.log(arr)
// ------------------------------------------------------------------


// for ....of
// used to acces array values
for (let i of num){
    console.log(i)
}


// for ...  in

for(let i in num){
    console.log(num[i])
}