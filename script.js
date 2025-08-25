const add = (a, b) => {return a + b};
const subtract = (a, b) => {return a - b};
const multiply = (a, b) => {return a * b};
const divide = (a, b) => {return a / b};

let firstNum, op, secondNum;

function operate(op, firstNum, secondNum) {
    return op(firstNum, secondNum);
}








/*

const display = document.getElementById("display");
const backspace = document.getElementById("backspace");
const buttons = document.querySelectorAll(".buttons button");

// Show or hide backspace based on display
function updateBackspace() {
  if (display.textContent !== "0") {
    backspace.classList.add("show");
  } else {
    backspace.classList.remove("show");
  }
}

// Handle calculator button clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        display.textContent = eval(display.textContent) || "0";
      } catch {
        display.textContent = "0";
      }
    } else {
      if (display.textContent === "0") {
        display.textContent = value === "." ? "0." : value;
      } else {
        display.textContent += value;
      }
    }

    updateBackspace();
  });
});

// Backspace functionality
backspace.addEventListener("click", () => {
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = "0";
  }
  updateBackspace();
});*/