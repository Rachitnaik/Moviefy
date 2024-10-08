import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import About from "./About";
import Paralax from "./Paralax";
import Feedback from "./Feedback";
import Posters from "./Posters";
import Results from "./Results";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Link } from "react-router-dom";
import { createTheme } from "@mui/material/styles";

createTheme(() => ({
  slickSlider: {
    borderRadius: "50%",
    overflow: "hidden",
    height: "20rem",
  },
}));

//functio starts here
const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/poster");
  };

  useEffect(() => {
    axios.get("https://moviefy-84ni.vercel.app/movies").then((response) => {
      setMovies(response.data);
    });
  }, []);

  var [currentIndex, setCurrentIndex] = useState(0);

  const onSlideChange = (index) => {
    setCurrentIndex(index);
  };

  /* this is for desktop */
  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "10px",
    /*    dots: true, */
    infinite: true,

    slidesToShow: 7,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    /* arrows: false, */

    afterChange: onSlideChange,
  };

  /* above setting  is for desktop */

  /* below settings for mobile */

  var mobile_settings = {
    className: "center",
    centerMode: true,
    centerPadding: "10px",
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,

    afterChange: onSlideChange,
  };

  /* mobile settings */

  return (
    <>
      <Box
        sx={{
          margin: 4,
          marginTop: 5,
        }}
      >
        <Slider
          {...settings}
          responsive={[
            {
              breakpoint: 960,
              settings: mobile_settings,
            },
          ]}
        >
          {movies.map((movie, index) => (
            <>
              <Box
                key={movie._id}
                sx={{
                  transform: currentIndex === index ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.2s ease-in-out",
                  display: { xs: "none", md: "flex" },
                  /*  background:
                    "linear-gradient(135deg, #c7cdc6 0%, #8988b9 100%)", */
                }}
              >
                <Link to={`/movies/${movie._id}`} underline="none">
                  <Box
                    component="img"
                    sx={{
                      height: "14rem ",
                      width: "auto",
                      borderRadius: 7,
                      display: { xs: "none", md: "flex" },
                    }}
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                </Link>
              </Box>
              {/* for mobile */}
              <Box
                key={movie._id}
                sx={{
                  transform: currentIndex === index ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.2s ease-in-out",
                  display: { xs: "flex", md: "none" },
                }}
              >
                <Link to={`/movies/${movie._id}`} underline="none">
                  <Box
                    component="img"
                    sx={{
                      mt: 12,
                      height: "20rem",
                      width: "auto",
                      marginLeft: 6.3,
                      borderRadius: 7,
                      /*  display: { xs: "flex", md: "none" }, */
                    }}
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                </Link>
              </Box>
            </>
          ))}
        </Slider>
      </Box>

      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Button
              sx={{
                color: "black",
                fontFamily: "monospace",
                fontSize: "1rem",
              }}
              variant=""
              endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
              onClick={navigateToHome}
            >
              Show All Movies
            </Button>
          </Grid>
        </Grid>
      </Container>
      {/*  <Container
        sx={{
          marginTop: "14rem",
        }}
      >
        <About />
      </Container>

      <Container
        sx={{
          marginTop: "13rem",
          paddingBottom: "5rem",
        }}
      >
        <Feedback />
      </Container> */}
    </>
  );
};

export default MovieCarousel;
