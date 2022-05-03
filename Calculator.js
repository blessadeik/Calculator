// JavaScript for Calculator
 

let calc=document.getElementById("calc-input");

let calculate=(number)=>{
    calc.value+=number;
}
let square=(number)=>{
    calc.value*=number;
}

let Calc=()=>{
    try{
        calc.value=eval(calc.value)
    }
    catch(err){
        calc.value=("invalid");
    }
}

function clear(){
    calc.value=("0");
}


function del(){
    calc.value=calc.value.slice(0, -1);
}