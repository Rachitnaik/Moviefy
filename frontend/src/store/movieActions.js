import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { movieActions } from "./movieSlice";

//const movieFetch = useSelector(state); useSelector when we want to use data from redux store

const url = "https://moviefy-wine.vercel.app/movies";
export const getMovies = () => {
  return (dispatch) => {
    axios
      .get(url)
      .then((res) => {
        dispatch(movieActions.movieData({ movies: res.data }));
      })
      .catch((err) => {
        console.log("Go an error" + err);
      });
  };
};
