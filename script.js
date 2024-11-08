var show = document.getElementById("display");
var op = document.getElementById("op");

function appendNumber(param){
  show.value += param;
}

function appendOperator(param){
//    show.value += param;
    if(show.value.at(-1) == "+" || show.value.at(-1) == "-" || show.value.at(-1) == "*" || show.value.at(-1) == "/"){
        var op = document.getElementById("op");
        op.Disabled;
  }else{
    show.value += param;
  }
}
function clearDisplay(){
    show.value = "";
}

function calculate(){
   var a = show.value = eval(show.value)
}
 