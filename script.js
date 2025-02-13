const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculateDisplay() {
    try {
        const result = new Function('return ' + display.value)();
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
