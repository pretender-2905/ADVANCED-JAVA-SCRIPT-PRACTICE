// Default parameters is a method to set the default parameter for a function , it can work in case no argument is passed:

// function greet(student_name = "abc student"){
//     alert(`Student name is ${student_name}`)
    
// }
// greet();
// greet("ibrahim");

// Rest parameters allows you to pass multiple argument in a function in array form, specially useful when you dont know how many values will going to pass as an arguments

function books(...book_name){
    for (let i = 0; i < 2; i++) {
        console.log(book_name[i]);
    }
}

books("maths", "physics", "chemistry");
books()k