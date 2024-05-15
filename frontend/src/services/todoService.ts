import api from "../utils/api";
import { AxiosResponse } from 'axios';

const createTodo = async (id: number, email: string, content: string): Promise<AxiosResponse> => {
    const response = await api.post('/list/create', { id, email, content });
    return response;
}

const readTodo = async (): Promise<AxiosResponse> => {
    const response = await api.get('/list/read');
    return response;
}

const updateTodo = async (id: number, email: string, content: string): Promise<AxiosResponse> => {
    const response = await api.post('/list/update', { id, email, content });
    return response;
}

const deleteTodo = async (id: number, email: string): Promise<AxiosResponse> => {
    const response = await api.post('/list/delete', { id, email });
    return response;
}

export { createTodo, readTodo, updateTodo, deleteTodo };
