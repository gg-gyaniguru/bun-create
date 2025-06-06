import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    secret: undefined,
}

const client = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setSecret: (state, action) => {
            state.secret = action.payload;
        },
        removeSecret: (state, action) => {
            state.secret = undefined;
        }
    }
});

export const {setSecret, removeSecret} = client.actions;
export default client.reducer;