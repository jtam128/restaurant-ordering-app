import { menuArray } from "./data";
const order = document.getElementById("order");
const payForm = document.getElementById("pay-form");

document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    handleAddItem(e.target.dataset.add);
  } else if (e.target.dataset.remove) {
    handleRemoveItem(e.target.dataset.remove);
  } else if (e.target.dataset.complete) {
    document.getElementById("pay-modal").style.display = "flex";
  }
});

payForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const payFormData = new FormData(payForm);
  const cusName = payFormData.get("cus-name");

  document.getElementById("pay-modal").style.display = "none";
  customerMessage(cusName);
});

function customerMessage(cusName) {
  order.innerHTML = `<div class="cus-message">
  <h1>Thanks, ${cusName}! Your order is on its way!</h1>
  </div>`;
}

let orderArr = [];
function handleAddItem(itemId) {
  const addItemToOrderArr = menuArray.find(function (item) {
    return item.id == itemId;
  });
  orderArr.push(addItemToOrderArr);
  renderOrder(orderArr);

  console.log(`/:> orderArr ::`, orderArr); // dbg..
}

function handleRemoveItem(removedItemId) {
  const targetItem = orderArr.find((item) => item.id == removedItemId);
  const itemIndex = orderArr.indexOf(targetItem);

  orderArr.splice(itemIndex, 1);

  renderOrder(orderArr);
}

function renderOrder() {
  const orderSum = calculateSum(orderArr);

  let individualItemOrder = "";

  orderArr.forEach(function (item) {
    individualItemOrder += `
    <div class="items">
    <div class="item-name-and-btn">
   ${item.name}
       <button
      class="remove-btn"
      id="remove-btn"
      data-remove="${item.id}">remove</button>
    </div>
    <div class="item-price">
      <p>$${item.price}</p>
    </div>
    </div>
      `;
  });

  let fullOrder = "";

  fullOrder = `
  <h1 class="order-h1">Your Order</h1>
  <div>
    <p>${individualItemOrder}</p>
      <hr>
   <div class="total-price">
     <h1>Total Price:</h1>
     <p>$${orderSum}</p>
   </div>
  </div>
  <div>
   <button class="complete-order-btn" data-complete="complete-order">Complete Order</button>
  </div>
  `;
  return (order.innerHTML = fullOrder);
}

function calculateSum(orderArr) {
  let itemPrice = orderArr.map(function (item) {
    return item.price;
  });

  if (itemPrice.length == 0) {
    return 0;
  }

  const totalSum = itemPrice.reduce(function (accumulator, currentSum) {
    return accumulator + currentSum;
  });
  return totalSum;
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
