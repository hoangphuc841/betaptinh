// script.js
type = 1;
let first_number_element = document.getElementById("first-field");
let second_number_element = document.getElementById("second-field");
let operation_elements = document.getElementsByName("operation");
let notification_element = document.getElementById("notification");

function greetUser() {
    alert("Hello, welcome to our website!");
}

function checkFirst() {
    let first_number = parseInt(first_number_element.value);
    if (isNaN(first_number)) {
        notification_element.innerText = "Số nhập vào không phải là số nguyên";
    }
    else {
        notification_element.innerText = "";
    }
}

function checkSecond() {
    let operation;
    for (let i = 0; i < operation_elements.length; i++) {
        if (operation_elements[i].checked) {
            operation = operation_elements[i].value;
            break;
        }
    }
    let second_number = parseInt(second_number_element.value);
    if (isNaN(second_number)) {
        notification_element.innerText = "Số nhập vào không phải là số nguyên";
    }
    else if (second_number == 0 && operation === '/') {
        notification_element.innerText = "Phép tính không hợp lệ";
    }
    else {
        notification_element.innerText = "";
    }
}

function calculate() {
    let first_number = parseInt(first_number_element.value);
    let second_number = parseInt(second_number_element.value);
    notification_element.innerText = "";
    let operation;
    for (let i = 0; i < operation_elements.length; i++) {
        if (operation_elements[i].checked) {
            operation = operation_elements[i].value;
            break;
        }
    }
    let result;
    if (operation === '+') {
        result = first_number + second_number;
    }
    else if (operation === '-') {
        result = first_number - second_number;
    }
    else if (operation === '*') {
        result = first_number * second_number;
    }
    else if (operation === '/') {
        result = first_number / second_number;
    }
    else {
        result = "Chưa chọn phép tính";
        notification_element.innerText = result;
        return;
    }
    if (isNaN(result)) {
        notification_element.innerText = "Số nhập vào không phải là số nguyên";
        return;
    }
    let result_element = document.getElementById("result");
    result_element.innerText = result;
}
