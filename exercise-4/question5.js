console.log("Question-5");

let player = {
  firstName: "Leo",
  lastName: "Messi",
  address: {
    country: "Spain",
    city: "Barcelona",
  },
  careerInfo: {
    fcBarcelona: {
      appearances: 780,
      goals: {
        premierLeagueGoals: 590,
        championsLeagueGoals: 50,
      },
    },
  },
};

function getAllKeys(obj) {
  //edge case
  if (!obj || typeof obj !== "object") {
    return [];
  }

  let keys = [];

  for (let key in obj) {
    keys.push(key);

    if (typeof obj[key] === "object") {
      keys = keys.concat(getAllKeys(obj[key]));
    }
  }

  return keys;
}

function getAllValues(obj) {
  let values = [];

  //edge case
  if (!obj || typeof obj !== "object") {
    return [];
  }

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      values = values.concat(getAllValues(obj[key]));
    } else {
      values.push(obj[key]);
    }
  }

  return values;
}

let keysOfPlayer = getAllKeys(player);
console.log("\nkeys of Player object : ", keysOfPlayer);

let valuesOfPlayer = getAllValues(player);
console.log("\nValues of Player object : ", valuesOfPlayer);

let keysOfFcBarcelona = getAllKeys(player.careerInfo.fcBarcelona);
console.log("\nKeys of fcBarcelona object : ", keysOfFcBarcelona);

let valuesOfFcBarcelona = getAllValues(player.careerInfo.fcBarcelona);
console.log("\nValues of fcBarcelona object : ", valuesOfFcBarcelona);

let keysOfCareerInfo = getAllKeys(player.careerInfo);
console.log("\nKeys of Career Info object : ", keysOfCareerInfo);

let valuesOfCareerInfo = getAllValues(player.careerInfo);
console.log("\nValues of Career Info object : ", valuesOfCareerInfo);
