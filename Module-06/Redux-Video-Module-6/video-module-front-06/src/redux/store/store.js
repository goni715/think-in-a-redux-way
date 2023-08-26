import {configureStore} from "@reduxjs/toolkit";
import counterSliceReducer from "../state-slice/counterSlice.js";
import dynamicCounterSliceReducer from "../state-slice/dynamicCounterSlice.js";
import {createLogger} from "redux-logger";
import postSliceReducer from "../state-slice/postSlice.js";
import tagsSliceReducer from "../features/tags/tagsSlice.js";
import videosSliceReducer from "../features/videos/videosSlice.js";
import videoSliceReducer from "../features/video/videoSlice.js";
import relatedVideosSliceReducer from "../features/relatedVideos/relatedVideosSlice.js";
import filterSliceReducer from "../features/filter/filterSlice.js";

const logger = createLogger();

//configure store
const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
        dynamicCounter:dynamicCounterSliceReducer,
        post: postSliceReducer,
        videos: videosSliceReducer,
        tags: tagsSliceReducer,
        video: videoSliceReducer,
        relatedVideos: relatedVideosSliceReducer,
        filter: filterSliceReducer

    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(logger)


})

export default store;