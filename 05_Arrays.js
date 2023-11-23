/**
 * There is no collection in JS. In JS we only have Arrays and Map
 * NOT fixed size
 * There are two important bracets in JS
 * 1. []------> creates an Array
 * 2. {}------> creates an object
 */

let scores = new Array(); //creates an empty array
let numbers = new Array(10); // creates an array with size 10
let emptyArray = []; //creates an empty array
let myNumbers= new Array(1,2,3,5,8,13);
let colors = new Array('green','red','yellow');

console.log(scores);
console.log(numbers);
console.log(emptyArray);
console.log(myNumbers);
console.log(colors);

// print second element in an Array
console.log(colors[1]); //index based

//add element to an array
colors.push("blue"); //adding element to the end of array
console.log(colors);

//add element to the beginnig of the array
colors.unshift("white");
console.log(colors);

console.log(colors.pop()); //giving the last element and removing at the same time
console.log(colors);

//the size of the array
console.log(colors.length);
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
    
}

//loop with values of array

for (let value of colors) {
    console.log(value);
}

colors.forEach(element => {
    console.log(element);
});

//can we add multiple type of data? YES
let soupOfData = [5,"Oscar" , true, undefined]; //you can also put MAp, object, functions inside array
soupOfData.forEach(element => {
    console.log(element);
});