// The spread operator in JavaScript is represented by three consecutive dots (...). It is used to unpack elements from an array or object and spread them out into a new array or object. 


// ------- SPREAD OPERATOR with (array) -------
// let arr = [1, 2, 3, 4, 5];
// let arr1 = [6, 7, 8, 9, 10, ...arr]; // spreading arr inside arr1
// let merge = [...arr, ...arr1];      // merging both arrays into a new one

// console.log(arr1); // Should print: [6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
// console.log(merge)


































// SPREAD OPERATOR WITH ARRAY

let arrr1 = [1,2,3,4,5,6];
let arrr2 = [7,8,9,10,11];
let merge_arr = [...arrr1, ...arrr2];
console.log(merge_arr);
console.log(arrr1.concat(arrr1,arrr2))
// spread operator woth objects


let obj1 = {
    name: "ibrahim",
    age: 19
}
let obj2 = {
    address: "karachi, millat garden",
    email:"muhammadibrahim29052005gmail.com"
}
let obj3 = {
    ...obj1,
    ...obj2,
    city: "karachi",
    uni: "SMIU"
}

let merge_obj = {...obj1, ...obj2}
// console.log(merge_obj)
console.log(obj3)
// console.log(obj1.concat(obj3))  // concat is not for objects only for arrays




