"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

let shiftValue, popValue;

const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");


function updateAnswerOne() {
    answerOneEl.innerText = todos.join(", ");
}

function updateAnswerTwo() {
    answerTwoEl.innerText = todos[2];
}

function removeLastValue() {
    popValue = todos.pop();
   updateAnswerFour();

}

function removeFirstValue() {
    shiftValue = todos.shift();
    addShiftAndPopValues();
}

function addShiftAndPopValues() {
    todos.push(shiftValue);
    todos.push(popValue);
    updateAnswerSix();
}

function updateAnswerFour() {
    answerFourEl.innerText = todos.join(", ");
}

function reverseTodoList() {
    todos.reverse();
    updateAnswerFive();
}

function updateAnswerFive() {
    answerFiveEl.innerText = todos.join(", ");
}

function updateAnswerSix() {
    answerSixEl.innerText = todos.join(", ");
}

function render() {
    updateAnswerOne();
    updateAnswerTwo();
    removeLastValue();
    reverseTodoList();
    removeFirstValue();
}

function reset() {
    todos[0] = "Wash the dishes";
    todos[2] = "Mow the yard";
    answerOneEl.innertText = "";
    answerTwoEl.innerText = "";
    answerFourEl.innerText = "";
    answerFiveEl.innerText = "";
    answerSixEl.innerText = "";
    shiftValue = "";
    popValue = "";
}

submissionBtn.addEventListener("click", function () {
    if (submissionBtn.innerText === "Submit") {
        render();
        submissionBtn.innerText = "Reset";      
    } else {
        reset();
        submissionBtn.innerText = "Submit"; 
    }
});
