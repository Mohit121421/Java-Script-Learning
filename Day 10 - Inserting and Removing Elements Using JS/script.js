console.log("Hello, Today we are going to learn about JavaScript Inserting and Removing Elements using JavaScript")
/*
console.log(document.querySelector(".container").innerTEXT);//Run on Browser console
console.log(document.querySelector(".container").tagName);
console.log(document.querySelector(".container").outerHTML);
console.log(document.querySelector(".container").nodeName);
console.log(document.querySelector(".container").textContent);
//console.log(document.querySelector(".container").hidden = true);
//console.log(document.querySelector(".container").innerHTML = "Hey This is InnerHtml");
console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
console.log(document.querySelector(".box").setAttribute("style","color: red"));
console.log(document.querySelector(".box").attributes);
console.log(document.querySelector(".box").removeAttribute("style"));
*/

/*
let div = document.createElement("div");
div.innerHTML = "Hey This is <b> me </b>";
div.setAttribute("class","created");
document.querySelector(".container").append(div);
document.querySelector(".container").before(div);
document.querySelector(".container").after(div);
*/

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterbegin","<b>Bro pls help me<b/>")

console.log(document.querySelector(".box").remove());
console.log(document.querySelector(".box").classList);
console.log(document.querySelector(".box").className);
console.log(document.querySelector(".box").classList.add("mohit"));
console.log(document.querySelector(".box").classList.remove("mohit"));
console.log(document.querySelector(".box").classList.toggle("box"));
