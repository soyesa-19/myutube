import { configureStore } from "@reduxjs/toolkit";
import cacheSlice from "./cacheSlice";
import toggleSlice from "./toggleSlice";
import chatSlice from "./chatSlice";
import videoSlice from "./videoSlice";
import relatedVIdeosSlice from "./relatedVideosSlice";

const store = configureStore({
    reducer: {
        toggle: toggleSlice,
        cache: cacheSlice,
        chat: chatSlice,
        videos: videoSlice,
        relatedvideos: relatedVIdeosSlice,
      },
})


export default store;