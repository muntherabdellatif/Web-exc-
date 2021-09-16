/*
loop control 
break : to stop the loop .
continue : stop this loop cycle 
label : used with break and continue to stop loop witch have the label
*/
console.log ("%c loop control", "color:red;") ;
let numbers = ["one" , "two" , "three" , "four" , "five"];
let color = ["red" , "green" , "black" , "white"];
mainLoop:for (let i=0 ;i<numbers.length; i++) {
    if (numbers[i]==="four"){
        break mainLoop;
    }
    if (numbers[i]=="two"){
        continue mainLoop;
    }
    console.log (numbers[i]);
    supLoop:for (let i=0 ;i<color.length ; i++) {
        if (color[i]==="green") {
            continue supLoop ;
        }
        console.log (`--${color[i]}`)
    }
}
// example :
console.log ("%c example ", "color:red;");
let product = ["keybourd", "mouse" , "pen" , "table" , "iphone"];
let count=5;
document.write (`<h1>show ${count} products</h1>`);
mainLoop:for (let i=0; i<count ; i++) {
    document.write(`<div>`);
    document.write (`<h3>[${i+1}] : ${product[i]} </h3>`);
    supLoop:for(let j=0; j<color.length ; j++){
        document.write (`<p> --${color[j]} </p>`);
    }
    document.write (`<p>${color.join(" | ")}</p>`)
    document.write(`</div>`);
}
// exc 
let Admins = ["Ahmed","Osama","Sayed","Stop" , "Monther"];
let employees = ["Amgad", "Samah" , "Ameer" ,"Omer" ,"Amany","Samia"];
mainloop:for (let i=0; i<Admins.length ; i++ ){
    document.write(`<div>`);
    if (Admins[i]==="Stop"){
        break mainloop ;
    }
    document.write(`<h1>${i+1} : ${Admins[i]}</h1>`);
    for ( let j=0 ;j<employees.length ; j++ ){
        if (Admins[i][0]===employees[j][0]){
            document.write(`<p>--${employees[j]}</p>`);
        }
    }
    document.write(`</div>`);
}