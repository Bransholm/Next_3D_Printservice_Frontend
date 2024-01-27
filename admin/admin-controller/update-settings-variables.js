import { retrieveUpdateSettingsInput } from "./create-update-forms/update-system-variables.js";

async function submitUpdatedSettings() {
  const updateFormData = retrieveUpdateSettingsInput();
  updateSettingsVariables(updateFormData);
}

updateSettingsVariables(updateFormData);

export { submitUpdatedSettings };
