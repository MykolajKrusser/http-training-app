import axios from 'axios';

const instance = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com"
})

instance.defaults.headers.common['Authirization'] = 'AUTH TOKEN FROM instance';

export default instance;