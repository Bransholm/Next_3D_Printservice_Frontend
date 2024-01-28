import { endpoint } from "../../../../frontpage/frontpage-model/endpoint.js";

async function putCatalogueItem(data) {
  console.log("UPDATING: ", data);
  try {
    const response = await fetch(`${endpoint}catalogue/${data.id}`, {
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
    console.error("Error:", error);
  }
}

export { putCatalogueItem };
