import api from "../utils/api";
import { AxiosResponse } from 'axios';

const signup = async (name : string, email : string, password : string) : Promise<AxiosResponse> => {
    const response = await api.post('/user/signup', {name, email, password});
    return response;
}

const login = async (email : string, password : string) : Promise<AxiosResponse> => {
    const token = await api.post('/user/login', {email, password});
    localStorage.setItem('token', JSON.stringify(token));
    return token;
}

export { signup, login };