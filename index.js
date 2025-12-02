import { menuArray } from "./data.js";

let FoodArray = [];

function getMenuList() {
  let menu = ``;
  menuArray.forEach(function (food) {
    menu += `<div class="item">
  
  <div class="emoji">${food.emoji}</div>

  <div class="info">
    <h2>${food.name}</h2>
    <p class="desc">${food.ingredients.join(",")}</p>
    <p class="price">${food.price}</p>
  </div>

  <button class="add-btn" data-id="${food.id}">+</button>

</div>

<hr />`;
  });
  return menu;
}
function Menurender() {
  document.getElementById("menu").innerHTML = getMenuList();
}
Menurender();
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-btn")) {
    checkOut(e.target.dataset.id);
  }
});

function checkOut(foodID) {
  const targetFood = menuArray.filter(function (food) {
    return food.id === Number(foodID);
  })[0];
  FoodArray.push(targetFood);

  renderPreCheckout();
}

function renderPreCheckout() {
  const orderPanel = document.getElementById("order-panel");
  orderPanel.classList.remove("hidden");

  let orderHTML = "";
  FoodArray.forEach(function (food) {
    orderHTML += `
      <div class="order-row">
        <p>${food.name}</p>
        <p class="order-price">$${food.price}</p>
      </div>
    `;
  });
  document.getElementById("order-items").innerHTML = orderHTML;

  const price = FoodArray.reduce(function (sum, food) {
    return sum + food.price;
  }, 0);
  document.getElementById("total-price").textContent = ` ${price}`;
}
