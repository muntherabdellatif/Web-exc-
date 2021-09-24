// window.location.reload(); // to reload the page 
// window.location.replace(); // open new page by the link of it 
let user = {
    1 : "one" ,
    "one-" : 1 ,
    firstName :"Monther",
    LastName :"Abdellatif",
    address: {
        jor : "Amman" ,
        egp : "Giza" ,
    },
    getFullName : () => `Full Name : ${user.firstName} ${user.LastName}`
    
}
console.log(user.firstName);
console.log(user["LastName"]);
console.log(user.getFullName());
console.log(user.address.jor);
console.log(user["address"]["egp"])
console.log("-".repeat(10));
//----------------------------------------------------
/*
Dot Notation vs Bracket Notation 
Dot Notation :
 1) you can not use special char ( -  ! ..ect ).
 2) can not start with number .
Bracket Notation :
 1) you can use special char ( -  ! ..ect ) .
 2) can start with number .
*/
console.log (user["one-"]);
console.log(user[1]);
console.log("-".repeat(10));
//------------------------------------------------------
// Defining Object With New Keyword
let person = new Object ;
person.firstName = "monther";
person.LastName = "Abdellatif";
person["age"] = 27 ;
person.getFullName = function () {
    return  `Full Name : ${this.firstName} ${this.LastName}`;
} 
console.log(person.getFullName());
console.log("-".repeat(10));
//------------------------------------------------------
// Defining Object With Object.create
let emploee = Object.create(person);
emploee.firstName = "Ali";
emploee.LastName = "Mohammad";
console.log(emploee.getFullName());
emploee.salary=700;
console.log("-".repeat(10));
//------------------------------------------------------
// Defining Object With Object.assign
const target = {
    prop1 :"value" ,
};
Object.assign(target,person,user , {prop6: "value6"});
console.log(target); 
const target2 = Object.assign({},target,{prop7:"value7"});
console.log (target2);
console.log("-".repeat(10));
// Delete Operator
console.log (delete user.LastName)  ; // delete property not the Opject 
console.log ("delete operation : "); 
console.log (user);
console.log (user.LastName);

console.log("-".repeat(10));

let myName = "monther";
console.log(myName);
console.log(delete myName);
console.log(myName);

console.log("-".repeat(10));

let freezedOpj = Object.freeze({age:25});
console.log(freezedOpj);
console.log(freezedOpj.age);
console.log(delete freezedOpj.age) ; // you can not delete property from freezed object
console.log(freezedOpj);
console.log(freezedOpj.age);

console.log("-".repeat(10));

const emptyObj = {};
Object.defineProperty(emptyObj , "property" , {value : 1 , configurable:false}); 
console.log(emptyObj);
console.log(emptyObj.property);
console.log(delete emptyObj.property);// you can not delete the property with  configurable:false
console.log(emptyObj);
console.log(emptyObj.property);

//-----------------------------------------
//for in loop 
console.log("-".repeat(10));
let newUserData = "";
let newUser = {
    1 : "one" ,
    "one-" : 1 ,
    firstName :"Monther",
    LastName :"Abdellatif",
}
for (let info in newUser) {
    console.log(info +  " : " + newUser[info]);
    newUserData += `<div>${newUser[info]}</div>`;
}
document.getElementsByClassName("info")[0].innerHTML = newUserData;