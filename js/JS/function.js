function add (...number){ // ...number => array of element 
    let sum=0;
    for (let i=0;i<number.length;i++){
        sum+=number[i];
    }
    return sum ;
}
console.log (add(10,15,17,55));
// ------------------------
function showInfo ( name="unknown" , age="unknown" , rate=0 , show=1,...skills) {
    document.write(`<div>`);
    document.write(`<h2>Welcome ${name} </h2>`);
    document.write(`<p>age : ${age} years </p>`);
    document.write(`<p>Rate ${rate}$ </p>`);
    if (show===1) {
        if (skills.length === 0) {
            document.write(`<p>No skills to display</p>`);
        } else {
            document.write(`<p>skills : ${skills.join(" | ")}</p>`);
        }
    } else {
        document.write(`<p>skills is hidden.</p>`);
    }
    document.write(`</div>`);
}
showInfo ("Monther Saleh" , 26 , 20 , 1 , "HTML" , "CSS" ,"Bootstrap" , "JS"); 
showInfo ("Mohammad Omer" , 26 , 20 , 1 ); 
showInfo ("Anas Osama" , 26 , 20 , 0 , "HTML" , "CSS" ,"Bootstrap" , "JS"); 
// -------------------------------------------
// random arguments function challenge 
document.write(`<hr>`);
function randomInfo (...info ) {
    let name , age , hire ;
    for(let i =0 ;i<3;i++){
        typeof (info[i])===typeof("a") ? name=info[i] : typeof(info[i])===typeof(10) ? age=info[i] : hire=info[i] ;
    }
    document.write(`<div>`) ;
    document.write(`<h1>hellow ${name} </h1>`) ;
    document.write(`<p>age : ${age} </p>`) ;
    if (hire===false){
        document.write(`<p>you are not available for hire</p>`) ; 
    } else {
        document.write(`<p>you are available for hire</p>`) ; 
    }
    document.write(`</div>`) ;
}
randomInfo (26 , "monther" , true);
randomInfo ("mohammad" , 22 , false);
randomInfo (false , "ruba", 25 ) ;
// -------------------------------------------
// 
document.write(`<hr>`);