import api from "../utils/api";
import { AxiosResponse } from 'axios';

const signup = async (name: string, email: string, password: string): Promise<AxiosResponse> => {
    const response = await api.post('/user/signup', {name, email, password});
    return response;
}

// const login = async (email: string, password: string): Promise<string> => {
//     const token = await api.post('/user/login', {email: email, password: password});
//     localStorage.setItem('token', JSON.stringify(token));
//     return JSON.stringify(token);
// }

const login = async (email: string, password: string): Promise<string> => {
    try {
        const response = await api.post('/user/login', { email, password });

        // Assuming the token is in response.data
        const token = response.data.token;

        // Store the token in localStorage
        localStorage.setItem('token', token);

        // Return the token
        return token;
    } catch (error) {
        console.error('Login failed', error);
        throw new Error('Login failed');
    }
};

export { signup, login };