// console.log("First programme");
// console.log(document.body.style.background = "gray");
// window.setTimeout(function(){
//     document.body.style.background = "pink";
// },3000)

// window.setInterval(function(){
//     document.body.innerHTML=`<h1>${new Date()}</h1>`
// },1000);
// window.alert("Hello World");

// //const result = window.confirm("Are you sure?");
// //console.log(result);

// const result = window.prompt("What is your name?");
// console.log(result);

const title = document.getElementById("title");
title.style.fontSize = "60px";

const Title = document.getElementsByClassName("red");
Title[0].style.fontSize = "40px";

// const Title = document.getElementsByClassName("red");
// Title.forEach(function(item){
//     item.style.fontSize = "40px";
// })
const firstlist= document.querySelector(".red");
firstlist.style.color = "purple";

const Firstlist= document.querySelectorAll(".red");
Firstlist.forEach(function(item){
    item.style.color = 'purple';
})

//Event
//document.addEventListener("click",function(){
    //console.log("you clicked it");
//})

// const button = document.querySelector('button');
// button.addEventListener("click",function(event){
//     console.log(event);
//     document.body.style.background = "peachpuff";
// })
document.addEventListener("keyup",function(event){
    console.log(event.target);
    document.body.style.background = "peachpuff";
})
