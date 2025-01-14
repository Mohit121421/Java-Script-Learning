console.log('Hello, Today we are going to learn about JavaScript DOM Selecting by Ids, Classes, and More.');

//let boxed = document.getElementsByClassName("box")
//console.log(boxed);
//boxed[2].style.backgroundColor = "red";

//document.getElementById("red").style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor = "Blue"

console.log(document.querySelectorAll(".box"))
for(let i=0;i<=document.querySelectorAll(".box").length;i++){
    document.querySelectorAll(".box")[i].style.backgroundColor = "red"
}