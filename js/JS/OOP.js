// creating poject
console.log ("%ccreating poject","color:red;")
let user = {
    //properities
    userName: " monther" ,
    age : 27 ,
    "countery of" : "jordan" ,
    //methods 
    sayHellow : function () {
        return "Hellow";
    },
};
console.log(user.age);
console.log(user.userName);
console.log(user["countery of"]);
console.log(user.sayHellow());
//----------------------------------------
let studant = {
    userName: " monther" ,
    age : 26 ,
    available : true ,
    address : {
        Jordan : "Amman" ,
        Egypt : {
            one : "Cairo" ,
            two : "Giza" ,
        } ,
    } ,
    checkAv : function () {
        if (studant.available=== true){
            return "free for work" ;
        }else {
            return "not free for work" ;
        }
    }
}
console.log (studant.address);
console.log (studant.address.Egypt.one);
console.log (studant["address"]["Egypt"]["one"]);
studant.mark = 20;
console.log(studant.mark);
// ------------------------------
let monther = new Object() ;
monther.Name = "monther abdellatif";
monther.age = 26 ;
monther.logg = function () {
    return "i am monther";
}
console.log (monther.Name);
console.log (monther.age);
console.log (monther.logg());
// --------------------------------
// this 
console.log ("%cthis","color:red;");
document.getElementById("bt").onclick = function () {console.log(this);}; // this => button 
//----------------
let agecalc = {
    age :28 ,
    ageInDay : function () {
        return this.age*365 ; // this => agecalc
    },
};
console.log (agecalc.ageInDay());
//-----------------
// create object 
console.log ("%ccreate object ","color:red;");
let opjCopy = Object.create(agecalc) ; // create an object copy of agecalc object . (same parameter)
opjCopy.age = 26;
console.log (opjCopy.ageInDay());
//-----------------
// Assign  object 
console.log ("%cAssign  object ","color:red;");
let sumOpj = Object.assign(studant,user,{price:200,length:189});
console.log(sumOpj);