import { endpoint } from "../../../frontpage/frontpage-model/endpoint.js";

async function putOrderStatus(id, putData) {
  // console.log("PUTTING: ", data);
  try {
    console.log("the data id: ", id);
    const response = await fetch(`${endpoint}orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers if needed
      },
      body: JSON.stringify(putData),
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
    // Handle errors here
    console.error("Error:", error);
    throw error;
  }
}

export { putOrderStatus };
