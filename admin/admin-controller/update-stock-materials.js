let stockItemToUpdate;
import {
  updateStockDataAtofill,
  stockUpdateInputData,
} from "./create-update-forms/update-stock-item.js";
import { stockUpdateRoute } from "../admin-model/backend-routes/stock-put.js";
import { showSuccessfullUpdate } from "../admin-view/stock-update-dialog.js";
import { getStockMaterialData } from "./admin-main.js";

// select the stock materiral to be updated
function updateStockButtonClicked(instance) {

  // select which stock-item is to be updated
  stockItemToUpdate = instance;

  // takes the selected stock-item as an argument and autofills the stock-update-form
  updateStockDataAtofill(instance);
}

// completes the update process
async function submitStockUpdate(event) {
  event.preventDefault();

  // retrieves the data from the stock-update-forms 
  const updateInputData = stockUpdateInputData();
  const id = stockItemToUpdate.id;

  // takes the updated-stock-data and the selected id as argument and updates the stock-maetrial
  const updateResponse = await stockUpdateRoute(updateInputData, id);

  if (updateResponse.ok) {
    console.log("things are okay!");

    // shows the successfull update dialog
    showSuccessfullUpdate(updateInputData);
    // fetches the updated stock data
    getStockMaterialData();
  }
}

export { updateStockButtonClicked, submitStockUpdate };
