import { getOrdersData } from "./admin-main.js";

// This file handles the orders filter on the admin Orders page

// The filter variable used with the filter on the Orders page
let ordersStatusValue = "ordered";

// Sets the active filter term from the admin product catalogue page filter input into the filter variable
async function ordersFilter(event) {
  ordersStatusValue = event.target.value;
  console.log(`ordersStatusValue: ${ordersStatusValue}`);
  getOrdersData();
}

export { ordersFilter, ordersStatusValue };
