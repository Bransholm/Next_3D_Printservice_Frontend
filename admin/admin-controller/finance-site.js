import { getfinanceData } from "../admin-model/fetch-data-admin.js";
import { showFinanceOveriew } from "../admin-view/finance-overview.js";

let startDateValue;
let endDateValue;

async function submitFianceDates(event) {
  event.preventDefault();

  const form = document.querySelector("#finance-form");

  startDateValue = form.startDate.value;
  endDateValue = form.endDate.value;

  console.log("start", startDateValue);
  console.log("end", endDateValue);

  const financeData = await getfinanceData();
  const incomeAmount = financeData[0].CombinedPrice;
  if (incomeAmount != null) {
    showFinanceOveriew(startDateValue, endDateValue, incomeAmount);
  } else {
    showFinanceOveriew(startDateValue, endDateValue, 0);
  }
}

export { submitFianceDates, startDateValue, endDateValue };
