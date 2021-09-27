// window.stop() ; // to stop loading screen content
//window.print(); // to print screen content
// window.focus(); // to focus on ather window

// scrolling 
setTimeout( function() {
    window.scrollTo(500,500);// go to position 500-x , 500-y 
},5000)
setInterval(function(){
    window.scrollBy(50,50);// go 50 step in x , and 50 step in y 
}, 1000);
// you can put more detail in scroll function like this :
// setTimeout( function() {
//     window.scrollTo({
//         left: 500 ,
//         top:50,
//         behavior : "smooth",
//     });// go to position 500-x , 500-y 
// },5000)
