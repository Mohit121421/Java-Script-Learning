let a = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

a.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

for (const key of a) {
    if (Object.hasOwnProperty.call(a,key))   {
        const element = a[key];
        console.log(key,element);
    }
}

