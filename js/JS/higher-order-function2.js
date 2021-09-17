// filter 
console.log ("%c filter", "color:red;");
let frindName = ["Ahmad" , "Osama" , "Ammer" , "Monther" , "Amgad"];
let startWithA = frindName.filter((e) =>e[0]=="A");
console.log ("frind name start with A is :" + startWithA);
// ----------------------------
let numbers = [1 , 7 , 25 , 8 , 12 , 17 ,14];
let evenNumber = numbers.filter(e => e%2==0);
console.log(numbers + " | after filter even number : " + evenNumber);
//-----------------------------
let sentance = "I Love Foood Code Too Playing Much";
let smallSentance =sentance.split(" ").filter( e => e.length<=4).join(" ");
console.log(sentance+" ( to ====> )" +smallSentance);
// ----------------------------
let mix = "A13BS2ZX";
let p=1;
let product = mix.split("").filter(e=> !isNaN(parseInt(e))).map((e) => e*e );
console.log(product);
// ---------------------------------
// reduce 
console.log ("%c reduce", "color:red;");
let sum = numbers.reduce( function (acc,current, index,array){
    console.log(`acc : ${acc}`);
    console.log(`current : ${current}`);
    console.log(`index : ${index}`);
    console.log(`array : ${array}`);
    console.log(`acc + current : ${acc +current }`);
    console.log(`**************************************`);
    return acc +current ;
})
console.log(`sum: ${sum}`);
//---------------------------------
let sum2 = numbers.reduce((acc,current) =>acc +current )
console.log(`sum2: ${sum2}`);
//----------------------------------
let theBiggest = ["Monther" , "Saleh" ,"ibramih" , "Abdellatif"];
let biggest = theBiggest.reduce( (acc,current) => acc.length>current.length ? acc : current );
console.log (`${theBiggest}( to=> ) ${biggest}`);
// ---------------------------------
let montherWithAt = ["M" , "@" , "O" , "N" , "@" , "@" , "T" , "H" , "E" , "@" , "R"] ;
let monther = montherWithAt.filter( e=> e!=="@").reduce((a,b) => a +b );
console.log(monther);
// ---------------------------------
