console.log("Hello, Today we will learn about JavaScript String");
 
let a = "Hello";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
//console.log(a[5]); undefined

console.log(a.length);

let real_name = "Mohit";
let friend_name = "Sumit";
console.log(real_name + " and " + friend_name + " are best friends");

console.log("Template literals");
console.log(`${real_name} and ${friend_name} are best friends`);//template literals

//Different String Methods
let b = "Suraj";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.charAt(2));
console.log(b.indexOf('r'));
console.log(b.slice(1, 3));
console.log(b.slice(1));
console.log(b.replace('S', 'M'));
console.log(b.split('r'));
console.log(b.concat(a,real_name,friend_name,"is Good Friends"));
console.log(b.includes('r'));
console.log(b.startsWith('S'));
console.log(b.endsWith('j'));
console.log(b.repeat(3));
console.log(b.trim());
console.log(b.padStart(10, 'a'));
console.log(b.padEnd(10, 'a'));
