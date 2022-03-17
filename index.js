let num1 = 8
let num2 = 2
let feet = document.getElementById("feet")
let inptNumber = document.getElementById("inpt-number").value
let result = 0

// Conversion functions

function add() {
    result = inptNumber * 3.2808 
    feet.textContent = result
}

function subtract() {
    result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

function divide() {
    result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

function multiply() {
    result = num1 * num2
    sumEl.textContent = "Sum: " + result
}


// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"



