import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: 'cache',
    initialState:{

    },
    reducers:{
        cacheResult: (state, action) => {  
            state = Object.assign(state, action.payload)
        },
    },
});

export const { cacheResult } = cacheSlice.actions;
export default cacheSlice.reducer;


