let userName =document.querySelector(".login .name");
let password =document.querySelector(".login .password");
console.log(userName);
userName.onblur=function () {
    window.sessionStorage.name=this.value ;
}
password.onblur=function () {
    window.sessionStorage.password=this.value ;
}