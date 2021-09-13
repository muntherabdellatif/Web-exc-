// string method 
console.log("%c string method", "color:red;");
let monther="  Monther  ";
console.log(monther.length);
console.log(monther[4]);
console.log(monther.charAt(4));
console.log(monther[11]);
console.log(monther.charAt(11));
console.log(monther);// => __monther__ (with spaces)
console.log(monther.trim());// => monther(without spaces)
console.log((monther.trim()).length);
console.log(monther.toLowerCase());
console.log(monther.toUpperCase());
// string method 2
console.log("%c string method 2", "color:red;");
let myName = "Monther saleh abdellatif" ;
console.log(myName.indexOf("h")); // to take the index of string (from start)
console.log(myName.lastIndexOf("h"));// to take the index of string (from end)
console.log(myName.slice(myName.indexOf("saleh"))); // take part of string from to 
console.log(myName.slice(-10)); // you can start from end
console.log(myName.split("")); // to make array from string 
console.log(myName.split(" "));
console.log(myName.split(" ",2));
// string method 3
console.log("%c string method 3", "color:red;");
console.log(myName.substring(7,13)); // take string from index 1 to index 2 (index 1 , index 2)
console.log(myName.substring(myName.length-10));
console.log(myName.substr(8,5)); // take 5 latter after index 8 (index , number of latter )
console.log(myName.substr(-16,5)); // you can start from end 
console.log(myName.includes("saleh")) ; // check if string include "saleh"
console.log(myName.includes("saleh", 10)) ; // check if string include "saleh" after index 10
console.log(myName.startsWith("M"));
console.log(myName.endsWith("abdellatif")); // check if last string is "abellatif"
console.log(myName.endsWith("r",7));  // check is last string after 6 step is "r"
// string challenge
console.log("%c string challenge 3", "color:red;");
let a="Elzero Web school";
console.log(a.charAt(2).toUpperCase()+a.slice(3,7)); // Zero 
console.log(a.split(" ",1)); //[Elzero]
console.log(a.substr(0,6)+a.substr(-7,7))//Elzero school using substr
console.log(a.substr(0,1).toLowerCase() + a.substr(1,a.length-2).toUpperCase() + a.substr(a.length-1).toLowerCase()); //eLZERO WEB SCHOOl 
