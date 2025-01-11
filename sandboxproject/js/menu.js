import { getMenuItems } from "./menuService.js";

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = getMenuItems();
  const menuContainer = document.getElementById("menu-items");
  menuItems.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `<h3>${item.name}</h3><p>Price: $${item.price}</p>`;
    menuContainer.appendChild(itemElement);
  });
});
