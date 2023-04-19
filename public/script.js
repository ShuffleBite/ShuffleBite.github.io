import { getRestaurants } from "./food_finder.js";
import { setChoices, getRandomInt, deleteAllCookies } from "./utils.js";

deleteAllCookies();
console.log(document.cookie);

const types = ['brewery',
               'bubble-tea',
               'coffee-tea',
               'desserts',
               'diy',
               'gelato',
               'icecream',
               'street'];

let food_button = document.getElementById("food-finder");
let price_button1 = document.getElementById("price1");
let price_button2 = document.getElementById("price2");
let price_button3 = document.getElementById("price3");
let price_button4 = document.getElementById("price4");
let price_button_pressed;

function getRandomType() {
  const index = getRandomInt(types.length);

  return types[index];
}

let onPriceButtonClick1 = function () {
  price_button_pressed = price_button1.value;

  price_button1.style.backgroundColor = "#5f471f";
  price_button1.style.color = "#ecd0a1";

  price_button2.style.backgroundColor = "#ecd0a1";
  price_button2.style.color = "#5f471f";

  price_button3.style.backgroundColor = "#ecd0a1";
  price_button3.style.color = "#5f471f";

  price_button4.style.backgroundColor = "#ecd0a1";
  price_button4.style.color = "#5f471f";
};

let onPriceButtonClick2 = function () {
  price_button_pressed = price_button2.value;

  price_button1.style.backgroundColor = "#ecd0a1";
  price_button1.style.color = "#5f471f";

  price_button2.style.backgroundColor = "#5f471f";
  price_button2.style.color = "#ecd0a1";

  price_button3.style.backgroundColor = "#ecd0a1";
  price_button3.style.color = "#5f471f";

  price_button4.style.backgroundColor = "#ecd0a1";
  price_button4.style.color = "#5f471f";
};

let onPriceButtonClick3 = function () {
  price_button_pressed = price_button3.value;

  price_button1.style.backgroundColor = "#ecd0a1";
  price_button1.style.color = "#5f471f";

  price_button2.style.backgroundColor = "#ecd0a1";
  price_button2.style.color = "#5f471f";

  price_button3.style.backgroundColor = "#5f471f";
  price_button3.style.color = "#ecd0a1";

  price_button4.style.backgroundColor = "#ecd0a1";
  price_button4.style.color = "#5f471f";
};

let onPriceButtonClick4 = function () {
  price_button_pressed = price_button4.value;

  price_button1.style.backgroundColor = "#ecd0a1";
  price_button1.style.color = "#5f471f";

  price_button2.style.backgroundColor = "#ecd0a1";
  price_button2.style.color = "#5f471f";

  price_button3.style.backgroundColor = "#ecd0a1";
  price_button3.style.color = "#5f471f";

  price_button4.style.backgroundColor = "#5f471f";
  price_button4.style.color = "#ecd0a1";
};

let onFoodButtonClick = async function () {
  let info = {
    location: document.getElementById("location").value,
    range: price_button_pressed,
    type: document.getElementById("food-types").value,
  };

  console.log(info);

  if (info['type'] === 'random')
    info['type'] = getRandomType();

  console.log(info);

  let location_container = document.getElementById("location-err");
  let price_container = document.getElementById("price-err");
  let location_content = document.getElementById("l-err");
  let price_content = document.getElementById("p-err");

  location_content.innerHTML = "You forgot to enter your city/zipcode!";
  price_content.innerHTML = "You forgot to choose a price range!";

  location_container.appendChild(location_content);
  price_container.appendChild(price_content);

  if (price_button_pressed === undefined || info['location'] === '')
  {
    if (info['location'] === '')
      price_content.innerHTML = "";
    else if (price_button_pressed === undefined)
      location_content.innerHTML = "";
  }
  else
  {
    location_content.innerHTML = "";
    price_content.innerHTML = "";
    
    const restaurants = await getRestaurants(
      info.location,
      info.type,
      info.range
    );
  
    setChoices(restaurants);
    
    //console.log(restaurants);
  
    window.location.href = "choices.html";
  }
};

price_button1.addEventListener("click", onPriceButtonClick1);
price_button2.addEventListener("click", onPriceButtonClick2);
price_button3.addEventListener("click", onPriceButtonClick3);
price_button4.addEventListener("click", onPriceButtonClick4);
food_button.addEventListener("click", onFoodButtonClick);
