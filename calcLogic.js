// Logic variables
let inp1 = "";
let opr = "";
let outp;
let inp2 = "";

// Function Buttons
let clear = document.querySelector("#clear");
let scr = document.querySelector(".screen");
let divide = document.querySelector("#divide");
let mul = document.querySelector("#multiplay");
let sub = document.querySelector("#subtract");
let add = document.querySelector("#add");
let equalsTo = document.querySelector("#equalsTo");
let occ = 1;

clear.addEventListener("click",()=>{
    scr.innerText = "";
    occ = 1;
    opr = "";
    inp1 = "";
    inp2 = "";
});
divide.addEventListener("click",()=>{
    occ = 1;
    scr.innerText = scr.innerText + " /";
});
mul.addEventListener("click",()=>{
    occ = 1;
    scr.innerText = scr.innerText + " x";
});
sub.addEventListener("click",()=>{
    occ = 1;
    scr.innerText = scr.innerText + " -";
});
add.addEventListener("click",()=>{
    occ=1;
    scr.innerText = scr.innerText + " +";
});

equalsTo.addEventListener("click",()=>{
    let shif = 1;
    for(let i of scr.innerText){
        if(i==="+" || i==="-" || i==="x" || i==="/"){
            opr = i;
            shif = 0;
            continue;
        }else if(shif){
            inp1 = inp1 + i.trim();
        }else{
            inp2 = inp2 + i.trim();
        }
    }
    scr.innerText = operations(inp1,inp2,opr);
    occ = 1;
    opr = "";
    inp1 = "";
    inp2 = "";
});



// Numbers
let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let dot = document.querySelector("#dot");


zero.addEventListener("click",()=>{
    if(occ){    
        scr.innerText = scr.innerText + " 0";
        occ=0;
    }else{
        scr.innerText = scr.innerText + "0";
    }
});
one.addEventListener("click",()=>{
    if(occ){    
        scr.innerText = scr.innerText + " 1";
        occ=0;
    }else{
        scr.innerText = scr.innerText + "1";
    }
});
two.addEventListener("click",()=>{
    if(occ){    
        scr.innerText = scr.innerText + " 2";
        occ=0;
    }else{
        scr.innerText = scr.innerText + "2";
    }
});
three.addEventListener("click",()=>{
    if(occ){    
        scr.innerText = scr.innerText + " 3";
    }else{
        scr.innerText = scr.innerText + "3";
        occ=0;
    }
});
four.addEventListener("click",()=>{
    if(occ){    
        scr.innerText = scr.innerText + " 4";
        occ=0;
    }else{
        scr.innerText = scr.innerText + "4";
    }
});
five.addEventListener("click",()=>{
    if(occ){    
        scr.innerText = scr.innerText + " 5";
        occ=0;
    }else{
        scr.innerText = scr.innerText + "5";
    }
});
six.addEventListener("click",()=>{
    if(occ){    
        scr.innerText = scr.innerText + " 6";
        occ=0;
    }else{
        scr.innerText = scr.innerText + "6";
    }
});
seven.addEventListener("click",()=>{
    if(occ){    
        scr.innerText = scr.innerText + " 7";
        occ=0;
    }else{
        scr.innerText = scr.innerText + "7";
    }
});
eight.addEventListener("click",()=>{
    if(occ){    
        scr.innerText = scr.innerText + " 8";
        occ=0;
    }else{
        scr.innerText = scr.innerText + "8";
    }
});
nine.addEventListener("click",()=>{
    if(occ){    
        scr.innerText = scr.innerText + " 9";
        occ=0;
    }else{
        scr.innerText = scr.innerText + "9";
    }
});

dot.addEventListener("click",()=>{
    scr.innerText = scr.innerText + ".";
    occ=0;
});

const operations = (inp1,inp2,opr)=>{
    inp1 = Number(inp1);
    inp2 = Number(inp2);
    if(opr==="+"){
        return inp1 + inp2;
    }else if(opr==="-"){
        return inp1 - inp2;
    }else if(opr==="/"){
        return inp1 / inp2;
    }else if(opr==="x"){
        return inp1 * inp2;
    }
}
