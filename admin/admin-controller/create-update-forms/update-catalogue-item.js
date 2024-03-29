let catalogueItemId;

// takes the catalouge-item as a parameter and use it to auto fill
function updateCatalogueDataAutofill(catalogueItem) {
  console.log(catalogueItem);
  const updateForm = document.querySelector("#updateCatalogueForm");

  //saves the id from the selected catalogueItem:
  catalogueItemId = catalogueItem.id;

  updateForm.title.value = catalogueItem.title;
  updateForm.size.value = catalogueItem.standardSize;
  updateForm.weight.value = catalogueItem.standardWeight;
  updateForm.description.value = catalogueItem.itemDescription;
  updateForm.image.value = catalogueItem.imageLink;
  updateForm.category.value = catalogueItem.category;
  updateForm.active.value = catalogueItem.active;
}

// retrieves the user input from the update-catalouge-form
function updateCatalogueInputData() {
  const form = document.querySelector("#updateCatalogueForm");
  const title = form.title.value;
  const standardSize = Number(form.size.value);
  const standardWeight = Number(form.weight.value);
  const itemDescription = form.description.value;
  const imageLink = form.image.value;
  const category = form.category.value;
  const active = Number(form.active.value);
  const id = catalogueItemId;

  return {
    title,
    standardSize,
    standardWeight,
    itemDescription,
    imageLink,
    category,
    active,
    id,
  };
}

export { updateCatalogueDataAutofill, updateCatalogueInputData };
