'use client'

import {useState} from 'react';
import {QueryClient, QueryClientProvider as Provider} from '@tanstack/react-query';

const Query = ({children}) => {

    const [query] = useState(() => new QueryClient());

    return (
        <>
            <Provider client={query}>
                {children}
            </Provider>
        </>
    );
};

export default Query;