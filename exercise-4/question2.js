console.log("\n Question -2 - a\n");

const stringArray = [
  "   Monday  ",
  "  Tuesday",
  "Wednesday  ",
  "  Thursday   ",
  "   Friday",
  "Saturday    ",
];

function capitalize(string) {
  if (typeof string !== "string") {
    console.log("invalid input string");
    return;
  }
  return string.trim().toUpperCase().slice(0, 3);
}

let ansArray = stringArray.map(capitalize);

console.log(ansArray);

console.log("\nQuestion -2 - b\n");

const testString1 = "javascript is cool ";
const testString2 = "programming is fun";
const testString3 = "  become a code";

const chars = {
  a: "4",
  e: "3",
  i: "1",
  o: "0",
  s: "5",
};

function convertToCodedString(string) {
  if (typeof string !== "string") {
    console.log("invalid input string");
    return;
  }
  string = string.trim();
  string = string.replace(/[aeios]/g, (m) => chars[m]);
  return string;
}

console.log(convertToCodedString(testString1));
console.log(convertToCodedString(testString2));
console.log(convertToCodedString(testString3));
