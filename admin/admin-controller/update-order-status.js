import { putOrderStatus } from "../admin-model/backend-routes/order-status-put.js";
import { getOrdersData } from "./admin-main.js";

async function updateOrderStatusSelectorActivated(Id) {
  const status = document.querySelector(".order-status-selector").value;
  console.log("Select Changed ", Id, status);

  const id = Id;
  const statusObject = { status };
  const orderStatusResponse = await putOrderStatus(id, statusObject);
  if (orderStatusResponse.ok) {
    getOrdersData();
  }
}

export { updateOrderStatusSelectorActivated };
