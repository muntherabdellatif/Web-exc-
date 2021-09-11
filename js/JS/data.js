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