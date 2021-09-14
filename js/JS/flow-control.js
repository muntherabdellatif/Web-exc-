// condtion ? if true : if false ;
console.log("%c condtion ? if true : if false ;" , "color:red;")
let theName ="monther" ;
let gender = "male" ;
gender==="male" ? console.log("Mr") : console.log("Mrs") ;
let result = gender==="male" ? "Mr" :"Mrs";
document.write(result+" "+theName);
document.write("<br>");
document.write(`${result} ${theName}`);
// ----------------------------
// Nullish Coalescing Operator
console.log("%c Nullish Coalescing Operator" , "color:red;");
let price1=200;
let price2;
let price3=0;
console.log(`price 1 : ${price1 || 500}`);  // 500 if undefined or null or 0 or ""
console.log(`price 2 : ${price2 || 500}`);  // 500 if undefined or null or 0 or ""
console.log(`price 3 : ${price3 || 500}`);  // 500 if undefined or null or 0 or ""
console.log(`price 1 : ${price1 ?? 500}`);  // 500 if undefined or null 
console.log(`price 2 : ${price2 ?? 500}`);  // 500 if undefined or null 
console.log(`price 3 : ${price3 ?? 500}`);  // 500 if undefined or null 
//-------------------------------
// switch condition  ( same type and same value (like ===))
console.log("%c  switch condition" , "color:red;");
day = 2;
switch(day){
    case 0 :
        console.log("saturday");
        break;
    case 1 :
    case 2 :
        console.log("sunday or monday");
        break;
    default :
        console.log (" not saturday or sunday");
        break;
}