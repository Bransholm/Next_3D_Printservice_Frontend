import { autoFillSettingsForm } from "./create-update-forms/update-system-variables.js";

function showSettings(systemVariablesData) {
  const variables = systemVariablesData[0];
  autoFillSettingsForm(variables);
}

export { showSettings };
