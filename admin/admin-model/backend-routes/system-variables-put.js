import { endpoint } from "../../../frontpage/frontpage-model/endpoint.js";

async function putSystemVariables(data) {
  try {
    const response = await fetch(`${endpoint}/variables`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      const result = await response.json();
      console.log(result);
    }
    return response;
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
    throw error;
  }
}

export { putSystemVariables };
