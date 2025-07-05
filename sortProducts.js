const products = [
  {
    name: "cake",
    price: 4,
  },
  {
    name: "bread",
    price: 2,
  },
  {
    name: "eggs",
    price: 12,
  },
  {
    name: "tart",
    price: 7,
  },
  {
    name: "pizza",
    price: 9,
  },
];

function sortProducts(products) {
  return products.sort((a, b) => a.price - b.price);
}

console.log(sortProducts(products));
