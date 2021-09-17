// map
console.log ("%c map" , "color:red;");
myArray=[1,2,3,4,5];
let myMap1 = myArray.map(function(element, index, array) {
    console.log("element : "+ element);
    console.log("index : "+ index);
    console.log("array : "+ array);
}, 10);
// ----------------------------
let myMap2 = myArray.map(function(element, index, array) {
   return element +element ;
});
console.log("my map2 : "+ myMap2);
// -----------------------------
let myMap3 = myArray.map((element) => {
    return element +element ;
 });
 console.log("my map3 : "+ myMap3);
 // -----------------------------
let myMap4 = myArray.map((e) => e*2);
 console.log("my map4 : "+ myMap4);
  // -----------------------------
function add (element) {
    return element + element ;
}
let myMap5 = myArray.map(add);
console.log("my map5 : "+ myMap5);
// -----------------------------
let swap = "MonthER";
let s=swap.split("").map((e) => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join("");
console.log(swap+" to "+ s);
// -----------------------------
let number = [10 , 5 , -9 , -20 , 15 ];
let invertedNumber = number.map(  (e) => -e );
console.log (number + " to " + invertedNumber);
// -----------------------------
let mix = "mo1n2th34er";
let ignoreNumber = mix.split("").map( (e) =>isNaN(parseInt(e)) ? e : "" ).join("") ;
console.log (mix+" to "+ignoreNumber );
