const myObject = {
    a:1,
    b:2,
};
Object.defineProperty(myObject,"c",{
    writable : false, // you can not change the value of data
    enumerable: false , // you can not reach by loop in object
    configurable : false , // you can not delete object
    // and you can not redefine the property
    value : 3,
});

// writable
myObject.c=500; // you can not change the value of data
console.log(myObject.c);
console.log("-".repeat(15));

//enumerable
for (let prop in myObject){ // you can not reach "c" by loop in object
    console.log(prop,myObject[prop]);
}
console.log("-".repeat(15));
console.log(Object.getOwnPropertyNames(myObject)); // enumerable not effect
console.log("-".repeat(15));

//configurable
// you can not delete object :
console.log( delete myObject.c);

// and you can not redefine the property :
/*
Object.defineProperty(myObject,"c",{    // error
    writable : true, 
});
*/
console.log("-".repeat(15));

// you can redefine the property for any variabile not defined before
Object.defineProperty(myObject,"a",{
    writable : false, // you can not change the value of data
    enumerable: true , // you can not reach by loop in object
    configurable : false , // you can not delete object
    // and you can not redefine the property
    value : 1,
});
//the defulte value
Object.defineProperty(myObject,"d",{
    // the default value for writable , enumerable and configurable is false
    value : 5,
});
console.log(Object.getOwnPropertyDescriptor(myObject,"d"));
// the default value for writable , enumerable and configurable is true when not use ( defineProperty )
console.log(Object.getOwnPropertyDescriptor(myObject,"b"));
console.log(myObject);
console.log(Object.keys(myObject)); // get the property the have enumerable = true
console.log("-".repeat(15));

// define more than one proparty :
Object.defineProperties(myObject, {
    f:{
        writable : false,
        enumerable: true ,
        configurable : false ,
        value:20,
    },
    g:{
        writable : true,
        enumerable: true ,
        configurable : false ,
        value:50,
    },
});
console.log(Object.keys(myObject));
console.log(myObject);