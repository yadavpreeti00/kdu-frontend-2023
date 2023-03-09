import axios from "axios";

//CREATE AN INSTANCE OF THE BASE URL
const cleaningTypesInstance = axios.create({
  baseURL:
    "https://r99ln2uxq3.execute-api.ap-south-1.amazonaws.com/Test/static/cleaning-types",
});
const cleaningFrequenciesInstance = axios.create({
  baseURL:
    "https://r99ln2uxq3.execute-api.ap-south-1.amazonaws.com/Test/static/cleaning-frequencies",
});
const roomTypesInstance = axios.create({
  baseURL:
    "https://r99ln2uxq3.execute-api.ap-south-1.amazonaws.com/Test/static/room-types",
});
const timeSlotsInstance = axios.create({
  baseURL:
    "https://r99ln2uxq3.execute-api.ap-south-1.amazonaws.com/Test/static/time-slots",
});
const extrasInstance = axios.create({
  baseURL:
    "https://r99ln2uxq3.execute-api.ap-south-1.amazonaws.com/Test/static/extras",
});

export const axiosInstances ={
  cleaningTypesInstance,
  cleaningFrequenciesInstance,
  roomTypesInstance,
  timeSlotsInstance,
  extrasInstance,
};
