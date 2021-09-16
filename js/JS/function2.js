// anonymous function :
let sum = function (num1 , num2) {
    return (num1+ num2);
};
console.log(sum(1,5));
document.getElementById("show").onclick = function () {
    console.log("show");
}
// Arrow function 
let sup = (a,b) => {
    return a-b ;
};
/*
you can write it like : (for one line function )
let sup = (a,b) => a-b ;
*/
console.log(`10-5=${sup(10,5)}`)