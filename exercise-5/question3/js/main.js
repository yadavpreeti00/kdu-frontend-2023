const buttons = document.querySelectorAll(".number,.operator");
const display = document.querySelector("#output");
const clear = document.querySelector(".clear");
let firstValue = "";
let secondValue = "";
let operator = "";

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

clear.addEventListener("click", () => {
  firstValue = "";
  secondValue = "";
  operator = "";
  display.innerText = "0";
});
