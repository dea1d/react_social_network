import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': '9406acf8-f220-4a28-b014-6a7fb4145d5f', }
})

export default instance;
