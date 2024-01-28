import { updateCatalogueInputData } from "./create-update-forms/update-catalogue-item.js";
import { putCatalogueItem } from "../admin-model/backend-routes/catalouge-routes/catalogue-put.js";
import { getCatalogueItemsData } from "./admin-main.js";

async function submitCatalogueUpdate(event) {
  event.preventDefault();
  const updateData = updateCatalogueInputData();
  const updateCatalogueItemResponse = await putCatalogueItem(updateData);
  console.log("response", updateCatalogueItemResponse);
  if (updateCatalogueItemResponse.ok) {
    console.log("Item updated remeber to give confirmation to enduser!");
    getCatalogueItemsData();
  }
}

export { submitCatalogueUpdate };
