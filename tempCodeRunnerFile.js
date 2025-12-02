import { menuArray } from "./data.js";

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
function render() {
  document.getElementById("menu").innerHTML = getMenuList();
}
render();
document.addEventListener("click", function (e) {
  console.log(e.target.dataset);
});
