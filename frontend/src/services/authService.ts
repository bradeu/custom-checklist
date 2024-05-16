import api from "../utils/api";
import { AxiosResponse } from 'axios';

const signup = async (name: string, email: string, password: string): Promise<AxiosResponse> => {
    try {
        const response = await api.post('/user/signup', {name, email, password});
        const message = response.data.message;
        return message;
    } catch (error) {
        console.error('Signup failed', error);
        throw new Error('Signup failed');
    }
};

const login = async (email: string, password: string): Promise<string> => {
    try {
        const response = await api.post('/user/login', { email, password });
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