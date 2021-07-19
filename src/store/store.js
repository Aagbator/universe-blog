import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/posts.reducer";
import spinnerReducer from "./reducers/spinner.reducer";

const store = configureStore({
    reducer: {
        posts: postsReducer,
        spinner: spinnerReducer
    }
});

export default store;