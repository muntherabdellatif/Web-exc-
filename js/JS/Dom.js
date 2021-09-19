// sellectors
console.log("%c sellectors" , "color:red;");
let myDiv =document.getElementById("div");
console.log (myDiv);
//-----------------------
let paragraph =document.getElementsByTagName("p");
console.log (paragraph);
paragraph[1].innerHTML="changed by js";
//-----------------------
let span1 = document.getElementsByClassName("mySpan");
console.log (span1[1]);
//-----------------------
let special =document.querySelector(".special");
console.log (span1);
//-----------------------
let divForm =document.querySelector("div form");
console.log (divForm);
//-----------------------
let divFormInput =document.querySelector("div form input"); // find first element with this selector
console.log (divFormInput);
//-----------------------
let divFormAllInput =document.querySelectorAll("div form input"); // find first element with this selector
console.log (divFormAllInput);
//-----------------------
console.log (document.title);
console.log (document.body);
console.log (document.forms[0].one.value); // input name => one 
console.log (document.links[0].href);
// get , set
console.log("%c  get , set" , "color:red;");
console.log(myDiv.innerHTML);
console.log(myDiv.textContent);
myDiv.innerHTML = " my new test by <span> JS </span>" ;
paragraph[1].textContent = "this is test by <span> JS </span> ";

document.images[0].src="../img/helpbox-contact.jpg";
document.images[0].id="imgId";
document.images[0].className="imgClass";
document.images[0].title="this is my img";
// get attribute
let myLink = document.querySelector("a");
console.log(myLink.getAttribute("href"));
// set attribute
myLink.setAttribute("href","google");
console.log(myLink.getAttribute("href"));