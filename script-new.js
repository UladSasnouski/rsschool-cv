var numbers = document.querySelectorAll("[data-number]"),
    operations = document.querySelectorAll("[data-operator]"),
    clearBtns = document.querySelectorAll("[data-clear]"),
    decimalBtn = document.getElementById('decimal'),
    negativeBtn = document.getElementById('negative'),
    result = document.getElementById('result'),
    display = document.getElementById('display'),
    memoryCurrentNumber = 0,
    memoryNewNumber = false,
    memoryPendingOperation = '';

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  number.addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  });
};

for (var i = 0; i < operations.length; i++) {
  var operationBtn = operations[i];
  operationBtn.addEventListener('click', function (e) {
    operationPress(e.target.textContent);
  });
};

for (var i = 0; i < clearBtns.length; i++) {
  var clearBtn = clearBtns[i];
  clearBtn.addEventListener('click', function (e) {
    clear(e.target.textContent);
  });
};

decimalBtn.addEventListener('click', decimal);
negativeBtn.addEventListener('click', negative);

function numberPress(number) {
  if (memoryNewNumber) {
    display.value = number;
    memoryNewNumber = false;
  } else {
    if (display.value === '0') {
      display.value = number;
    } else {
      display.value += number;
    }
  }
};

function operationPress(op) {
  let localOperationMemory = display.value;

  if (memoryNewNumber && memoryPendingOperation !== '=') {
    display.value = memoryCurrentNumber;
  } else {
    memoryNewNumber = true;
    switch(memoryPendingOperation) {
      case '+':
        memoryCurrentNumber = (memoryCurrentNumber + +localOperationMemory).toFixed(10);
        break;
      case '-':
        memoryCurrentNumber = (memoryCurrentNumber - +localOperationMemory).toFixed(10);
        break;
      case '*':
        memoryCurrentNumber = +(memoryCurrentNumber * +localOperationMemory).toFixed(10);
        break;
      case '/':
        memoryCurrentNumber = +(memoryCurrentNumber / +localOperationMemory).toFixed(10);
        break;
      case 'xⁿ':
        memoryCurrentNumber = memoryCurrentNumber ** +localOperationMemory;
        break;
      case '%':
        memoryCurrentNumber *= +localOperationMemory / 100;
        break;
      case '√':
        memoryCurrentNumber = Math.pow(memoryCurrentNumber, 1 / +localOperationMemory);
        break;
      default: 
      memoryCurrentNumber = +localOperationMemory;
    }
    display.value = memoryCurrentNumber;
    memoryPendingOperation = op;
  }
};

function decimal(argument) {
  let localDecimalMemory = display.value;

  if (memoryNewNumber) {
    localDecimalMemory = '0.';
    memoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf('.') === -1) {
      localDecimalMemory += '.';
    }
  }
  display.value = localDecimalMemory;
};

function clear(id) {
  if (id === 'ce') {
    display.value = '0';
    memoryNewNumber = true;
  } else if (id === 'c') {
    display.value = '0';
    memoryNewNumber = true;
    MemoryCurrentNumber = 0;
    memoryPendingOperation = '';
  }
};

function negative(argument) {
    let localNegativeMemory = display.value;
  
    if (memoryNewNumber) {
      localNegativeMemory = '-';
      memoryNewNumber = false;
    } else {
      if (localNegativeMemory.indexOf('-') === -1) {
        localNegativeMemory += '-';
      }
    } 
    display.value = localNegativeMemory;
};