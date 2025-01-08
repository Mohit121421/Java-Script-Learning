/*Create a business name generator that generates by combining list of adjectives and shop name and another word name.

Adjectives:
Crazy
Amazing 
Fire

Shop Name:
Engines 
Foods 
Garments

Another word:
Bros 
Limited
Hub

Create this without using array.
*/

console.log("Business Name Generator");

let adjectives = {
    adjective1: "Crazy",
    adjective2: "Amazing",
    adjective3: "Fire"
}

let shopNames = {
    shopName1: "Engines",
    shopName2: "Foods",
    shopName3: "Garments"
}

let anotherWords = {
    anotherWord1: "Bros",
    anotherWord2: "Limited",
    anotherWord3: "Hub"
}

let businessName = Math.floor(Math.random() * 3) + 1;
let shopName = Math.floor(Math.random() * 3) + 1;
let anotherWord = Math.floor(Math.random() * 3) + 1;

console.log(adjectives["adjective" + businessName] + " " + shopNames["shopName" + shopName] + " " + anotherWords["anotherWord" + anotherWord]);