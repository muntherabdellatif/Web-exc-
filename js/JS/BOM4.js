let up = document.getElementById("btn");
window.onscroll = function () {
    if (window.scrollY >= 600 ) {
        up.style.display="block";
    }else {
        up.style.display="none";
    }
}
up.onclick = function (){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior : "smooth",
    });
}