import axios from "axios";

//CREATE AN INSTANCE OF THE BASE URL
export const instance = axios.create({
  baseURL:
    "https://ky9jasp2p5.execute-api.us-east-1.amazonaws.com/dev/rooms-details",
  headers: {
    "Content-Type": "application/json",
  },
});
console.log(instance.get(""));
