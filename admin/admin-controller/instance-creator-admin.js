// this creates an instancee of products

/*
HUSK FRONT ENDEN!!!
  Vi kalder det i showCatalouge - admin main
  Vi kalder det i show-stock-materials -
*/

// this function create classes for catalogue items
export function createClassInstances(dataList, classType) {
  const instanceList = [];

  // Loop to fetch the data
  for (const object of dataList) {
    // Hvert objekt i listen bliver nu lavet til en ny instans.
    const newInstance = new classType(object);

    // the instance is pushed to our new list
    instanceList.push(newInstance);
  }
  console.log("classlist: ", instanceList);

  // return the instance list
  return instanceList;
}
