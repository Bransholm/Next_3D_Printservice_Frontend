import { catalogueItem } from "../frontpage-view/view-render-classes/catalogue-class.js";

// creates an array of catalogue class intances
export function createCatalogueClasses(catalogueDataList) {
  const catalogueInstanceList = [];

  for (const catalogueObject of catalogueDataList) {
    // creates a new instance of the cusomer class based on the catalogue object
    const newCatalogueInstance = new catalogueItem(catalogueObject);

    // adds the newly created instance to the 'catalogueInstanceList' list
    catalogueInstanceList.push(newCatalogueInstance);
  }
  return catalogueInstanceList;
}
