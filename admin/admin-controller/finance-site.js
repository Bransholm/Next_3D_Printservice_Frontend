import { getfinanceData } from "../admin-model/fetch-data-admin.js";
import { showFinanceOveriew } from "../admin-view/finance-overview.js";

let startDateValue;
let endDateValue;

function submitFianceDates(event) {
  event.preventDefault();
  // gets the values from the finance-form
  const form = document.querySelector("#finance-form");
  startDateValue = form.startDate.value;
  endDateValue = form.endDate.value;
  // gets the finance data and passes it to the show-finance function
  retrieveFinanceData();
}

async function retrieveFinanceData() {
  // fetches the finance data from the
  const financeData = await getfinanceData();
  // get the income amount from the finance data
  const incomeAmount = financeData[0].CombinedPrice;
  // checks if the income is null or not
  if (incomeAmount != null) {
    showFinanceOveriew(startDateValue, endDateValue, incomeAmount);
  } else {
    showFinanceOveriew(startDateValue, endDateValue, 0);
  }
}

export { submitFianceDates, startDateValue, endDateValue };
