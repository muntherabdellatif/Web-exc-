//adding nav bar contant
// main div
let navbar = document.createElement ("div");
navbar.className = "navbar" ;
document.body.appendChild(navbar);
// left side
let leftSide =document.createElement ("div");
leftSide.className = "left" ;
navbar.appendChild(leftSide);
let leftSideHeader =document.createElement ("h2");
let leftSideHeaderText =document.createTextNode("Elzero");
leftSideHeader.appendChild(leftSideHeaderText);
leftSide.appendChild(leftSideHeader);
// right side
let rightside =document.createElement ("div");
rightside.className = "right" ;
navbar.appendChild(rightside);
let linkList =document.createElement ("ul");
rightside.appendChild(linkList);
let linkListName = ["Home" , "About" , "Service" , "Contant"];
for (let i=0; i<4 ; i++ ){
    let link =document.createElement("li");
    let linkname =document.createTextNode(linkListName[i]);
    link.appendChild(linkname);
    linkList.appendChild(link);
}
let link =document.querySelectorAll(".navbar .right ul li");
// navbar style
navbar.style.cssText = " display: flex;justify-content: space-between;margin-left: 10px;margin-right: 10px;";
leftSideHeader.style.cssText ="margin-top: 5px;margin-bottom: 5px;color: green;";
linkList.style.cssText ="margin-top: 5px;margin-bottom: 5px;";
for (let i=0; i<4 ; i++) {
    link[i].style.cssText = "list-style: none;  display: inline-block;margin-left: 20px;";
}
//-------------------------------------------------------------------------
// products area 
let productArea =document.createElement("div");
productArea.className= "product-area";
document.body.appendChild(productArea);
// products area products
for (let i=0;i<15;i++) {
// products div
let product = document.createElement ("div"); 
product.className= "product";
productArea.appendChild(product);
document.querySelectorAll(".product")[i].style.cssText="background-color: white;";
// product head
let productHead =document.createElement ("h3");
let productHeadText =document.createTextNode(`${i+1}`);
productHead.appendChild(productHeadText);
product.appendChild(productHead);
document.querySelectorAll(".product h3")[i].style.cssText="margin: 1.7px;padding: 1.7px;";
// product p
let productP =document.createElement ("p");
let productPText =document.createTextNode(`product`);
productP.appendChild(productPText);
product.appendChild(productP);
document.querySelectorAll(".product p")[i].style.cssText="margin: 1.7px;padding: 1.7px;";
}
// products area style
document.body.style.margin="0px";
productArea.style.cssText = " display: grid;  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));text-align: center;background-color: grey;gap: 10px;padding: 10px;";
//-------------------------------------------------------------------------
// footer
let myFooter =document.createElement("div");
myFooter.className="footer";
document.body.appendChild(myFooter);
// footer p
let footerp =document.createElement ("p");
let footerPText =document.createTextNode(`Copyright 2021`);
footerp.appendChild(footerPText);
myFooter.appendChild(footerp);
// footer styling
myFooter.style.cssText="background-color: green;color: white;text-align: center;padding: 20px;"
document.querySelector(".footer p").style.cssText = "margin: 0px;";
