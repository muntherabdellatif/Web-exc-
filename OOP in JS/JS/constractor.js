// create constractor 
function Phone (serial,color,price) {
    this.serial=serial;
    this.color=color;
    this.price=price;
    this.info = function() {
        return  `phone serial : ${this.serial} , phone color : ${this.color} , phone price : ${this.price}`;
    }
    this.setSerial = function (newSerial) {
        this.serial =newSerial;
    }
    this.setColor = function (newColor) {
        this.color =newColor;
    }
    this.setPrice = function (newPrice) {
        this.price =newPrice;
    }
}
let phone1 = new  Phone("123","black",500);
console.log(phone1);
let phone2 = new  Phone("456","white",700);
console.log(phone2);
let phone3 = Phone("456","white",700); // we not use "new" word when define constructor 
console.log(phone3);
console.log(window.serial); // becouse we not use "new" word when define constructor 

console.log(phone1 instanceof Phone ); 
console.log(phone3 instanceof Phone );
// or 
console.log(phone1.constructor === Phone ); 
// console.log(phone3.constructor  === Phone ); // error 

console.log("-".repeat(10));

let phone4 = new Phone(); // all property undefine
console.log(phone4);
console.log(phone2.info());
phone2.setSerial(951)
console.log(phone2.info());

console.log("-".repeat(10));

// built in constructor 
let opj1 = new Object ({a:5}); //  Object is a built in constructor 
let num1 = new Number (5); // Number is a built in constructor 
// any number you create is an object on Number constructor
let str1 = new String ("text"); // String is a built in constructor 
// any string you create is an object on String constructor
let str2 = "text2";
console.log(str2.constructor); // String
