console.log('Hello, Today we are going to learn about JavaScript Conditional Statements');

let age = 5;

//if-else statement 
if(age > 18){
    console.log('You are an adult');
}
else{
    console.log('You are a child');
}

//else if ladder    
if(age != 18){
    console.log('You are not 18 years old');
}
else if(age == 18){
    console.log('You are 18 years old');
}
else if(age > 18){
    console.log('You are an adult');
}
else{
    console.log('You are not an adult');
}

//ternary operator
let result = (age > 18) ? "You are an adult" : "You are a child";
console.log(result);