const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //from vendor file
}
//function for saving objects as arrays and creating a history
function writeToLog(
  operationIdentifier, //parameters
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
function calculateResult(calculationType) {
  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE'
  ) {
    return;
  }

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathoperator;

  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathoperator = '+';
  } else if (calculateResult === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathoperator = '-';
  } else if (calculateResult === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathoperator = '*';
  } else if (calculateResult === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathoperator = '/';
  }
  createAndWriteOutput(mathoperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;
  if (operation === 'ADD') {
    currentResult += enteredNumber;
    operator = '+';
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
  } else if (operation === 'SUBTRACT') {
    currentResult -= enteredNumber;
    operator = '-';
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
  } else if (operation === 'MULTIPLY') {
    currentResult *= enteredNumber;
    operator = '*';
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
  } else {
    currentResult /= enteredNumber;
    operator = '/';
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
  }
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));
