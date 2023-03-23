document.addEventListener("DOMContentLoaded", function() {
    // Get the calculator div element
    const calculator = document.getElementById("calculator");
  
    // Get the display element
    const display = document.getElementById("display");
  
    // Get all the calculator buttons
    const buttons = calculator.getElementsByTagName("button");
  
    // Initialize the current calculation and result
    let currentCalculation = "";
    let result = "";
  
    // Add an event listener to each button
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        // Get the button value
        const buttonValue = buttons[i].innerHTML;
  
        // If the button is a number or decimal point
        if (!isNaN(buttonValue) || buttonValue === ".") {
          currentCalculation += buttonValue;
          display.value = currentCalculation;
        }
  
        // If the button is an operator
        else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
          currentCalculation += " " + buttonValue + " ";
          display.value = currentCalculation;
        }
  
        // If the button is AC (all clear)
        else if (buttonValue === "AC") {
          currentCalculation = "";
          result = "";
          display.value = "";
        }
  
        // If the button is DE (delete)
        else if (buttonValue === "DE") {
          currentCalculation = currentCalculation.slice(0, -1);
          display.value = currentCalculation;
        }
  
        // If the button is the equals sign
        else if (buttonValue === "=") {
          // Try to evaluate the current calculation
          try {
            result = eval(currentCalculation);
            display.value = result;
            currentCalculation = result;
          } catch (error) {
            // If there is an error, display "Error"
            display.value = "Error";
            currentCalculation = "";
            result = "";
          }
        }
      });
    }
  });
  