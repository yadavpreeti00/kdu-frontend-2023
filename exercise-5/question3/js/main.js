
//run the code once the DOM has finished loading
document.addEventListener("DOMContentLoaded", function() {

const buttons = document.querySelectorAll(".number,.operator");
const display = document.querySelector("#output");
const clear = document.querySelector(".clear");
let firstValue = "";
let secondValue = "";
let operator = "";


//event listener for numbers and operators
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;
    if (!isNaN(value) || value === ".") {
      if (operator === "") {
        firstValue += value;
        display.innerText = firstValue;
      } else {
        secondValue += value;
        display.innerText = secondValue;

        // Evaluate the expression
        firstValue = parseFloat(firstValue);
        secondValue = parseFloat(secondValue);
        switch (operator) {
          case "+":
            display.innerText = firstValue + secondValue;
            firstValue = firstValue + secondValue;
            secondValue = "";

            break;
          case "-":
            display.innerText = firstValue - secondValue;
            firstValue = firstValue - secondValue;
            secondValue = "";

            break;
          case "x":
            display.innerText = firstValue * secondValue;
            firstValue = firstValue * secondValue;
            secondValue = "";

            break;
          case "/":
            display.innerText = firstValue / secondValue;
            firstValue = firstValue / secondValue;
            secondValue = "";

            break;

          case "mod":
            display.innerText = firstValue % secondValue;
            firstValue = firstValue % secondValue;
            secondValue = "";

            break;
        }
      }
    } else {
      operator = value;
    }
  });
});

//clear button
clear.addEventListener("click", () => {
  firstValue = "";
  secondValue = "";
  operator = "";
  display.innerText = "0";
});
});