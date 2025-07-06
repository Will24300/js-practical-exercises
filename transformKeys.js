function transformKeys(obj, transformFn) {
  const newObj = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = transformFn(key);
      newObj[newKey] = obj[key];
    }
  }

  return newObj;
}

const inputObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const transformFunction = (key) => key.toUpperCase();

const transformedObject = transformKeys(inputObject, transformFunction);

console.log("Original Object:", inputObject);
console.log("Transformed Object:", transformedObject);
