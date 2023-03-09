import axios from "axios";
import { Auth } from "aws-amplify";

const axiosInstance=axios.create({
    baseURL : "https://r99ln2uxq3.execute-api.ap-south-1.amazonaws.com/Test"
}
);

axiosInstance.interceptors.request.use(
    async (config) => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const idToken = user.signInUserSession.idToken.jwtToken;
        config.headers.Authorization = `${idToken}`;
      } catch (err) {
        console.error(err);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  export default axiosInstance;