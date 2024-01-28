import { retrieveUpdateSettingsInput } from "./create-update-forms/update-system-variables.js";
import { putSystemVariables } from "../admin-model/backend-routes/system-variables-put.js";
import { getSystemSettingsData } from "./admin-main.js";

async function submitUpdatedSettings(event) {
  event.preventDefault();
  const updateFormData = retrieveUpdateSettingsInput();
  updateSettingsVariables(updateFormData);
}

function updateSettingsVariables(updateFormData) {
  console.log("update", updateFormData);
  const updateSettingsResponse = putSystemVariables(updateFormData);
  if (updateSettingsResponse.ok) {
    getSystemSettingsData();
  }
}

export { submitUpdatedSettings };
