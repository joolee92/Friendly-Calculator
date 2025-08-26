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
    display.textContent += e.target.textContent;
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
