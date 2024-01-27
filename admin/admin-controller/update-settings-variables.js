import { retrieveUpdateSettingsInput } from "./create-update-forms/update-system-variables.js";
import { putSystemVariables } from "../admin-model/backend-routes/system-variables-put.js";

async function submitUpdatedSettings() {
  const updateFormData = retrieveUpdateSettingsInput();
  updateSettingsVariables(updateFormData);
}

function updateSettingsVariables(updateFormData) {
  putSystemVariables(updateFormData);
}

export { submitUpdatedSettings };
