// JavaScript for Calculator
 

let result=document.getElementById("calc-input");

let calculate=(number)=>{
    result.value+=number;
}
let square=(number)=>{
    result.value*=number;
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("invalid");
    }
}

function clear(){
    result.value=" ";
}

function del(){
    result.value=result.value.slice(0, -1);
}

