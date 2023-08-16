import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'videos',
    initialState:{
        videoItems:[]
    },
    reducers:{
        addVideos: (state, action) => {
            state.videoItems.push(action.payload)
        },
        deleteVideos: (state) => {
            state.videoItems = []
        }
    }
})

export const {addVideos, deleteVideos} = videoSlice.actions;
export default videoSlice.reducer;