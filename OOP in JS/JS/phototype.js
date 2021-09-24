function Phone (serial,color,price, screenSize) {
    this.sreenSize = screenSize;
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
// adding property to constructor using prototype
Phone.prototype.test="phone test";
let phone1 = new  Phone("123","black",500,1000);
console.log(Phone.prototype); 
// adding method to constructor using prototype
Phone.prototype.setScreenSize = function(newSize) {
    this.sreenSize=newSize;
}
console.log(phone1);
phone1.setScreenSize(2000);
console.log(phone1);

// making method for any string (zFill) 

String.prototype.zFill = function (width) {
 let Result = this ;
    while (Result.length < width) {
        Result=`0${Result}`
    }
    return Result.toString();
};
console.log("345".zFill(4));
console.log("7835".zFill(4));
console.log("35".zFill(4));

// Prototype Chain
// js function is opject