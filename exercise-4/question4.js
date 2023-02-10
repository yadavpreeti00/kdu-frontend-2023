console.log("Question-4-a");

const givenString =
  '{"firstName":"Alex","lastName":"Hunter","email":"alex@yahoo.com","age":24, "city":"london", "country":"england"}';

let ansObject = JSON.parse(givenString);

//if geven string is something apart from string
if (typeof ansObject !== "object") {
  console.log("Given string is not a valid JSON object");
  return;
}

for (let key in ansObject) {
  if (typeof ansObject[key] === "string" && key !== "email") {
    ansObject[key] = ansObject[key].toUpperCase();
  }
}

console.log("JSON Object from given String is : ");
console.log(ansObject);

let ansString = JSON.stringify(ansObject, (key, value) => {
  if (key === "email") {
    return undefined;
  }
  return value;
});

console.log("String from json object is : ");
console.log(ansString);
