// code :JavaScript,css,html kalkulator by IHackYours
// baca : No open source jika mo source tag nama gw!

// plese donate IHackYours

var inputs = [];
var total = 0;
var operation = "";
var memory = 0;
var current_input;

document.getElementById('subtract').addEventListener('click', subtract);
document.getElementById('add').addEventListener('click', add);
document.getElementById('divide').addEventListener('click', divide);
document.getElementById('multiply').addEventListener('click', multiply);
document.getElementById('equal').addEventListener('click', equal);
document.getElementById('clearAll').addEventListener('click', clearAll);
document.getElementById('ce').addEventListener('click', CE);
document.getElementById('changeSign').addEventListener('click', changeSign);
document.getElementById('anjing').addEventListener('click', anjing);
document.getElementById('number1').addEventListener('click', getInput);
document.getElementById('number2').addEventListener('click', getInput);
document.getElementById('number3').addEventListener('click', getInput);
document.getElementById('number4').addEventListener('click', getInput);
document.getElementById('number5').addEventListener('click', getInput);
document.getElementById('number6').addEventListener('click', getInput);
document.getElementById('number7').addEventListener('click', getInput);
document.getElementById('number8').addEventListener('click', getInput);
document.getElementById('number9').addEventListener('click', getInput);
document.getElementById('number0').addEventListener('click', getInput);
document.getElementById('decimalPoint').addEventListener('click', getInput);

function getInput() {
    console.log(this.value);
    if (this.value === '.') {
        if (!inputs.includes('.')) {
            inputs.push(this.value); // add arow numbers
        }
    } else {
        inputs.push(this.value);

        current_input = +(inputs.join('')) //input nomor
        updateDisplay(current_input);
    }
}

// ngetod
function add() {
    if (inputs.length !== 0) {
        calculate();
    }
    operation = "+";
}

function subtract() {
    if (inputs.length !== 0) {
        calculate();
    }
    operation = "-";
}

function multiply() {
    if (inputs.length !== 0) {
        calculate();
    }
    operation = "*";
}

function divide() {
    if (inputs.length !== 0) {
        calculate();
    }
    operation = "/";
}

function changeSign() {
    if (+(inputs.join('')) != 0) {
        inputs[0] = -inputs[0];
        current_input = +(inputs.join(''));
        updateDisplay(current_input);
    } else {
        total = -total;
        calculate();
    }
}

// Hasil
function equal() {
    calculate();
    updateDisplay(total);
    operation = "";
    inputs = [];
  }

function calculate() {
current_input = +(inputs.join(''));

if (operation == '') {
    if (inputs.length == 0 && total == 0) {
        memory = 0;
    } else if (inputs.length == 0) {
        memory = total;
    } else {
        total = +(inputs.join(''));
    }

} else if (operation == '+') {
    total = +(memory + current_input).toFixed(12);
} else if (operation == '-') {
    total = +(memory - current_input).toFixed(12);
} else if (operation == '*') {
    total = +(memory * current_input).toFixed(12);
} else if (operation == '/') {
    if (current_input == 0) {
        clearAll();
        total = "error: div by 0!";
    } else {
        total = +(memory / current_input).toFixed(12);
    }
}
console.log("raw inputs:", inputs, "|",
            "total:", total, "|",
            "operation:", operation, "|",
            "memory:", memory, "|",
            "current_input:", current_input);
updateDisplay(total);
memory = total;

inputs = [];
current_input = 0;
}

function clearAll() {
    inputs = [];
    total = 0;
    operation = "";
    memory = 0;
    current_input = 0;
    updateDisplay(total);
}

function CE() {
    inputs = [];
    updateDisplay("0");
}

function updateDisplay(output) {
    if (typeof output === 'number' && output.toString().length > 12) {
        document.getElementById("display").value = output.toExponential(7);
    } else {
        document.getElementById("display").value = output;
    }
}

function muchWow() {
    var random_number = Math.floor(Math.random() * 5) + 1
    switch (random_number) {
        case 1:
            updateDisplay("apa lu :V")
            break;
        case 2:
            updateDisplay("hay lonte :V")
            break;
        case 3:
            updateDisplay("Hay abjim :V")
            break;
        case 4:
            updateDisplay("Hay ngetod :V")
            break;
        case 5:
            updateDisplay("Hay sayang :V")
            break;
    }

}
