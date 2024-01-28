import { endpoint } from "../../frontpage/frontpage-model/endpoint.js";
import {
  startDateValue,
  endDateValue,
} from "../admin-controller/finance-site.js";
import { adminSearchValue, activeFilterValue } from "../admin-controller/admin-catalogue-filter-search.js";

// fetching catalogue data
async function getCatalogueData() {
  console.log("get data to admin");
  const response = await fetch(
    `${endpoint}/adminCatalogue?active=${activeFilterValue}&search=${adminSearchValue}`
);
  const catalogueData = await response.json();
  return catalogueData;
}

// fetching customers data
async function fetchCustomersData() {
  console.log("get customers data");

  const response = await fetch(`${endpoint}/viewCustomers`);
  const customersData = await response.json();
  return customersData;
}

// fetching stock data
async function getStockData() {
  console.log("get data to admin");

  const response = await fetch(`${endpoint}/stock`);
  const stockData = await response.json();
  return stockData;
}

// fetching avaible stock data
async function getAvailableStockData() {
  const response = await fetch(`${endpoint}/availableStock`);
  const stockData = await response.json();
  return stockData;
}

async function getfinanceData() {
  const response = await fetch(
    `${endpoint}/finance?startDate=${startDateValue}&endDate=${endDateValue}`
  );
  console.log(
    `${endpoint}/finance?startDate=${startDateValue}&endDate=${endDateValue}`
  );
  const data = response.json();
  return data;
}

async function fetchSystemVariables() {
  const response = await fetch(`${endpoint}/variables`);
  const variableData = await response.json();
  return variableData;
}



export {
  fetchCustomersData,
  getCatalogueData,
  getStockData,
  getAvailableStockData,
  getfinanceData,
  fetchSystemVariables
};
