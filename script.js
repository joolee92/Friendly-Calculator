const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

let variables = { firstNum: undefined, secondNum: undefined, op: undefined };
//let firstNum, op, secondNum;

function compute(variables) {
    let first = Number(variables.firstNum);
    let second = Number(variables.secondNum);
    if (variables.op === "+") return add(first, second);
    if (variables.op === "-") return subtract(first, second);
    if (variables.op === "*") return multiply(first, second);
    if (variables.op === "/") return divide(first, second);
}

const display = document.querySelector(".display");
display.textContent = 0;

document.querySelectorAll(".num").forEach((num) => {
  num.addEventListener("click", pushNum);
});

function pushNum(e) {
  if (variables.op !== undefined && display.textContent === variables.firstNum.toString()) {
    display.textContent = e.target.innerText;
  } else {
    if (display.textContent === "0") display.textContent = e.target.innerText;
    else display.textContent += e.target.innerText;
  }
}

document.querySelector(".dec").addEventListener("click", function (e) {
  if (!display.textContent.includes(".")) {
    display.textContent += e.target.innerText;
  }
});

document.querySelectorAll(".operator").forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operator.textContent === "AC") {
      display.textContent = "0";
      Object.keys(variables).forEach((key) => {
        variables[key] = undefined;
      });
    }
    if (operator.textContent === "=") {
        if (variables.firstNum !== undefined && variables.op !== undefined) {
            variables.secondNum = display.textContent;
            display.textContent = variables.firstNum = compute(variables);

        }
    }
    if (operator.textContent !== "=" && operator.textContent !== "AC") {
      variables.op = operator.textContent;
      if (variables.firstNum === undefined) {
        variables.firstNum = display.textContent;
      }
    }
    console.log(variables.firstNum);
    console.log(variables.op);
    console.log(variables.secondNum);
  });
});

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
