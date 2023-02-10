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

let keysOfPlayer = getAllKeys(player);
console.log(keysOfPlayer);

let valuesOfPlayer = getAllValues(player);
console.log(valuesOfPlayer);

let valuesOfCareerInfo = getAllValues(player.careerInfo);
console.log(valuesOfCareerInfo);

let keysOfFcBarcelona = getAllKeys(player.careerInfo.fcBarcelona);
console.log(keysOfFcBarcelona);
