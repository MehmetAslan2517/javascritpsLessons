//no access modifier, no method overloading

function add(a,b) {
    console.log("Toatal is : " + (a+b));  //o return type
}

add(10,20); //call a function


//return type function
function multiply(a,b) {
    return (a*b);
}

console.log(multiply(10,20));

//no overloading
add(10,20,30); //ignores after second parameter


/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 * They call functions as a first class citizens of JS
 * 1. You can pass arguments to other functions
 * 2. You can return a function from other functions
 * 3. You can store a function into a variable
 */
let divide = function (a,b) { //1. You can pass arguments to other functions
    return a/b; //2. You can return a function from other functions
}

console.log(divide(20,5));

let anyFunction = divide;

console.log(anyFunction(30,5));