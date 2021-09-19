// child
console.log("%c child","color:red;");
let myDiv =document.querySelector("div");
console.log(myDiv);
console.log(myDiv.children[0]);
console.log(myDiv.children[1]);
console.log(myDiv.childNodes);
console.log(myDiv.firstChild);
console.log(myDiv.lastChild);
console.log(myDiv.firstElementChild);
console.log(myDiv.lastElementChild);
// events
console.log("%c events","color:red;");
/*
onclick : left click on mouse .
oncontextmenu : on the menu appear when you click right .
onmouseenter : when mouse enter the area of your element .
onmouseleave : when mouse leave the area of your element .
onscroll .
onresize .
onfocus : when you go in the form .
blur : when you go out the form .
onsubmit.
*/

let myButton =document.getElementById("button1");
myButton.onclick = function () {
    console.log ("clicked");
}
myButton.onmouseenter = function () {
    console.log ("mouse enter");
}
myButton.onmouseleave = function () {
    console.log ("mouse leave");
}
window.onscroll = function () {
    console.log("scrolling");
}
window.onresize = function () {
    console.log("resizing");
}
// Validate Form
console.log("%c Validate Form","color:red;");
let userName = document.querySelector( "[name=userName]");
let userAge = document.querySelector( "[name=age]");
document.forms[0].onsubmit = function (e) {
    let userValid = false ;
    let ageValid = false ;
    if (userName.value.length<11 && userName.value.length!="") {
        userValid=true ;
    }
    if (userAge.value.length) {
        ageValid=true ;
    }
    if (userValid === false || ageValid === false ) {
        e.preventDefault();
    }
};
document.links[0].onclick = function(event) {
    console.log(event);
    event.preventDefault();
};
//----------------------------------
window.onload = function() {
    userAge.focus(); 
};
// userName.onblur = function () {
//     document.links[1].click() ;
// }