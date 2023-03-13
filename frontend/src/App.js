import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Posters from "./components/Posters";
import About from "./components/About";
import Feedback from "./components/Feedback";
import Box from "@mui/material/Box";
import SearchB from "./components/SearchB";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PosterDetails from "./components/PosterDetails";
import { useState } from "react";
import Results from "./components/Results";
import MovieCarsel from "./components/MovieCarsel";
import { createTheme } from "@mui/material/styles";
import Footer from "./components/Footer";

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
  return (
    <>
      {/* <Posters></Posters> */}

      {/*  <Navbar
          finalTransfer={dataTranserToApp}
          onAddSearch={addSearchHandler}
        /> */}
      <Box sx={{ marginTop: 15, textAlign: "center" }}>
        <Router>
          <Navbar
            finalTransfer={dataTranserToApp}
            onAddSearch={addSearchHandler}
          />

          {/* <SearchB
            datat={dataTransfer}
            onSaveSearchData={saveSearchHandler}
          ></SearchB> */}

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
            <Route path="/movies/:_id" element={<PosterDetails />} />
            <Route
              path="/about"
              element={!nm ? <About /> : <Results name={nm} />}
            />
            <Route
              path="/feedback"
              element={!nm ? <Feedback /> : <Results name={nm} />}
            />
          </Routes>
          {/* <Footer /> */}
        </Router>
        <Footer />
      </Box>
    </>
  );
}

export default App;
