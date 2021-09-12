// data types :
console.log("monther saleh : is " + typeof("monther")); // string
console.log(100 + " : is a " + typeof(100) ) ; // number
console.log([10,5,12]+" : is a " + typeof([10,5,12])); // array (opject)
console.log(["monther","saleh","abdellatif"]+" : is a " + typeof(["monther","saleh","abdellatif"])); // array (opject)
console.log({name:"monther", age:26 , country:"jordan"} + " : is an " + typeof({name:"monther" , age:26 , country : "jordan"})); // opject (opject)
console.log(true +" : is a "+  typeof(true)); // boolean 
console.log( 0 +" : is a "+  typeof(true)); // boolean 
console.log(undefined + " : is a " + typeof (undefined)); // undefined
console.log(null + " : is a " + typeof (null)); // null (opject)
// variables :
var user = "monther" ,
  adg = 26;
console.log ( user + " : is a " + typeof(user) + " , " + adg + " : is a " + typeof(adg));
console.log ( " h1 : " + test );
test.innerHTML= " change by JS" ;
/*
var :
redeclare (you can redeclare the variables)
access the variable before declare ( you can )
variables scope drama ( add to window opject )
-----------------
let :
redeclare (you can not redeclare the variables)
access the variable before declare ( you can not )
variables scope drama ( not add to window opject )
-----------------
const :
redeclare (you can not redeclare the variables)
access the variable before declare ( you can not )
variables scope drama ( not add to window opject )
-----------------
*/

let a="monther";
let b="saleh";
let c="abdellatif";
let d=100;

console.log(`${a} ${b} ""
 ${c} ${d}`);
let head = "monther card";
let info = "this is test for monther head"
 let e =`
  <div class="main-head">
    <h2>${head}</h2>
    <p>${info}</p>
  </div>
 `;

 document.write(e);
//  ------------------------------------------
let cardTitle="my card 1" , cardDescription="this is card one content" , dateYear = 2021 , dateMonth =9 , dateDay=9 ;
let card=`
<div class="main-head">
<h2>${cardTitle}</h2>
<p>${cardDescription}</p> 
<p>${dateYear}/0${dateMonth}/0${dateDay}</p>
</div>
`;
document.write(card.repeat(4));
// --------------------------------
console.log(2**5); // 2^5
// ------------------------------
console.log (+"100" + 20); // add + befor text to convert it to number 
console.log(+0x1A); // to convert hex number to binary 
console.log(-true); // convert true to 1 then to -1 
// ------------------------------
let a1=10;
let b1="20";
let c1=80;
console.log(++a1 + +b1++ + +c1++ - +a1++);
console.log ( `a:${a1} ,b:${b1} ,c:${c1}`)
console.log(++a1 + -b1 + +c1++ - -a1++ + +a1);
console.log ( `a:${a1} ,b:${b1} ,c:${c1}`)
console.log(--c1 + +b1 + --a1 * +b1++ - +b1*a1 + --a1 - +true);
console.log ( `a:${a1} ,b:${b1} ,c:${c1}`)
