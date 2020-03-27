import axios from 'axios';

const api = axios.create({
    baseURL: 'https://betheheroback2.herokuapp.com',
})

export default api;