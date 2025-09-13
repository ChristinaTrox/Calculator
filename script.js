// Pseudocode: 1.Make functions for each equation


function add(a, b) {
  return a + b;
}

function subtract(a , b) {
     return a - b;
}
 function multiply(a, b) {
    return a * b;
 }

 function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
 }

/* 2.Checking its functionality
 const firstNumber = 3;
 const operator = "+";
 const secondNumber = 5;

 add(firstNumber, secondNumber);
 console.log(add(firstNumber, secondNumber)); */

 function operate(operator, a, b) {
    if (operator === "+") return add(a, b);
    if (operator === "-") return subtract(a, b);
    if (operator === "*") return multiply(a, b);
    if (operator === "/") return divide(a, b);
 } 
  
  let currentInput = "";

  const display = document.getElementById("display");
  const digitButtons = document.querySelectorAll(".digit");

  function updateDisplay(digit) { 
   currentInput += digit;
   display.value = currentInput;
 }
    digitButtons.forEach(button => {
      button.addEventListener( "click", () => {
      updateDisplay(button.textContent);
    });
   });