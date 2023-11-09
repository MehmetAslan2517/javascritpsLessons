//order of operator in JS is same with JAVA
console.log(4+4*(-1)-8/2);

//assignment operator
let x=5;
x+=5;
console.log(x);

//comparison similar to JAVA with some difference

let one = 1;
let one_again= 1;
let one_string='1';
let two_string='2';

console.log(one==one_again);     //true
console.log(one==one_string);    //ture: == sign is looking for value equality
console.log(one===one_string);   //false === sign is looking for both value and datatype equality
console.log(one_string===two_string); //false

//logical operators are same like JAVA: You have only short circuit && , ||
console.log((5<2)&&(2<5));
