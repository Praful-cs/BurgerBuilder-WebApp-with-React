import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburgerproject77.firebaseio.com/'
});

export default instance;