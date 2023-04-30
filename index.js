import { menuArray } from "./data";
const order = document.getElementById("order");

document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    handleAddItem(e.target.dataset.add);
  }
});

let orderArr = [];
function handleAddItem(itemId) {
  const addItemToOrderArr = menuArray.find(function (item) {
    return item.id == itemId;
  });
  orderArr.push(addItemToOrderArr);
  renderOrder(orderArr);

  console.log(`/:> orderArr ::`, orderArr); // dbg..
}

function renderOrder() {
  let individualItemOrder = "";

  orderArr.forEach(function (item) {
    individualItemOrder += `
      <p>${item.name}</p>
      <small>remove</small>
      <p>$${item.price}</p>
      `;
  });

  let fullOrder = "";

  fullOrder = `
  <h1>Your Order</h1>
  <div>
  <p>${individualItemOrder}</p>
  </div>
  `;
  return (order.innerHTML = fullOrder);
}

function getMenuHtml() {
  let menuHtml = ``;
  menuArray.forEach(function (item) {
    menuHtml += `
    <section class="item-section">
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

      <div class="item-add-btn">
        <i class="fa-solid fa-circle-plus" data-add="${item.id}"></i>
      </div>
    </section>

    <hr>
    `;
  });

  return menuHtml;
}

function renderMenu() {
  document.getElementById("menu").innerHTML = getMenuHtml();
}

renderMenu();
