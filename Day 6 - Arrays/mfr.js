let arr = [1, 2, 3, 4, 5, 6, 7];
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i]**2);
// }
// console.log(newArr);

let newArr = arr.map((e, index, array) => {   
    return e**2;
    });
console.log(newArr);

const greaterThanFive = (e) => {
    if (e > 5) {
        return true;
    }
    else {
        return false;
    }
}
console.log(arr.filter(greaterThanFive));

let arr2 = [1, 2, 3, 4, 5, 6, 7];
const red = (a, b )=> {
    return a * b;
}
console.log(arr2.reduce(red));