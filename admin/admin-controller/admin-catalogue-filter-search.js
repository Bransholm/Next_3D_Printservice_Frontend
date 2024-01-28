// Imports here

// This file handles the admin filter and search on the admin product catalogue page

// The filter and search variables used with the filter and search on the product catalogue page
let activeFilterValue = "1";
let adminSearchValue = "";

// Sets the active filter term from the admin product catalogue page filter input into the filter variable
async function adminFilterContent(event) {
  activeFilterValue = event.target.value;
  console.log(`activeFilterValue: ${activeFilterValue}`);
//   const catalougeItemObjects = await getCatalogueData();
//   showCatalougeToCustomers(catalougeItemObjects);
}

// Sets the search term from the admin product catalogue page search input into the search variable
async function adminSearchContent() {
  adminSearchValue = document.querySelector("#admin-search").value;
//   const catalougeItemObjects = await getCatalogueData();
//   showCatalougeToCustomers(catalougeItemObjects);
  console.log(adminSearchValue);
  adminSearchValue = "";
  document.querySelector("#admin-search").value = "";
}

export { adminFilterContent, adminSearchContent, activeFilterValue, adminSearchValue };
