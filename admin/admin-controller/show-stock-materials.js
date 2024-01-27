let stockClassList;
import { createClassInstance } from "./instance-creator-admin.js";
import { stockMaterial } from "../admin-view/admin-view-render-classes/stock-class.js";
import { updateStockButtonClicked } from "./admin-main.js";

function showStockMaterials(stockMaterialData) {
  // takes the list of stock-data and the stock-class as argument and returns a list of stock-class instances
  stockClassList = createClassInstance(stockMaterialData, stockMaterial);
  // takes the list of stock-class instnances and calls their render methods
  renderStocks(stockClassList);
}

// creates the DOM for the stock-overview
function renderStocks(listOfInstances) {
  document.querySelector(`#adminStockTableBody`).innerHTML = "";
  // loops the list of instnaces and call the render metod
  for (const stockInstance of listOfInstances) {
    const stockHTML = stockInstance.render();

    document
      .querySelector(`#adminStockTableBody`)
      .insertAdjacentHTML("beforeend", stockHTML);

    // activates the eventlistener for stock instance
    eventListenerForStockUpdateButton(stockInstance);
  }
}

// adds event listener for the update-stock button
function eventListenerForStockUpdateButton(classInstance) {
  document
    .querySelector(`#adminStockTableBody tr:last-child .btn_update_stock`)
    .addEventListener("click", () => updateStockButtonClicked(classInstance));
}

export { showStockMaterials };
