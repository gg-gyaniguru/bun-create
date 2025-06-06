import {configureStore} from '@reduxjs/toolkit';
import client from './features/client';

const createStore = () => {
    return configureStore({
        reducer: {
            client
        }
    });
};

export default createStore;