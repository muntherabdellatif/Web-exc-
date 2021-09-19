// Class List Object And Methods
console.log("%cClass List Object And Methods" , "color:red;");
let myDiv = document.getElementById("my-div");
console.log(myDiv.classList);
if (myDiv.classList.contains("one")) {
    myDiv.classList.remove("two");

}
console.log(myDiv.classList);
for ( let i=0 ;i< myDiv.classList.length ; i++ ){
    console.log(myDiv.classList.item(`${i}`));
}
myDiv.style.color="blue";
myDiv.style.fontWeight="bold";
myDiv.onclick = function () {
    myDiv.classList.toggle("clicked"); // add class if it is not exist and remove it if it is exist
}
myDiv.classList.add("monther");
let myName = document.querySelector("p");
myName.style.textAlign= "center";
myName.style.color= "blue";
myName.onmouseenter = function () {
    myName.style.cssText = "color: red; font-size:30px ;text-align: center ; font-weight: 500;";
}
myName.onmouseleave = function () {
    myName.style.cssText = "color: blue; font-size: 16px;text-align: center ; font-weight: 100;";
}
myName.onclick = function () {
    myName.style.removeProperty("color");
    myName.style.setProperty( "border", "solid red 5px" , "important");
}
console.log(document.styleSheets[0].cssRules[0]) ;
document.styleSheets[0].cssRules[1].style.setProperty("text-align","center");
