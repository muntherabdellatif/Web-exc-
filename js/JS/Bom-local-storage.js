// set
// window.localStorage.setItem("color","red");
// window.localStorage.userName="monther";
// get 
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// remove 
// window.localStorage.removeItem("userName");
// clear 
// window.localStorage.clear(); // to remove all data on local storage 
//key 
// console.log(window.localStorage.key(0));
// console.log(window.localStorage.getItem(window.localStorage.key(0)));
// start storaging the color :
let colors =document.querySelectorAll(".color-control div");
let colorArea=document.querySelector(".color-area");
// changing local storage color and active class when click the colors
colors.forEach((col)=>{
    col.onclick=function(){
        colors.forEach((col)=>{
            col.classList.remove("active");
        })
        window.localStorage.color=this.dataset.color;
        this.classList.add("active");
        colorArea.style.backgroundColor=window.localStorage.color;
    }
})
// changing the color when start the page
colorArea.style.backgroundColor=window.localStorage.color;
// adding active class when start the page
colors.forEach((col)=>{
    if (col.dataset.color === window.localStorage.color){
        col.classList.add("active");
    }else {
        col.classList.remove("active");
    }
})
// set local storage color to red if no one set it before 
if (!window.localStorage.getItem('color')){
    window.localStorage.color="red";
}