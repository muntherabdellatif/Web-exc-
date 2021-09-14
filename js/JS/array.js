// array methods for adding and removing"
console.log("%c array methods for adding and removing", "color:red;")
let montherArray=["one","two","three","four"];
montherArray.length=3; // let array size equal 3
console.log(montherArray); 
montherArray.unshift("zero","five"); // adding element in the start of the array
console.log(montherArray);
montherArray.push("six","seven"); //  adding element in the end of the array
console.log(montherArray);
let firstElement=montherArray.shift() ; // take first element in array
console.log ("first element :" + firstElement) ;
console.log(montherArray);
let lastElement=montherArray.pop() ; // take last element in array
console.log ("last element :" + lastElement) ;
console.log(montherArray);
// array search methods
console.log("%c array search methods", "color:red;");
console.log(montherArray.indexOf("one")); // give my the index of element "one" if it is exist . 
console.log(montherArray.indexOf("five",1)); // give my the index of element "five" if it is exist . (start from index 1 )
console.log(montherArray.lastIndexOf("one")); // give my the index of element "one" if it is exist . (strat search from the end)
console.log(montherArray.lastIndexOf("three",-3)); // give my the index of element "three" if it is exist . (start from the end - 3 )
console.log(montherArray.includes("four")); // check if element exist or not in array .
// array sorting
console.log("%c array sorting", "color:red;");
let myArray = ["monther" ,"10",5,9,100,200,"500","saleh"];
console.log(myArray);
console.log(myArray.sort());
console.log(myArray.reverse());
// array slicing
console.log("%c array slicing", "color:red;");
console.log(myArray.slice(1,4));
console.log(myArray.slice(-3));
console.log(myArray.slice(2,-3));
// array splice
console.log("%c array splice", "color:red;");
// (start , delete count , adding element )
myArray.splice(0,0,"abdellatif",99);
console.log(myArray);
myArray.splice(2,2);
console.log(myArray);
// array joining
console.log("%c array joining", "color:red;");
let myNowArray=myArray.concat(montherArray,"text");
console.log(myNowArray);
console.log(myNowArray.join(" ")); // to make string from my arry element 
console.log(myNowArray.join(" , ")); // to make string from my arry element 
console.log(myNowArray.join(" , ").toUpperCase());
// array challenge 
console.log("%c array challenge", "color:red;");
let zero =0 ;
let counter=3;
let my =["Ahmed","Mazero","Elham","osama","gamal, ameer"];
// ["osama","Elham","Mazero","Ahmed"];
let array1=my;
array1.length=4;
console.log(array1.reverse());
// ["Elham","Mazero"];
console.log(array1.slice(-counter,counter));
//  ["Elzero"];
let array2=(array1.slice(-counter,counter))[zero];
array2=array2.substr(zero,2);
console.log(array2);
let array3=array1.slice(-counter,counter).pop();
array3=array3.substr(2,4);
console.log(array3);
console.log(array2+array3);