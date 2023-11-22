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

//control flow statement if/if else/ switch/ break/continue same with JAVA
let num1=100;
let num2=10;
if (num1>num2){
    console.log("number one is bigger");
}else{
    console.log('number 2 is bigger');
}

//ternary operator
let age = 25;
let isElligible = age>18 ? true:false;
console.log(isElligible);  //true

//switch operator
let month = 2;
let dayConut;
switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        dayConut=31;
        break;
    case 4: case 6: case 9: case 11: 
        dayConut=31;
        break;
    case 2:
        dayConut=28
        break;
    
    default:
        dayConut=-1;
        break;
}
console.log(dayConut);
