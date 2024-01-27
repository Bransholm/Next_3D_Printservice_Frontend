import { Customers } from "../admin-view/admin-view-render-classes/customers-class.js";

let customersClassList;

function showCustomers(customersData) {
    customersClassList = createCustomersClasses(customersData, Customers)   
    callRenderMethodeForCustomers();
}

function createCustomersClasses(customersData, Customers) {
    const customersInstanceList = [];

    for (const customer of customersData) {
        const newCustomersInstance = new Customers(customer);
        customersInstanceList.push(newCustomersInstance);
    }
    return customersInstanceList;
}

function callRenderMethodeForCustomers() {
    document.querySelector("#showCustomers").innerHTML = "";
    for (const customerInstance of customersClassList) {
        const customersHTML = customerInstance.render();
        document.querySelector("#showCustomers").insertAdjacentHTML("beforeend", customersHTML);
    }

};

export { showCustomers };