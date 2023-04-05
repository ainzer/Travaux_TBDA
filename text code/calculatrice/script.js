let display = document.getElementById("result");

function addToDisplay(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function calculate() {
    let expression = display.innerText;
    let result = eval(expression);
    display.innerHTML = result;
}