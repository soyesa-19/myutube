import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'toggle',
    initialState:{
        isToggle: true,
    },
    reducers:{
        toggleSidebar: (state) => {
            state.isToggle = (!state.isToggle)
        },
        closeSidebar: (state) => {
            state.isToggle = false;
        },
        openSidebar: (state) => {
            state.isToggle = true;
        },
    }
});


export const {toggleSidebar, closeSidebar, openSidebar} = toggleSlice.actions;
export default toggleSlice.reducer;