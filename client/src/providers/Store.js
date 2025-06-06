'use client'

import {useRef} from 'react';
import createStore from '@/store';
import {Provider} from "react-redux";

const Store = ({children}) => {

    const store = useRef(undefined);

    if (!store.current) {
        store.current = createStore();
    }

    return (
        <>
            <Provider store={store.current}>
                {children}
            </Provider>
        </>
    );
};

export default Store;