"use strict";
window.addEventListener("load", startAdmin);

import { startViews } from "../admin-view/spa-router.js";
import { createNewCatalogueItem } from "./create-update-forms/create-new-catelogue-item.js";
import {
  getCatalogueData,
  getStockData,
} from "../admin-model/fetch-data-admin.js";
import { catalogueItem } from "../admin-view/admin-view-render-classes/catalogue-class.js";
import { createClassInstances } from "./instance-creator-admin.js";
import { callRenderMethodeForCatalogueItems } from "./render-controller-admin.js";
import { submitFianceDates } from "./finance-site.js";
import { showStockMaterials } from "./show-stock-materials.js";
import {
  updateStockButtonClicked,
  submitStockUpdate,
} from "./update-stock-materials.js";
import { closeUpdateCompleteWindow } from "../admin-view/stock-update-dialog.js";

// initiate the admin site
function startAdmin() {
  console.log("Admin site is live");
  // sets the SPA for the admin site
  startViews();
  // activates the event listeners for the admin sitre
  startEventListernes();
  // fetches the stock material data
  getStockMaterialData();
  // fetches the catalouge items data
  getCatalogueItemsData();
}

// gest the catalouge data and passes it to the show-catalgouge function
async function getCatalogueItemsData() {
  const catalougeItemObjects = await getCatalogueData();
  showCatalouge(catalougeItemObjects);
}

// gest the stock data and passes it to the show-stock-matieral function
async function getStockMaterialData() {
  const stockMaterialData = await getStockData();
  showStockMaterials(stockMaterialData);
}

// adds the eventlisternes for buttons across the admin site
function startEventListernes() {
  document
    .querySelector("#addToCatalogueForm")
    .addEventListener("submit", createNewCatalogueItem);

  // adds the eventlisterne for the update
  document
    .querySelector("#updateMaterialForm")
    .addEventListener("submit", submitStockUpdate);

  // adds the close on clikc event for the update stock material dialog
  document
    .querySelector("#btn-close-update-dialog")
    .addEventListener("click", closeUpdateCompleteWindow);

  // adds the submit event for the finance form
  document
    .querySelector("#finance-form")
    .addEventListener("submit", submitFianceDates);
}

// shows the catalogue items to the admin
function showCatalouge(catalougeItemObjects) {
  // takes the list of catalogue-data and the catalouge-item-class as argument and returns a list of catalouge-class instances
  const catalougueClassList = createClassInstances(
    catalougeItemObjects,
    catalogueItem
  );
  // takes the list of catalogue-class instances and call their render methods
  callRenderMethodeForCatalogueItems(catalougueClassList);
}

export {
  updateStockButtonClicked,
  getStockMaterialData,
  getCatalogueItemsData,
};
