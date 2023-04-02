interface ButtonElement extends HTMLElement {
  dataset: {
    num: string;
  };
}

const inputScreen = document.querySelector(".screen") as HTMLInputElement;
const buttons = document.querySelectorAll(".btn") as NodeListOf<ButtonElement>;
const clear = document.querySelector(".btn-clear") as HTMLElement;
const equal = document.querySelector(".btn-equal") as HTMLElement;
let expression: string = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    inputScreen.value += `${button.dataset.num}`;
    if (button.dataset.num === "=") {
      try {
        const result: string = eval(expression);
        const logMessage: string = `${expression} = ${result}`;
        inputScreen.textContent = result.toString();
        expression = result.toString();
        inputScreen.value = `${logMessage}`;
      } catch (error) {
        const logMessage: string = `Invalid expression: ${expression}`;
        inputScreen.textContent = `${logMessage} = Invalid expression`;
        expression = "";
      }
    } else if (button.dataset.num === "C") {
      const logMessage: string = "Clear";
      inputScreen.value = "";
      inputScreen.textContent = "";
      expression = "";
    } else {
      inputScreen.textContent += button.dataset.num;
      expression += button.dataset.num;
    }
  });
});

const img = document.createElement('img')
img.setAttribute("id", "bg")
document.body.append(img)
const imgURL = new URL('../images/bg.jpg', import.meta.url)
img.src = imgURL.href;

