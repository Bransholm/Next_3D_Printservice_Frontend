import { updateCatalogueInputData } from "./create-update-forms/update-catalogue-item.js";
import { putCatalogueItem } from "../admin-model/backend-routes/catalouge-routes/catalogue-put.js";
import { getCatalogueItemsData } from "./admin-main.js";

async function submitCatalogueUpdate(event) {
  event.preventDefault();
  // retrieves the input-data from the update-catalogue-from
  const updateData = updateCatalogueInputData();
  // sends the catalogue-item-data and updates the selected item
  const updateCatalogueItemResponse = await putCatalogueItem(updateData);
  // checks if the update response is ok
  if (updateCatalogueItemResponse.ok) {
    // requests the data with the updated catalouge item
    getCatalogueItemsData();
  }
}

export { submitCatalogueUpdate };
