import { postCatelogueItem } from "../../admin-model/backend-routes/catalouge-routes/catalogue-post.js";
import { getCatalogueItemsData } from "../admin-main.js";

// retrieves the user input and creates a new catalouge item
async function createNewCatalogueItem(event) {
  event.preventDefault();

  const catelogueForm = event.target;

  // WHERE IS THE ID in all of this??? The id is made through the route, which gives the newly created catalogue item
  // a unique id
  const title = catelogueForm.title.value;
  const standardSize = Number(catelogueForm.size.value);
  const standardWeight = Number(catelogueForm.weight.value);
  const itemDescription = catelogueForm.description.value;
  const imageLink = catelogueForm.image.value;
  const category = catelogueForm.category.value;
  const active = Number(catelogueForm.active.value);

  // creates a new catalouge item
  const catalogueItem = createCatelogueItemProduct(
    title,
    standardSize,
    standardWeight,
    itemDescription,
    imageLink,
    category,
    active
  );

  // the catalogue item is send as an argument - the new catalouge item is created in the database
  const response = await postCatelogueItem(catalogueItem);
  if (response.ok) {
    // fetches the updated catalogue item data
    getCatalogueItemsData();
  }
}

// return the data as an object
function createCatelogueItemProduct(
  title,
  standardSize,
  standardWeight,
  itemDescription,
  imageLink,
  category,
  active
) {
  return {
    title,
    standardSize,
    standardWeight,
    itemDescription,
    imageLink,
    category,
    active,
  };
}

export { createNewCatalogueItem };
