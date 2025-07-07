let rectange = {
  height: 5,
};

let areaFn = function (width) {
  console.log("The area is: " + this.height * width);
};

let area = areaFn.bind(rectange, 10);

//area();

let arrNum = [34, 121, 57, 28, 91];

let max = Math.max.apply(null, arrNum);

//console.log(max);
let student = {
  name: "john",
};

let capitalizeFn = function () {
  return this.name.charAt(0).toUpperCase() + this.name.slice(1);
};

const capitalizedName = capitalizeFn.call(student);

let product1 = {
  name: "oil",
  price: 50,
};
let product2 = {
  name: "eggs",
  price: 100,
};

let discountFn = function () {
  return this.price * 0.9;
};
let discountedProduct1 = discountFn.bind(product1);
let discountedProduct2 = discountFn.bind(product2);

console.log(discountedProduct1());
console.log(discountedProduct2());

// console.log(discountFn.call(product1));
// console.log(discountFn.call(product2));
