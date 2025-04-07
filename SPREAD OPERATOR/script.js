// ------- SPREAD OPERATOR with (array) -------
let arr = [1, 2, 3, 4, 5];
let arr1 = [6, 7, 8, 9, 10, ...arr]; // spreading arr inside arr1
let merge = [...arr, ...arr1];      // merging both arrays into a new one

console.log(arr1); // Should print: [6, 7, 8, 9, 10, 1, 2, 3, 4, 5]
