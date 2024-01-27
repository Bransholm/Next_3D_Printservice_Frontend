"use strict";

import { startViews } from "../frontpage-view/spa-router.js";
import {
  getCatalogueData
} from "../frontpage-model/fetch-data.js";
import { createCatalogueClasses } from "./instance-creator.js";
import { callRenderMethod } from "./render-controller.js";
import { filterContent, searchContent } from "./catalogue-filter-search.js";
import { launchOrderSite } from "./order-site.js";
import { findExistingOrder } from "./find-order-site.js";

window.addEventListener("load", start);

function start() {
  startViews();
  // activates the eventlisteners on the webshop
  activateEventListeners();
  // retrieves all available catalogue items
  getAllData();
  // starts the check-out-site functions
  launchOrderSite();
}

async function getAllData() {
  const catalougeItemObjects = await getCatalogueData();
  showCatalougeToCustomers(catalougeItemObjects);
}

// takes the catalouge-data as a parameter, creates an instance of the catalogue-class and call the render-method
function showCatalougeToCustomers(catalougeItemObjects) {
  const classList = createCatalogueClasses(catalougeItemObjects);
  // call the render method for the entire list of catalogue-instances
  callRenderMethod(classList, "product_catalogue");
}


function activateEventListeners() {
  document.querySelector("#faq-link").addEventListener("click", showDialogFaq);
  document
    .querySelector("#tradeing-terms-link")
    .addEventListener("click", showDialogTradeingTerms);
  document
    .querySelector("#data-policy-link")
    .addEventListener("click", showDialogDataPolicyLink);
  document
    .querySelector("#filter-catagory")
    .addEventListener("change", filterContent);
  document
    .querySelector("#search-button")
    .addEventListener("click", searchContent);

  document
    .querySelector("#view-order-form")
    .addEventListener("submit", findExistingOrder);
}

function showDialogFaq() {
  document.querySelector("#dialog-faq").showModal();
}

function showDialogTradeingTerms() {
  document.querySelector("#dialog-tradeing-terms").showModal();
}

function showDialogDataPolicyLink() {
  document.querySelector("#dialog-data-policy").showModal();
}

export { showCatalougeToCustomers };
