import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-55a56.firebaseio.com/'
});

export default instance; 