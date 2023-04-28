import { menuArray } from "./data";

function getMenuHtml() {
  let menuHtml = ``;
  menuArray.forEach(function (item) {
    menuHtml += `
    <div class="item-info">
      <div class="item-emoji">
        <p>${item.emoji}</p>
      </div>

      <div class="item-details">
        <h3>${item.name}</h3>
        <p>${item.ingredients}</p>
        <h4>$${item.price}</h4>
      </div>
    </div>

    <hr>
    `;
  });
  return menuHtml;
}

function render() {
  document.getElementById("menu").innerHTML = getMenuHtml();
}

render();
