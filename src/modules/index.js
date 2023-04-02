"use strict";
const inputScreen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".btn-clear");
const equal = document.querySelector(".btn-equal");
let expression = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        inputScreen.value += `${button.dataset.num}`;
        if (button.dataset.num === "=") {
            try {
                const result = eval(expression);
                const logMessage = `${expression} = ${result}`;
                inputScreen.textContent = result.toString();
                expression = result.toString();
                inputScreen.value = `${logMessage}`;
            }
            catch (error) {
                const logMessage = `Invalid expression: ${expression}`;
                inputScreen.textContent = `${logMessage} = Invalid expression`;
                expression = "";
            }
        }
        else if (button.dataset.num === "C") {
            const logMessage = "Clear";
            inputScreen.value = "";
            inputScreen.textContent = "";
            expression = "";
        }
        else {
            inputScreen.textContent += button.dataset.num;
            expression += button.dataset.num;
        }
    });
});
