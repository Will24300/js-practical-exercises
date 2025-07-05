let person = {
  name: "Volonte",
  age: 12,
  occupation: null,
  address: undefined,
  phoneNumber: "+1791037432",
  email: undefined,
};

function convertNullableValues(obj) {
  for (let objName in obj) {
    if (obj[objName] === null) {
      obj[objName] = 0;
    } else if (obj[objName] === undefined) {
      obj[objName] = "";
    }
  }

  return obj;
}

console.log(convertNullableValues(person));
