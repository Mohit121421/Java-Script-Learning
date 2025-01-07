/* Create a faulty calculator using JavaScript. 

This faulty Calaculator does following things:
1. It takes two numbers as input from the user.
2. It performs wrong operations as follows:

+ ----> -
* ----> +
- ----> /
/ ----> **

It perform wrong operations 10% of the time.
*/

// Faulty Calculator
let random = Math.random();
console.log(random);
let num1 = prompt("Enter first number: ");
let op = prompt("Enter operation: ");
let num2 = prompt("Enter second number: ");


let obj = {
    "+": "-",  
    "*": "+",
    "-": "/",
    "/": "**"    
}

if(random > 0.1){
    alert(`The result is ${eval(`${num1} ${op} ${num2}`)}`);
}
else{
    c=obj[op];
    alert(`The result is ${eval(`${num1} ${op} ${num2}`)}`);
}

