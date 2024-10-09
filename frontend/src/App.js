import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Posters from "./components/Posters";
import About from "./components/About";
import Feedback from "./components/Feedback";
import Addreview from "./components/Addreview";
import Box from "@mui/material/Box";
import SearchB from "./components/SearchB";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PosterDetails from "./components/PosterDetails";
import { useEffect, useState } from "react";
import Results from "./components/Results";
import MovieCarsel from "./components/MovieCarsel";
import { createTheme } from "@mui/material/styles";
import Footer from "./components/Footer";
import { getMovies } from "./store/movieActions";
import { useDispatch } from "react-redux";
// import Login from "./components/Login";
import Register from "./components/Register";
import ViewReview from "./components/ViewReview";

/* createTheme((theme) => ({
  root: {
    backgroundImage: `url('/3.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    textalign: "center",
  },
})); */

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const classes = createTheme();
  const [nm, setnm] = useState("");

  ////////////////////////////////////
  /* const dataTransfer = (p) => {
    props.finalTransfer(p);
  };
  //new code on 15feb for search
  const saveSearchHandler = (movies) => {
    const searchData = {
      ...movies,
    };
    console.log(searchData);
    props.onAddSearch(searchData);
  }; */

  /////////////////////////////////

  const addSearchHandler = (result) => {
    console.log("in App");
    console.log(result);
    // setnm(result);
  };

  const dataTranserToApp = (nameData) => {
    setnm(nameData);
  };

  const clearSearch = () => {
    setnm(null);
  };
  return (
    <>
      <Box
        sx={{
          marginTop: 15,
          textAlign: "center",
        }}
      >
        <Router>
          <Navbar
            finalTransfer={dataTranserToApp}
            onAddSearch={addSearchHandler}
            onClearbar={clearSearch}
          />

          <Routes>
            <Route
              path="/"
              element={!nm ? <MovieCarsel /> : <Results name={nm} />}
            />
            <Route
              exact
              path="/poster"
              element={!nm ? <Posters /> : <Results name={nm} />}
            />
            <Route path="/movies/:_id" element={<PosterDetails />}>
              {/* <Route  path="reviews" element={<ViewReview />} /> */}
            </Route>
            <Route path="/movies/reviews/:_id" element={<ViewReview />} />
            <Route
              path="/about"
              element={!nm ? <About /> : <Results name={nm} />}
            />
            <Route
              path="/feedback"
              element={!nm ? <Feedback /> : <Results name={nm} />}
            />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/register" element={<Register />} />
            {/* <Route path="/reset-pass" element={<ResetPass />} /> */}
          </Routes>
          <Footer />
        </Router>
        {/* <Login />
        <Register /> */}
      </Box>
    </>
  );
}

export default App;
