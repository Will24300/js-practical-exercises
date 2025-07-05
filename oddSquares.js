function oddSquares(arr) {
  const isNotEven = arr.filter((num) => num % 2 !== 0);

  return isNotEven.map((num) => num ** 2);
}

console.log(oddSquares([1, 2, 3, 4, 5, 6]));
