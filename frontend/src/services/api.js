import axios from 'axios';

const api = axios.create({
    baseURL: 'https://betheheroapi.herokuapp.com/',
})

export default api;