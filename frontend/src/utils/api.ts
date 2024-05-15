import axios, { AxiosInstance } from 'axios';

// Retrieves the bearer token
const getToken = () : string | null => {
    return localStorage.getItem('token');
}

// Create an axios instance with the base configuration
const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
    ,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to include the bearer token dynamically
api.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default api;