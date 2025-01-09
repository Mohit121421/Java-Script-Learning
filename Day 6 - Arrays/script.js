console.log("Hello, Today we will learn about JavaScript Arrays");

let arr = [1,2,3,4,5,6,7];
//Index    0 1 2 3 4 5 6

arr[0]=10;
console.log(arr);
console.log("Lenght : "+arr.length);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[6]);

//Differents Array Methods

console.log(arr[arr.toString()]);//Converts the array to a string 

arr.push(8);//Adds an element to the end of the array
console.log(arr);

arr.pop();//Removes the last element of the array
console.log(arr);

arr.shift();//Removes the first element of the array
console.log(arr);

arr.unshift(1);//Adds an element to the beginning of the array
console.log(arr);

arr.splice(2,2);//Removes elements from the array
console.log(arr);

arr.splice(2,0,3,4);//Adds elements to the array
console.log(arr);

arr.reverse();//Reverses the array
console.log(arr);

arr.sort();//Sorts the array
console.log(arr);

arr.slice(2,4);//Returns the selected elements in an array
console.log(arr);

arr.concat([8,9,10]);//Joins two arrays
console.log(arr);

arr.join();//Converts the array to a string
console.log(arr);

console.log(arr.indexOf(3));//Returns the index of the first occurrence of the element

delete arr[2];//Deletes the element at the specified index