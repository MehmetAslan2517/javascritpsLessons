// loops are same with JAVA; for loop, while loop, do while loop

// let variables local scope
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// console.log(i); 
//if you want to use let variable out of the for loop you will get an error because it is local variable

//old types of declaring variables before ES6
//var variables global and function scope --> this is an interview question
for (var j = 0; j < 5; j++) {
    console.log(j);
    
}

console.log(j); // this time we don't get any error

let n1= 0;
while (n1<5) {
    console.log(n1);
    n1++;
}

let n2 = 0;
do {
    console.log(n2);
    n2++;
} while (n2<3);