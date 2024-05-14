import axios, { AxiosRequestConfig, AxiosError } from 'axios';

const api = axios.create({
    baseURL: 'https://your-api-url.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;

