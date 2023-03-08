// alert("This works!");
const defaultResult = 0;
let currentResult = 0;

// currentResult = defaultResult + 90;

// let calculationDescription = "0 + 90";

function add(){
  currentResult += parseInt(userInput.value);
  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);

// outputResult(currentResult, calculationDescription);
