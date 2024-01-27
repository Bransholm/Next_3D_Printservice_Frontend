

// this function create classes for catalogue items
export function createClassInstances(dataList, classType) {
  const instanceList = [];

  // loops every object in the data fetched from the database
  for (const object of dataList) {
    // a new instance of the class is now made with the object as its argument
    const newInstance = new classType(object);

    // the instance is pushed to our new list
    instanceList.push(newInstance);
  }

  // return the instance list
  return instanceList;
}
