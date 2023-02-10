console.log("Question -1 ");

const billArray = [140, "45", 280];

function tipCalculator(amount) {
  //if input is not a number then return
  if (typeof amount !== "number") {
    return;
  }
  if (amount < 50) {
    return amount * 0.2;
  } else if (amount >= 50 && amount <= 200) {
    return amount * 0.15;
  } else if (amount > 200) {
    return amount * 0.1;
  }
}

let tipArray = billArray.map(tipCalculator);

console.log("Tip array is : " + tipArray);

let totalBillArray = billArray.map(function (billArrayItem, tipArrayIndex) {
  let total = 0;

  //if either billArrayItem or tipArray item is not a number then return 0 as the sum
  if (
    typeof billArrayItem !== "number" ||
    typeof tipArray[tipArrayIndex] !== "number"
  ) {
    return;
  } else {
    total = billArrayItem + tipArray[tipArrayIndex];
  }
  return total;
});

console.log("Total bill is : " + totalBillArray);
