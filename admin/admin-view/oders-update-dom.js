import { putOrderStatus } from "../admin-model/backend-routes/order-status-put.js";

function orderSelect(status) {
  const statusSelectHTML =
    /*html*/
    `
  <select class="order-status-selector">
  <option value="ordered"  ${
    status === "ordered" ? "selected" : ""
  }>Bestilt</option>
  <option value="paid" ${status === "paid" ? "selected" : ""}> Betalt</option>
  <option value="delivered"  ${
    status === "delivered" ? "selected" : ""
  }>Afsendt</option>
  </select>
  `;

  return statusSelectHTML;
}

function returnZeroIfNull(input) {
  if (input == null) {
    return "0.00";
  } else {
    return input;
  }
}

function generateOrdersDom(orderesList) {
  document.querySelector("#orders-overview-body");
  for (const order of orderesList) {
    const orderHTML =
      /*html*/
      `
    <tr>
    <td>${order.Id}</td>
    <td>${order.customer_ID}</td>
    <td>${order.TimeDate}</td>
    <td> ${order.DeliveryAdress} </td>
    <td>${order.DeliveryZipCode}</td>
    <td>${order.DeliveryCity}</td>
    <td>${returnZeroIfNull(order.TotalPrice)} dkk</td>
    <td>${returnZeroIfNull(order.TotalTax)} dkk</td>
    <td>${order.ShippingPrice} dkk</td>
    <td>${orderSelect(order.Status)}</td>
    </tr>
    `;

    document
      .querySelector("#orders-overview-body")
      .insertAdjacentHTML("beforeend", orderHTML);

    document
      .querySelector(
        "#orders-overview-body tr:last-child .order-status-selector"
      )
      .addEventListener("change", () =>
        updateOrderStatusSelectorActivated(order.Id)
      );
  }
}

function updateOrderStatusSelectorActivated(id) {
  const value = document.querySelector(".order-status-selector").value;
  console.log("Select Changed ", id, value);

  putOrderStatus();
}

export { generateOrdersDom };
