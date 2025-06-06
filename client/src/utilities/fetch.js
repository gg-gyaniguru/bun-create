import axios from '@/configurations/axios.js';

const post = async (url, data) => {
    try {
        const response = await axios.post(`${url}`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}

const put = async (url, data) => {
    try {
        const response = await axios.put(`${url}`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}

const get = async (url) => {
    try {
        const response = await axios.get(`${url}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}

const remove = async (url) => {
    try {
        const response = await axios.delete(`${url}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}

export {post, put, get, remove};
