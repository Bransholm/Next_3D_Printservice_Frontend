import { formateDate } from "./admin-view-helper-functions/formate-date.js";

// re-sets the finance overivew
function showFinanceOveriew(startDate, endDate, income) {
  document.querySelector("#finance-overview-container").innerHTML = `
  Indtægten for perioden ${formateDate(startDate)} til ${formateDate(
    endDate
  )} er: ${income} DKK
  `;
}

export { showFinanceOveriew };
