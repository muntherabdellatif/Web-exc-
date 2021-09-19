// check attribute
console.log("%ccheck attribute","color:red;");
console.log(document.querySelector("p").attributes); // to get all element attribute
let myP =document.getElementsByClassName("myP");
if (myP[0].hasAttribute("id")) { // to check if the attribute is found
    if (myP[0].getAttribute("id")===""){
        myP[0].removeAttribute("id"); // to remove the attribute
    }else {
        myP[0].setAttribute("id","newId")
    }
} else{
    console.log("not found");
}
if (myP[0].hasAttributes()) { // to check if the element has attribute or not
    console.log(`paragraph have attribute`);
} else{
    console.log(`paragraph have not attribute`);
}
// create element 1
console.log("%ccreate element","color:red;");
let myElement = document.createElement("div"); // create new element
let myAttribute = document.createAttribute("dataCustom"); // make attribute
let myText=document.createTextNode("product one"); // create text 
let myComment = document.createComment("this is div"); // create comment

myElement.className="product"; // adding class to my element
myElement.setAttributeNode(myAttribute); //  adding  attribute to my element
myElement.setAttribute("dataTest","testing"); // make and adding attribute to element
myElement.appendChild(myComment); // put the comment inside the div 
myElement.appendChild(myText); // put the text inside the div 
document.body.appendChild(myElement);
// create element 2
