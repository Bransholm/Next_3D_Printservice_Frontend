import { deleteCatalogueItem } from "../admin-model/backend-routes/catalouge-routes/catalogue-delete.js";
import { getCatalogueItemsData } from "./admin-main.js";
import { updateCatalogueDataAutofill } from "./create-update-forms/update-catalogue-item.js";


// takes the list of catalouge-item-class instances and call their render methods
function callRenderMethodeForCatalogueItems(listOfInstances) {
  document.querySelector(`#productOverview`).innerHTML = "";

  // loops through the catalouge-class instance list
  for (const instance of listOfInstances) {
    const classHTML = instance.adminRender();

    document
      .querySelector(`#productOverview`)
      .insertAdjacentHTML("beforeend", classHTML);

    // adds the eventlisteners to the buttons
    eventListenerForCatalogueItemsButtons(instance);
  }

  // add eventlistens for every catalogue instance
  function eventListenerForCatalogueItemsButtons(classInstance) {
    // adds on-click event for the update button
    document
      .querySelector(`#productOverview article:last-child .btn_update_product`)
      .addEventListener("click", () =>
        updateCatalogueItemButtonClicked(classInstance)
      );

    // adds on-click event for the delete button
    document
      .querySelector(`#productOverview article:last-child .btn_delete_product`)
      .addEventListener("click", () =>
        deleteCatalogueItemButtonClicked(classInstance)
      );
  }

  // delete the selected catalogue item
  function deleteCatalogueItemButtonClicked(instance) {
    console.log("Delete Item Clicked:", instance.id);
    // opens the confirm-delete modal window
    document.querySelector("#dialog-delete-catalouge-item").showModal();

    // adds the eventlistener for the confirm-delete button
    document
      .querySelector("#btn-delete-catalouge-item-confirm")
      .addEventListener("click", () =>
        deleteCatalougeItemAccepted(instance.id)
      );
  }

  // begins the delete catlouge item process
  function deleteCatalougeItemAccepted(id) {
    // closes the delete-modal-window
    closeConfirmDeleteCatalogueItemDialog();
    // deletes the selected item
    deleteCatalogueItemConfirmed(id);
  }

  // closes the delete-modal-window
  function closeConfirmDeleteCatalogueItemDialog() {
    document.querySelector("#dialog-delete-catalouge-item").close();
  }

  // update the selected catalogue item
  function updateCatalogueItemButtonClicked(instance) {
    // takes the catalouge instance as an argument and autofills the update catlogue item form
    updateCatalogueDataAutofill(instance);
  }
}

// deletes the selected catalouge item and refreshes the view
async function deleteCatalogueItemConfirmed(id) {
  // takes the catalogue id as parameter and removes it from the database
  await deleteCatalogueItem(id);
  // fetches the new data with out the item
  getCatalogueItemsData();
}

export { callRenderMethodeForCatalogueItems };
