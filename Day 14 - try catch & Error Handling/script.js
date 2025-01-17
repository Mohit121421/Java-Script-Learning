let a = prompt('Enter first number')
let b = prompt('Enter second number')
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry This is not allowed")
}
let c = parseInt(a)+parseInt(b);
try {
    console.log(c*x)
} catch (error) {
    console.log('Error is present');
    
}
