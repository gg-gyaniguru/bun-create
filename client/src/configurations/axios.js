import axios from 'axios';

const create = axios.create({
    baseURL: 'http://localhost:9060/api',
    withCredentials: true
});

export default create;