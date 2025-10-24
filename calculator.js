let num1 = null;
let operator = null;
let num2 = null;
let display = "0";
let selectedOperatorButton = null;
const displayScreen = document.querySelector("#display");
const buttons = document.querySelectorAll(".button")

function populateDisplay() {
    displayScreen.innerText = display
}

populateDisplay();

// function to latch the shading to make it clear which operator is selected
function latchOperatorButton(operatorID) {
    if (selectedOperatorButton) {
        selectedOperatorButton.classList.remove('operator-selected');
    }
    const newOperatorButton = document.getElementById(operatorID);
    if (newOperatorButton) {
        newOperatorButton.classList.add('operator-selected');
        selectedOperatorButton = newOperatorButton; 
    }
}


// input funtions
function input(value) {
    // handles digits and decimal point
    if (!isNaN(value) || value === ".") {
        if (display.length >= 15) return;
        if (value === "." && display.includes(".")) return;
        if (display === "0" && value === ".") {
            display = "0.";
        }
        else if (display === "0") {
            display = value;
        } else {
            display += value;
        }
        populateDisplay()
    }
    // handles operators
    else if (["+", "-", "*", "/"].includes(value)) {
        num1 = display;
        operator = value;
        latchOperatorButton(value)
        populateDisplay()
    }
    // handles eqauls
    else if (value === "=") {
        if (num1 !== null && operator !== null) {
            num2 = display;
            display = String(operate(num1, operator, num2));
            populateDisplay()
            num1 = null
            operator = null
            num2 = null
        }
    }
    // AC button
    else if (value === "AC") {
        num1 = null
        operator = null
        num2 = null
        display = "0"
        populateDisplay()
    }
    // backspace button
    else if (value === "←" || value === "Backspace") {
        if (display.length > 1) {
            display = display.slice(0,-1);
        } else {
            display = "0";
        }
        populateDisplay()
    }
}

// event listeners for input
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;
        input(value);
    });
});

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if ((key >= "0" && key <= "9") || key === ".") {
        input(key);
    } else if (["+", "-", "*", "/", "="].includes(key)) {
        input(key);
    } else if (key === "Enter") {
        input("=");
    } else if (key === "Backspace") {
        input("Backspace");
    }
})

// maths functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error"
    }
    return a / b;
}

// operation logic
function operate(a, operator, b) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Error"
    }
}