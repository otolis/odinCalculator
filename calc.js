let operator = null;
let num1 = null;
let num2 = null;
let displayValue = "0";
const display = document.getElementById("display");

function updateDisplay() {
    display.textContent = displayValue;
}

function digitClick (digit) {
    if (displayValue === "0"){
        displayValue=digit;

    } else {
        displayValue += digit;
    }
    updateDisplay();
}


  function add (num1,num2){
    return num1+num2;
}

function sub (num1,num2){
    return num1-num2;
}

function multiply (num1,num2){
	return num1 * num2 ;
}
function divide (num1,num2){
    if (num2 === 0){
        return "Error";
    } 
    return num1 / num2 ;
}

function operate (operator,num1,num2) {
    switch (operator){
        case "+":
            return add(num1,num2);
        case "-":
            return sub(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
        default:
            return "Error : Invalid operator";
    }   
}

function operatorClick(op) {
    if (num1 === null) {
        num1 = parseFloat(displayValue);  
        displayValue = "0"; 
    } else {
        num2 = parseFloat(displayValue);  
        num1 = operate(operator, num1, num2);  
        displayValue = num1.toString();  
    }
    operator = op;  
    updateDisplay();  
}


function equalsClick() {
    if (num1 !== null && operator !== null) {
        num2 = parseFloat(displayValue);  
        displayValue = operate(operator, num1, num2).toString();  
        num1 = null;  
        operator = null;  
        updateDisplay();  
    }
}

function clearClick (){
    displayValue = "0"; 
    operator = null;
    num1 = null;
    num2 = null;
    updateDisplay();
  }




document.getElementById("zero").addEventListener("click", () => digitClick("0"));
document.getElementById("1").addEventListener("click", () => digitClick("1"));
document.getElementById("2").addEventListener("click", () => digitClick("2"));
document.getElementById("3").addEventListener("click", () => digitClick("3"));
document.getElementById("4").addEventListener("click", () => digitClick("4"));
document.getElementById("5").addEventListener("click", () => digitClick("5"));
document.getElementById("6").addEventListener("click", () => digitClick("6"));
document.getElementById("7").addEventListener("click", () => digitClick("7"));
document.getElementById("8").addEventListener("click", () => digitClick("8"));
document.getElementById("9").addEventListener("click", () => digitClick("9"));
document.getElementById("add").addEventListener("click", () => operatorClick("+"));
document.getElementById("sub").addEventListener("click", () => operatorClick("-"));
document.getElementById("mult").addEventListener("click", () => operatorClick("*"));
document.getElementById("divide").addEventListener("click", () => operatorClick("/"));

document.getElementById("equal").addEventListener("click", equalsClick);
document.getElementById("clear").addEventListener("click", clearClick);

