import { menuArray } from "./data";

function getMenuHtml() {
  let menuHtml = ``;
  menuArray.forEach(function (menuItem) {
    menuHtml += `
      <div class="item-emoji">
        <p>ITEM EMOJI</p>
      </div>

      <div class="item-details">
        <h4>ITEM NAME</h4>
        <p>ITEM INGREDIENTS</p>
        <h6>ITEM PRICE</h6>
      </div>
    `;
  });
  return menuHtml;
}

function render() {
  document.getElementById("item-info").innerHTML = getMenuHtml();
}

render();
