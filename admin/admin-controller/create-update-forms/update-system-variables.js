function autoFillSettingsForm(settings) {
  const form = document.querySelector("#settings-form");
  form.tax.value = settings.Tax;
  form.shippingPrice.value = settings.ShippingPrice;
  form.mobilePayNumber.value = settings.MobilePayNumber;
  form.priceCalculationForm.value = settings.PriceCalculationForm;
}

// retreive the input from the setting forms
function retrieveUpdateSettingsInput() {
  const form = document.querySelector("#settings-form");
  const tax = form.tax.value;
  const shippingPrice = form.shippingPrice.value;
  const mobilePayNumber = form.mobilePayNumber.value;
  const priceCalculationForm = form.priceCalculationForm.value;

  const settingsUpdateObject = {
    tax,
    shippingPrice,
    mobilePayNumber,
    priceCalculationForm,
  };

  return settingsUpdateObject;
}

export { autoFillSettingsForm, retrieveUpdateSettingsInput };
