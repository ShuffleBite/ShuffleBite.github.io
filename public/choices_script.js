import { setFinalChoice, getRandomInt } from "./utils.js";

let choice_button1 = document.getElementById("choice1");
let choice_button2 = document.getElementById("choice2");
let random_button = document.getElementById("random");

let onChoiceButtonClick1 = function () {
    setFinalChoice(0);
    window.location.href = "final_choice.html";
};

let onChoiceButtonClick2 = function () {
    setFinalChoice(1);
    window.location.href = "final_choice.html";
};

let onRandomButtonClick = function () {
    setFinalChoice(getRandomInt(2));
    window.location.href = "final_choice.html";
};

choice_button1.addEventListener("click", onChoiceButtonClick1);
choice_button2.addEventListener("click", onChoiceButtonClick2);
random_button.addEventListener("click", onRandomButtonClick);
