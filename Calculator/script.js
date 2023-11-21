let expression = "";

function appendNumber(number) {
  expression += number;
  updateResult();
}

function appendOperator(operator) {
  expression += operator;
  updateResult();
}

function clearResult() {
  expression = "";
  updateResult();
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateResult();
  } catch (error) {
    expression = "";
    updateResult();
    alert("Error in expression!");
  }
}

function updateResult() {
  document.getElementById("result").value = expression;
}