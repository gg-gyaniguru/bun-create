'use client'

import {ApolloProvider as Provider} from '@apollo/client';
import apollo from '@/configurations/apollo.js';

const Apollo = ({children}) => {
    return (
        <>
            <Provider client={apollo}>
                {children}
            </Provider>
        </>
    );
};

export default Apollo;