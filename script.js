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

let variables = { firstNum: "", secondNum: "", op: undefined };
let partTwo = false;
let computed;

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
document.querySelector(".dec").addEventListener("click", function (e) {
  if (!display.textContent.includes(".")) {
    display.textContent += e.target.innerText;
  }
});
document.querySelector(".clear").addEventListener("click", () => {
  clear(variables);
});

document.querySelector(".equals").addEventListener("click", () => {
  if (variables.secondNum !== "") {
    computed = compute(variables);
    display.textContent = computed;
    variables.firstNum = computed;
    variables.secondNum = "";
    variables.op = undefined;
  }
});

function pushNum(e) {
  if (variables.op === undefined) {
    if (computed !== undefined) {
      variables.firstNum = e.target.textContent;
      computed = undefined;
      display.textContent = `${variables.firstNum}`;
    } else {
      variables.firstNum += e.target.textContent;
      display.textContent = variables.firstNum;
    }
  } else {
    variables.secondNum += e.target.textContent;
    display.textContent = `${variables.firstNum} ${variables.op} ${variables.secondNum}`;
  }

  console.log(
    `Num btn -> ${variables.firstNum} ${variables.op} ${variables.secondNum}`
  );
  console.log(
    `e.target: ${e.target.textContent} -> display: ${display.textContent}`);
  console.log("--------------------------------------");
}

document.querySelectorAll(".operator").forEach((oper) => {
  oper.addEventListener("click", () => {
    if (variables.secondNum !== "") {
      computed = compute(variables);
      display.textContent = computed;
      variables.firstNum = computed;
      variables.secondNum = "";
    }
    variables.op = oper.textContent;
    display.textContent = `${variables.firstNum} ${variables.op}`;

    console.log(`Operator btn -> ${variables.firstNum} ${variables.op} ${variables.secondNum}`);
    console.log(`display: ${display.textContent}`);
    console.log("--------------------------------------");
  });
});

function clear(variables) {
  display.textContent = "0";
  variables.firstNum = variables.secondNum = "";
  variables.op = undefined;
}
/*
document.querySelectorAll(".operator").forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operator.textContent !== "=" && operator.textContent !== "AC") {
        if (variables.firstNum === undefined) {
            variables.op = operator.textContent;
            variables.firstNum = display.textContent;
            display.textContent = `${variables.firstNum} ${operator.textContent} `;
        } else {

                if (display.textContent === `${variables.firstNum} ${variables.op} `) {
                    variables.op = operator.textContent;
                    display.textContent = `${variables.firstNum} ${variables.op} `;
                } else {
                    variables.secondNum = display.textContent.slice(display.textContent.indexOf(variables.op)+2, display.textContent.length);
                    computedVariables = compute(variables);
                    display.textContent = variables.firstNum = computedVariables;
                    variables.secondNum = undefined;
                    variables.op = operator.textContent;
                    display.textContent = `${variables.firstNum} ${operator.textContent} `;
                }

        }
    }
    if (operator.textContent === "AC") {
        clear(variables);
    }
    if (operator.textContent === "=" && variables.firstNum !== undefined && variables.op !== undefined && display.textContent !== `${variables.firstNum} ${variables.op} `) {
        variables.secondNum = display.textContent.slice(display.textContent.indexOf(variables.op)+2, display.textContent.length);
        computedVariables = compute(variables);
        display.textContent = variables.firstNum = computedVariables;
        variables.secondNum = undefined;
    }
    console.log(`Operator btn -> ${variables.firstNum} ${variables.op} ${variables.secondNum}`);
    console.log(`display: ${display.textContent}`);
    console.log('--------------------------------------');
  });
});
*/
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
