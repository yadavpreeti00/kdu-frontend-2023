import axios from 'axios';

//CREATE AN INSTANCE OF THE BASE URL
const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/products'
});
export default instance;