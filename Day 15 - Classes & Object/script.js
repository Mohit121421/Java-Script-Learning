/*
let obj = {
    a: 1,
    b:"Mohit"
}
console.log(obj);

let animal = {
    eats:true
}
let rabbit = {
    jumps:true
}
rabbit.__proto__ = animal;//sets rabbit.[[Prototype]] = animal
*/

class Animal{
    constructor(name){
        console.log('object is created...')
        this.name=name;
        console.log(name);
    }
    eats(){
        console.log("Eating")
    }
    jumps(){
        console.log('jumping');
    }
}
class lion extends Animal{
    constructor(name){
        super(name);
        console.log('object is created and he is lion...')
        this.name=name;
        console.log(name);
    }
    eats(){
        super.eats()
        console.log("Eating and roaring")
    }
}

let a = new Animal("Bunny");
console.log(a);
a.eats();
a.jumps();

let l = new lion('shera')
console.log(l);
l.eats();
l.jumps();

