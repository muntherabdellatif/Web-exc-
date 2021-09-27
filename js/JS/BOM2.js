// location :-

// you can go to any section on your page :
// location.href ="/#(the-location)";
console.log (location.hostname); // => 127.0.0.1
console.log(location.host); // => 127.0.0.1:5500
console.log(location.protocol); // => http: || https: (secure)
console.log(location.hash);
// location.reload(); refesh your page
// location.replace("link") ; go to another link and remeve current link from history
// location.assign("link") ; go to another link and don't remeve current link from history

//------------------------------------
// open and close window :-

//window.close(); // close the window that oped using JS . 

// open ("url" , "_blank" or "_self" , window features , history )
// _blank to open in new tap 
// _self to open in this tap 

setTimeout(function() {
        window.open("https://www.youtube.com/watch?v=M7LO4aTXW_I&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=107","_blank","width=400,height=400","");
}, 2000);
console.log(history.length); // number of element in history 
// history.back  => go back in history
// history.forward => go forward in history
// history.go (go back or forward in history)