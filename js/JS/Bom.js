let stop =document.getElementById("stop");
let time= prompt("enter the time");
let counter = document.querySelector("h1 span");
 setTimeout ( function() {counter.innerHTML = `${time}`;} , 5000 , time );
let TimeOutCounter = setInterval(() => {
    counter.innerHTML = `${time}`;
    time--;
    if (time===-1){
        clearInterval(TimeOutCounter);
        location.href = "https://www.google.com/";
    }
}, 1000);
stop.onclick  = function (){
    clearInterval(TimeOutCounter);
}
//-------------------------------------
