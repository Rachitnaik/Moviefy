import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";

const store = configureStore({
  reducer: {
    movieReducer: movieSlice, //only one since movie
  },
});

export default store;
