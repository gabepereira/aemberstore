import axios from 'axios';

const api = axios.create({
    baseURL: 'https://warm-caverns-31460.herokuapp.com'
});

export default api;