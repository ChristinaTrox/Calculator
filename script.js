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
  
  

  const display = document.getElementById("display");
  const digitButtons = document.querySelectorAll(".digit");
  const operatorButtons = document.querySelectorAll(".operator");
  const equals = document.querySelector(".equals");
  const clear = document.querySelector(".clear");

  /* Initial check of the functionality of the display
  let currentInput = "";
  function updateDisplay(digit) { 
   currentInput += digit;
   display.value = currentInput;
 } */

   let firstOperand = "";
   let operator = "";
   let secondOperand = "";
   let displayValue = '0';
   let waitingForSecondOperand = false;

    function updateDisplay() {

    display.value = displayValue;

     }

    digitButtons.forEach(button => {
      button.addEventListener( "click", () => {
      const digit = button.textContent;
       if (waitingForSecondOperand) {
         displayValue = digit === "." ? "0." : digit;
         waitingForSecondOperand = false;
       } else {
        if (digit === "." && displayValue,includes(".")) {
          return;
        }
         displayValue = displayValue === "0" && digit !== "." ? digit : displayValue + digit;
       }
       updateDisplay();
    });
   }); 

     operatorButtons.forEach(button => {
     button.addEventListener( "click", () => {
      if (firstOperand === "") { 
        firstOperand = displayValue;
        operator = button.textContent;
        waitingForSecondOperand = true;
   } else {
       secondOperand = displayValue;
       result = operate(operator, firstOperand, secondOperand);

       if (result.toString().includes(".")) 
        result = parseFloat(result.toFixed(3));
         
       displayValue = result;
       firstOperand = result;
       operator = button.textContent;
       waitingForSecondOperand = true;
       }
       displayValue = result;
     updateDisplay();
   });
  });

   equals.addEventListener( "click", () => {
         if ( firstOperand === "" || operator === "" || displayValue === "") {
           return; }
        secondOperand = displayValue;
        let result = operate(operator, firstOperand,secondOperand);
        if (result.toString().includes(".")) {
            result = parseFloat(result.toFixed(3)); }
        displayValue = result;
        updateDisplay(); 
        firstOperand = result;
        waitingForSecondOperand = true;
   });
  

   clear.addEventListener( "click", () => {
      firstOperand = "";
      secondOperand = "";
      operator = "";
      displayValue = "0";
      waitingForSecondOperand = false;
      updateDisplay();
   });



   