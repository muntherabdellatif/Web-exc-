let productContainer = document.createElement("div");
productContainer.className="productContainer"; // adding class to my element
for ( let i=0;i<12;i++) {
    let myElement = document.createElement("div"); // create new element
    let divHead = document.createElement("h2"); // create new element
    let headText=document.createTextNode(`product ${i+1}`); // create text 
    let productParagraph = document.createElement("p"); // create new element
    let pText=document.createTextNode(`this is my product ${i+1}`); // create text 
    

    myElement.className="product"; // adding class to my element
    divHead.appendChild(headText); // put the text inside the div 
    myElement.appendChild(divHead); // put the text inside the div 
    productParagraph.appendChild(pText); // put the text inside the div 
    myElement.appendChild(productParagraph); // put the text inside the div 
    productContainer.appendChild(myElement);
}
document.body.appendChild(productContainer);

