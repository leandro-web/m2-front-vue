import axios from 'axios';

export const http = axios.create({
    baseURL:'https://my-json-server.typicode.com/leandro-web/m2-front-vue'
});