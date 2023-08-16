import { createSlice } from "@reduxjs/toolkit";

const relatedVIdeosSlice = createSlice ({
    name:'relatedVideos',
    initialState:{
        relatedVideos: [],
    },
    reducers:{
        addRelatedVideos: (state, action) => {
            state.relatedVideos.push(action.payload)
            console.log(state.relatedVideos)
        },
    }

})

export const {addRelatedVideos} = relatedVIdeosSlice.actions;
export default relatedVIdeosSlice.reducer;