console.log("Question -3\n");

let shoes = [
  { type: "sneakers", color: "white", size: 7, price: 80000 },
  { type: "sport-shoes", color: "black", size: 9, price: 5000 },
];

let shirts = [
  { type: "t-shirt", color: "grey", size: "XS", price: 1000 },
  { type: "shirt", color: "blue", size: "XXL", price: 2000 },
  { type: "crop-shirt", color: "white", size: "S", price: 1500 },
];

let warehouse = [];
warehouse = warehouse.concat(shoes, shirts);

function calculateTotalPrice() {
  let totalWorth = 0;

  if (warehouse.length === 0) {
    console.log("No products in the warehouse");
    return;
  }
  for (let i = 0; i < warehouse.length; i++) {
    if (!warehouse[i].price) {
      console.log("Price is missing in the warehouse");
      return;
    } else if (
      typeof warehouse[i].price !== "number" ||
      warehouse[i].price < 0
    ) {
      console.log("Invalid value of Price");
      return;
    }
    totalWorth += warehouse[i].price;
  }
  return totalWorth;
}

function descendingSort() {
  warehouse.sort(function (a, b) {
    return b.price - a.price;
  });
}

function getBlueProducts() {
  return warehouse.filter((product) => product.color === "blue");
}

descendingSort();

let totalWorth = calculateTotalPrice();

let blueProducts = getBlueProducts();

console.log(
  "Total worth of products shown in the warehouse: ",
  totalWorth + "\n"
);

console.log("Warehouse with decreasing price of products: ", warehouse);

console.log("\nBlue color products of warehouse: ", blueProducts);
