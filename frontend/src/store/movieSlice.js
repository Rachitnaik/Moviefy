import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [{}],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    movieData(state, action) {
      state.movies = action.payload.movies;
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
