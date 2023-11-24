import axios from 'axios';
const instance = axios.create({
    baseURL:"https://655f1b01879575426b4491c2.mockapi.io/redux-crud"
})
export default instance;