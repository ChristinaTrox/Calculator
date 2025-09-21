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
  a = Number(a);
  b = Number(b);
    if (operator === "+") return add(a, b);
    if (operator === "-") return subtract(a, b);
    if (operator === "*") return multiply(a, b);
    if (operator === "/") {
      if (Number(b) === 0) {
         return "Can't divide by 0";
      } else {
     return divide(a, b);
      }
      }
 } 
  
  

  const display = document.getElementById("display");
  const digitButtons = document.querySelectorAll(".digit");
  const operatorButtons = document.querySelectorAll(".operator");
  const equals = document.querySelector(".equals");
  const clear = document.querySelector(".clear");
  const backspaceButton = document.querySelector("#backspace");

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
   let justCalculated = false;

    function updateDisplay() {

    display.value = displayValue;

     }

    function handleDigit(digit) {
      if (justCalculated) {
        displayValue = "";
        justCalculated = false;
       }
       if (waitingForSecondOperand) {
         displayValue = digit === "." ? "0." : digit;
         waitingForSecondOperand = false;
       } else {
        if (digit === "." && displayValue.includes(".")) {
          return;
        }
         displayValue = displayValue === "0" && digit !== "." ? digit : displayValue + digit;
       }
       
       updateDisplay();
    };
   

     function handleOperator(clickedOperator) {

      if (firstOperand === "") { 
        firstOperand = displayValue;
        operator = clickedOperator;
        waitingForSecondOperand = true;
        return;
   } 
   if(waitingForSecondOperand) {
      operator = clickedOperator;
      return;
    }
       secondOperand = displayValue;
       let result = operate(operator, firstOperand, secondOperand);

       if (result.toString().includes(".")) 
        result = parseFloat(result.toFixed(3));
         
       displayValue = result;
       firstOperand = result;
       operator = clickedOperator;
       waitingForSecondOperand = true;
       
      
     updateDisplay();
   }
  

function handleEquals() {
     if (firstOperand === "" || operator === "" || displayValue === "") {
      return;
     }
     secondOperand = displayValue;
     let result = operate(operator, firstOperand, secondOperand);
     if (result.toString().includes(".")) {
      result = parseFloat(result.toFixed(3));
     }

     displayValue = result;
     updateDisplay();
     firstOperand = result;
     waitingForSecondOperand = true;
     justCalculated = true;
   }
   equals.addEventListener("click", handleEquals);
  

 function handleClear() {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    displayValue = "0";
    waitingForSecondOperand = false;
    updateDisplay();
   }
   clear.addEventListener("click", handleClear);

 function handleBackspace() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === "") {
      displayValue = "0";
    }
    updateDisplay();
   }
   backspaceButton.addEventListener("click", handleBackspace);

   document.addEventListener( "keydown", (event) => {
    const key = event.key;
    if("0123456789".includes(key)) {
      handleDigit(key);
    } else if ("+-*/".includes(key)){
         handleOperator(key);
    } else if (key === "=" || key === "Enter"){
        handleEquals();
    } else if (key === "Backspace") {
          handleBackspace();
    } else if (key.toLowerCase() === "c") {
         handleClear();
    }
   });

  digitButtons.forEach(button => {
    button.addEventListener("click", () => handleDigit(button.textContent));
  });

  operatorButtons.forEach(button => {
    button.addEventListener("click", () => handleOperator(button.textContent));
  });
 

  

   