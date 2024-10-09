import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Posters from "./Posters";
import Results from "./Results";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Link } from "react-router-dom";

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

  var settings = {
    className: "center",
    centerMode: true,
    centerPadding: "19px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    adaptiveHeight: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,

    afterChange: onSlideChange,
  };

  return (
    <>
      <Box
        sx={{
          margin: 6,
          marginTop: 8,
        }}
      >
        <Slider {...settings}>
          {movies.map((movie, index) => (
            <Box
              key={movie._id}
              sx={{
                transform: currentIndex === index ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <Link to={`/movies/${movie._id}`} underline="none">
                <Box
                  component="img"
                  sx={{
                    height: "14rem",
                    width: "auto",

                    borderRadius: 7,
                  }}
                  src={movie.Poster}
                  alt={movie.Title}
                />
              </Link>
            </Box>
          ))}
        </Slider>
      </Box>

      <Button
        sx={{ position: "relative", left: "30rem", color: "black" }}
        variant=""
        endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}
        onClick={navigateToHome}
      >
        Show All Movies
      </Button>

      {/* for smaller screens */}
    </>
  );
};

export default MovieCarousel;
