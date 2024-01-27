function autoFillSettingsForm(settings) {
  const form = document.querySelector("#settings-form")

  const form.X.value = settings.Tax;
  const form.X.value = settings.ShippingPrice;
  const form.X.value = settings.MobilePayNumber;
  const form.X.value= settings.PriceCalculationForm;
}

function retrieveUpdateSettingsInput(event) {
  event.preventDefault();
  const form = document.querySelector("#settings-form");
  const tax = form.X.value;
  const shippingPrice = form.X.value;
  const mobilePayNumber = form.X.value;
  const priceCalculationForm = form.X.value;

const settingsUpdateObject = {
tax,
shippingPrice,
mobilePayNumber,
priceCalculationForm,
}

return settingsUpdateObject
}

export { autoFillSettingsForm, retrieveUpdateSettingsInput };
