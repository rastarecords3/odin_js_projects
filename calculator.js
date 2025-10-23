let num1 = null;
let operator = null;
let num2 = null;
let display = "0";

const displayScreen = document.querySelector("#display");
const buttons = document.querySelectorAll(".button")

function populateDisplay() {
    displayScreen.innerText = display
}

function input(value) {
    if (!isNaN(value) || value === ".") {
        if (display.length >= 15) return;
        if (display === "0") {
            display = value;
        } else {
            display += value;
        }
        populateDisplay()
    }
}

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
    }
})


populateDisplay();

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