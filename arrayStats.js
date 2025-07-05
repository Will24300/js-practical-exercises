function arrayStats(arr) {
  let sum = arr.reduce((acc, element) => acc + element);
  let average = (sum / arr.length).toFixed(2);
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return `sum: ${sum}, average; ${average}, min: ${min}, max: ${max}`;
}

console.log(arrayStats([1, 2, 3, 4, 5]));
