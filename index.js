function add(num1, num2) {
    let number = num1 + num2;
    return number; 
}

function subtract(num1, num2) {
    let number = num1 - num2;
    return number;
}

function multiply(num1, num2) {
    let number = num1 * num2;
    return number;
}

function divide(num1, num2) {
    let number = num1 / num2;
    return number;
}

function increment(num) {
    num++;
    return num;
}

function decrement(num) {
    num--;
    return num;
}

function makeInt(string) {
    let num = parseInt(string, 10);
    return num;
}

function preserveDecimal(string) {
    let num = parseFloat(string);
    return num;
}