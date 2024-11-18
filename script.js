var show = document.getElementById("display");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");


function appendNumber(param){
  show.value += param;
}

function Operator(param){
//    show.value += param;
    if(show.value.at(-1) == "+" || show.value.at(-1) == "-" || show.value.at(-1) == "*" || show.value.at(-1) == "/"){
     show.value = show.value.slice(0, -1) + param;
     
     
   }else{
    show.value += param;
  }
}

function Cross(){
  show.value = show.value.slice(0,-1);
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






























































































































































































// var show = document.getElementById("display");

// function appendNumber(param) {
//     // Append the number to the display
//     show.value += param;
// }

// function handleOperator(operator) {
//     // Get the current value in the display
//     let currentValue = show.value;

//     // If the last character is an operator, replace it with the new operator
//     if (currentValue && /[\+\-\*\/]/.test(currentValue.at(-1))) {
//         show.value = currentValue.slice(0, -1) + operator;
//     } else {
//         // Otherwise, append the operator to the display
//         show.value += operator;
//     }
// }

// function plusOperator() {
//     handleOperator('+');
// }

// function minusOperator() {
//     handleOperator('-');
// }

// function multiplyOperator() {
//     handleOperator('*');
// }

// function divideOperator() {
//     handleOperator('/');
// }

// function clearDisplay() {
//     show.value = "";
// }

// function calculate() {
//     try {
//         // Evaluate the expression in the display
//         var result = eval(show.value);
//         show.value = result;
//     } catch (error) {
//         show.value = "Syntax Error";
//     }
// }
