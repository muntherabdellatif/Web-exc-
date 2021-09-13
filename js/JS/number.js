// method to writting the numbers 
console.log("%c method to writting the numbers","color:red;");
console.log(1_000_000);
console.log(1e6);
console.log(1*10**6);
// max number in JS
console.log(Number.MAX_SAFE_INTEGER);
//  
console.log("%c numbers methods ","color:red;");
console.log((100).toString());
console.log(100..toString());
console.log((22/7).toFixed(3));
console.log(Number("100"));
console.log(Number("100 monther"));
console.log(+("100"));
console.log(+("100 monther"));
console.log(parseInt("100"));
console.log(parseInt("100 monther"));
console.log(Number.isInteger(100.5));
console.log(Number.isNaN("100"));
console.log(Number.isNaN(100.5));
console.log(Number.isNaN(+("100 monther")));
//math opject 
console.log("%c math opject ","color:red;");
console.log(Math.round(99.2)); // => 99
console.log(Math.round(99.6)); // => 100
console.log(Math.ceil(99.2)); // => 99
console.log(Math.ceil(99.6)); // => 99
console.log(Math.floor(99.2)); // => 100
console.log(Math.floor(99.6)); // => 100
console.log(Math.min(10,11,-1,4,5,7)); // => -1
console.log(Math.max(10,11,-1,4,5,7)); // => 11
console.log(((Math.random())*1000).toFixed(0));
console.log(Math.trunc(100.5)); // make the number int => 100
// challenge 
console.log("%c challenge: ","color:red;");
let a = 1_00;
let b =2_00.5;
let c = 1e2;
let d =2.4;
console.log(parseInt(Math.min(a,b,c,d))); // min number as int
console.log(a**(parseInt(d))); // 10000 from a and d
console.log(parseInt(d)); // 2 from d
console.log(Math.round(d)); // 2 from d
console.log(Math.floor(d)); // 2 from d
console.log((d).toFixed()); // 2 from d













