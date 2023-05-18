const subtractButton = document.querySelector("#subtractBtn");
subtractButton.addEventListener("click",subtract);
let subTanker = localStorage.getItem("input")

function subtract() {
    let firstValue = document.querySelector(".first-number").value;
    let secondValue = document.querySelector(".second-number").value;
    let subtractComputedValue = (firstValue - secondValue)
    subTanker = subtractComputedValue
    localStorage.setItem("input",subTanker);
    document.getElementById("answer").innerHTML = subTanker
    event.preventDefault();
    // alert("Your answer " + subtractComputedValue)
//    document.querySelector("#answer-statement").innerHTML = "Answer"
//    let subAnswer = subtractComputedValue
//    document.querySelector("#answer").innerHTML = subAnswer
//    subAnswer.innerHTML = subtractComputedValue
    // return subtractComputedValue;
    
}


const addButton = document.querySelector("#addBtn");
addButton.addEventListener("click",addition)

function addition() {
    let firstValue = Number(document.querySelector(".first-number").value);
    let secondValue = Number(document.querySelector(".second-number").value);
    let addComputedValue = (firstValue + secondValue);
    document.querySelector("#answer").innerHTML = addComputedValue
    event.preventDefault();
   
    return addComputedValue
}

const multiplyButton = document.querySelector("#multiplyBtn");
multiplyButton.addEventListener("click",multiply);

function multiply() {
    let firstValue = Number(document.querySelector(".first-number").value);
    let secondValue = Number(document.querySelector(".second-number").value);
    let multiplyComputedValue = (firstValue * secondValue);
    document.querySelector("#answer").innerHTML = multiplyComputedValue
    event.preventDefault();
    return multiplyComputedValue
}

const divisionButton = document.querySelector("#divisionBtn");
divisionButton.addEventListener("click",division);

function division() {
    let firstValue = Number(document.querySelector(".first-number").value);
    let secondValue = Number(document.querySelector(".second-number").value);
    let divisionComputedValue = (firstValue / secondValue);
    document.querySelector("#answer").innerHTML = divisionComputedValue
    event.preventDefault();
    return divisionComputedValue
}

const powerButton = document.querySelector("#RP-Btn");
powerButton.addEventListener("click",xPower2);

function xPower2() {
    let firstValue = Number(document.querySelector(".first-number").value);
    let powerValue = (firstValue**2);
    document.querySelector("#answer").innerHTML = powerValue
    event.preventDefault();
    return powerValue
}

const power3Button = document.querySelector("#RP3-Btn");
power3Button.addEventListener("click",xPower3);

function xPower3() {
    let firstValue = Number(document.querySelector(".first-number").value);
    let power3Value = (firstValue**3);
    document.querySelector("#answer").innerHTML = power3Value
    event.preventDefault();
    return power3Value
}

const powerXButton = document.querySelector("#RPx-Btn");
powerXButton.addEventListener("click",powerX);

function powerX() {
    let firstValue = Number(document.querySelector(".first-number").value);
    let secondValue = Number(document.querySelector(".second-number").value);
    let powerXvalue = (firstValue**secondValue);
    document.querySelector("#answer").innerHTML = powerXvalue
    event.preventDefault();
    
    return powerXvalue
}

const squareRootButton = document.querySelector("#squareRootBtn");
squareRootButton.addEventListener("click",squareRoot);

function squareRoot() {
    let firstValue = Number(document.querySelector(".first-number").value);
    const secondValue = 1/2
    let computedSquareRoot = (firstValue**secondValue);
    document.querySelector("#answer").innerHTML = computedSquareRoot
    event.preventDefault();
    
    return computedSquareRoot
}

const xRootButton = document.querySelector("#xRootBtn");
xRootButton.addEventListener("click",xRoot);

function xRoot() {
    let firstValue = Number(document.querySelector(".first-number").value);
    let secondValue = Number(document.querySelector(".second-number").value);
    let computedxRoot = (firstValue**(1/secondValue));
    document.querySelector("#answer").innerHTML = computedxRoot
    event.preventDefault();
    
    return computedxRoot
}

const percentageButton = document.querySelector("#percentageBtn");
percentageButton.addEventListener("click",percentage);

function percentage() {
    let firstValue = Number(document.querySelector(".first-number").value);
    const secondValue = 100
    let computedPercentage = (firstValue/secondValue);
    document.querySelector("#answer").innerHTML = computedPercentage
    event.preventDefault();
   
    return computedPercentage
}

const clearButton = document.querySelector("#clearBtn");
clearButton.addEventListener("click",clear);

function clear() {
  document.querySelector("#answer").innerHTML = "0"


}

// const displayButton = document.querySelector("#displayBtn");
// displayButton.addEventListener("click",display);

// function display() {
//     let subAnswer = subtract();
//     let addAnswer = addition();
//     let container = (subAnswer || addAnswer)
//    if (container == subAnswer) {
//     document.querySelector("#answer").innerHTML = subAnswer
//    } 
//    else {document.querySelector("#answer").innerHTML = addAnswer
// }
   
    
// }

