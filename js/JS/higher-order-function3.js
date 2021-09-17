console.log("%c for each" , "color:red;");
let allLis = document.querySelectorAll("ul li");
allLis.forEach( function(e){
    e.onclick = function () {
        allLis.forEach( function(el){
            el.classList.remove("active");
        });
        this.classList.add("active");
    };
});

