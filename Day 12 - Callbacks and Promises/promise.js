console.log('This is promise');

let PROM1 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No Random number was supporting you")
    }
    else{
   setTimeout(() => {
    console.log("yes i am done")
    resolve("Mohit")
   }, 3000); 
}
})
PROM1.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err); 
}
)

let PROM2 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No Random number was supporting you 2")
    }
    else{
   setTimeout(() => {
    console.log("yes i am done 2")
    resolve("Mohit 2")
   }, 1000); 
}
})

//Promise.all
let p3 = Promise.all([PROM1,PROM2])
p3.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err); 
}
)

//Promise.allSettled
let p4 = Promise.allSettled([PROM1,PROM2])
p3.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err); 
}
)

//Promise.race
let p5 = Promise.race([PROM1,PROM2])
p3.then((a) => {
    console.log(a)
}).catch((err) => {
    console.log(err); 
}
)

