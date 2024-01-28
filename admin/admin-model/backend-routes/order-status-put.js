import { endpoint } from "../../../frontpage/frontpage-model/endpoint.js";

async function putOrderStatus(id, statusValue) {
  // console.log("PUTTING: ", data);
  try {
    console.log("the data id: ", id);
    const response = await fetch(`${endpoint}orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(statusValue),
    });

    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    } else {
      const result = await response.json();
      console.log("update successful! ", result);
    }

    return response;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export { putOrderStatus };
