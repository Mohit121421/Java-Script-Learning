console.log("Hello, Today we are going to learn about JavaScript Functions");

//simple function
function sayHello() {
  console.log("Simple Function");
}
sayHello();//calling the function

//function with parameters
console.log("Function with parameters");
function greet(name) {
  console.log("Hello " + name);
}
greet("Mohit")//calling the function

//function with return statement
console.log("Function with return statement");
function add(a, b,c=3/*default parameter*/) {
    return a + b +c;
}
result1 = add(2, 3);//calling the function
result2 = add(5, 5);//calling the function
result3 = add(5, 5, 5);//passing the third parameter it will override the default parameter
result = result1 + result2;
console.log(result1);
console.log(result2);
console.log(result);

//Arrow function
console.log("Arrow function");
const fun = (x) => {
  console.log("Arrow function : "+x);
};
fun(5);//calling the function
fun(10);//calling the function