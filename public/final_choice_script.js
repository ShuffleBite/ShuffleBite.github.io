import { getFinalChoice, deleteCookie } from "./utils.js";

const final_choice1 = getFinalChoice();
const str = "choicenum"
const final_choice2 = final_choice1.substring(str.length, final_choice1.length - 1);
const final_choice3 = final_choice2.split(",");

let container = document.getElementById("container");
let content = document.createElement("p");

if (final_choice3.length === 1)
{
    container.append("Nothing here!");
}
else
{
    content.innerHTML += `Name: ${final_choice3[0].substring("name=".length)}<br>`;
    content.innerHTML += `<br>Location: ${final_choice3[1].substring(" location=".length)}<br>`;
    content.innerHTML += `<br>Phone: ${final_choice3[2].substring(" phone=".length)}`;
    container.append(content);
    deleteCookie();
}