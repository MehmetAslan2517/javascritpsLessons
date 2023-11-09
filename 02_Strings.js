let str1='Java';
let str2="scripts";
let str3="awesome";

let result=str1+str2+" "+str3;    //like java
console.log(result);

//difference from java: bactiks for variable insertion

result=`the result variable is: ${str1}${str2} ${str3}`;
console.log(result);