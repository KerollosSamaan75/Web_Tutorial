import { calculateOrder } from "./orderService.js";

function submitOrder() {
  const name = document.getElementById("name").value;
  const coffee = document.querySelector("input[name='coffee']:checked");
  const extras = [...document.querySelectorAll("input[type='checkbox']:checked")];
  const size = document.getElementById("size").value;

  if (!name || !coffee || !size) {
    alert("Please complete all fields.");
    return;
  }

  const orderData = {
    name,
    coffee: coffee.value,
    extras: extras.map((extra) => extra.value),
    size,
  };

  const total = calculateOrder(orderData);
  document.getElementById("order-summary").innerText = `Thank you, ${name}! Your total is $${total.toFixed(2)}.`;
}
