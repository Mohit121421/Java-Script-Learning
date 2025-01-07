console.log("Helllo, Today we are going to learn about JavaScript Loops");

// For Loop
console.log("For Loop");
for (let i = 0; i <= 100; i++) {
  console.log(i);
}

//forin loop
console.log("For in Loop");
let person = {
  name: "John",
  age: 30,
  city: "New York",
};
for (let key in person) {
  console.log(key, person[key]);
}

//forof loop
console.log("For of Loop");
for(let value of "Hello"){
  console.log(value);
}

//while loop
console.log("While Loop");
let i = 0;
while(i <= 10){
  console.log(i);
  i++;
} 

//do while loop
console.log("Do While Loop");
let j = 0;
do{
  console.log(j);
  j++;
}while(j <= 15);