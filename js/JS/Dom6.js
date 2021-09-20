// Deal with element 
let myDiv =document.getElementById("my-div");
let myP = document.createComment("p");
let myPText = document.createTextNode(`p after div`);
let myDivSpan = document.querySelector("#my-div span");

myDiv.after("after the div");
myDiv.before("before the div");
myDiv.append("last place in side the div");
myDiv.prepend("first place in side the div");
myDivSpan.remove();

myDiv.style.border = "solid red 5px";

// DOM Traversing
let div2 = document.getElementById("div2");
let span = document.querySelector(".two");

console.log(span.nextSibling);
console.log(span.nextElementSibling);
console.log(span.previousSibling);
console.log(span.previousElementSibling);

let closeText = document.querySelector(".close");
closeText.className ="pointer";
closeText.onclick = function() {
    this.parentElement.remove();
}
// DOM Cloning

let para = document.querySelector(".my-p").cloneNode(true);
console.log(para);
let div3 = document.getElementsByClassName("div3");
console.log(div3);

div3[0].append(para);

// AddEventListener
function one() {
    console.log(`functoin number 1`);
}
function two() {
    console.log(`functoin number 2`);
}
function copy () {
    let newbutton = button3[0].cloneNode(true);
    newbutton.className="clonedButton";
    document.body.appendChild(newbutton);
}
let button1 = document.getElementsByClassName("bt1");
let button2 = document.getElementsByClassName("bt2");
let button3 = document.getElementsByClassName("bt3");
button1[0].onclick = one;
button1[0].onclick = two;
button2[0].addEventListener("click",one);
button2[0].addEventListener("click",two);
button3[0].onclick= copy;
// this method used to add function for element not created yet in you page :
document.addEventListener("click", function(e) {
    if (e.target.className==="clonedButton"){  // target 
        copy();
    }
})
