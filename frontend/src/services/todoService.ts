import api from "../utils/api";
import { AxiosResponse } from 'axios';

const createTodo = async (id: number, email: string, content: string): Promise<AxiosResponse> => {
    try {
        const response = await api.post('/list/create', { id, email, content });
        const message = response.data.message;
        return message;
    } catch (error) {
        console.error('Create Todo failed', error);
        throw new Error('Create Todo failed');
}
}

const readTodo = async (): Promise<AxiosResponse> => {
    try {
        const response = await api.get('/list/read');
        const result = response.data.result;
        return result;
    } catch (error) {
        console.error('Read Todo failed', error);
        throw new Error('Read Todo failed');
    }
    
}

const updateTodo = async (id: number, email: string, content: string): Promise<AxiosResponse> => {
    try {
        const response = await api.post('/list/update', { id, email, content });
        const message = response.data.message;
        return message;
    } catch (error) {
        console.error('Read Todo failed', error);
        throw new Error('Read Todo failed');
    }
}

const deleteTodo = async (id: number, email: string): Promise<AxiosResponse> => {
    try {
        const response = await api.post('/list/delete', { id, email });
        const message = response.data.message;
        return message;
    } catch (error) {
        console.error('Delete Todo failed', error);
        throw new Error('Delete Todo failed');
    }
}

export { createTodo, readTodo, updateTodo, deleteTodo };
