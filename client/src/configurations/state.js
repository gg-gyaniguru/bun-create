import {createContext as create, useContext as useStore} from 'react';

const state = create({});

export const {Provider} = state;
export default () => useStore(state);