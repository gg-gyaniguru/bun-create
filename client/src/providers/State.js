'use client'

import React, {useState} from 'react';
import {Provider} from "@/configurations/state.js";

const State = ({children}) => {

    const [client, setClient] = useState(undefined);

    const value = {
        client,
        setClient,
    }

    return (
        <>
            <Provider value={value}>
                {children}
            </Provider>
        </>
    );
};

export default State;