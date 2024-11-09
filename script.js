var show = document.getElementById("display");
var op = document.getElementById("op");

var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");


function appendNumber(param){
  show.value += param;
}

function plusOperator(param){
//    show.value += param;
    if(show.value.at(-1) == "+"){
     var b = plus.Disabled;
   }else{
    show.value += param;
  }
}

function minusOperator(param){
//    show.value += param;
    if(show.value.at(-1) == "-"){
      minus.Disabled;
   }else{
    show.value += param;
  }
}

function multiplyOperator(param){
//    show.value += param;
    if(show.value.at(-1) == "*"){
      multiply.Disabled;
   }else{
    show.value += param;
  }
}

function divideOperator(param){
//    show.value += param;
    if(show.value.at(-1) == "/"){
      divide.Disabled;
   }else{
    show.value += param;
  }
}
function clearDisplay(){
    show.value = "";
}

function calculate(){
  try {
    var a = show.value = eval(show.value)    
} catch (error) {
  show.value = "Syntax Error";
}
  }
 