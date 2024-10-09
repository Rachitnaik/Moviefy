import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Divider from "@mui/material/Divider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
// import Modal from "react-modal";
import ViewReview from "./ViewReview";

//to play youtube.

function PosterDetails() {
  ///to play youtube video as a modal
  // const [open, setOpen] = useState(false);

  /* const [modalIsOpen, setModalIsOpen] = useState(false); */

  /*  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }; */

  // var Link = require("react-router-dom").Link;

  // const { id = "" } = useParams(); --------- the part which was causing the fault

  const { _id } = useParams();
  const [movie, setMovie] = useState({});

  /* const onhandler = () => {
    navigate("reviews");
  };
 */
  //const _id = id.toString();--------------------- and this

  console.log("_id: ", _id);
  //const newId = "63dc981ba72a55be27fa47a6";

  useEffect(() => {
    async function fetchData() {
      console.log("_id inside useEffect: ", _id);
      if (_id && !Object.keys(movie).length) {
        const result = await axios.get(
          `https://moviefy-wine.vercel.app//movies/${_id}`
        );
        console.log(result);
        setMovie(result.data);
      }
    }
    fetchData();
  }, [_id]);

  return (
    <>
      <Container fullwidth>
        <Card
          sx={{
            background: "transparent",

            opacity: 10,
          }}
        >
          <Button
            sx={{ marginRight: 150 }}
            component={Link}
            to="/poster"
            variant=""
            endIcon={<ArrowBackIcon />}
          ></Button>
          <CardContent>
            {/*  <Typography variant="h4" component="h2">
              {movie.Title}
            </Typography> */}
            <Box display="flex">
              <Box
                component="img"
                sx={{
                  display: { xs: "none", md: "flex" },
                  height: "20%",
                  width: "20%",
                  marginRight: 3,

                  borderRadius: 5,
                }}
                src={movie.Poster}
                alt={movie.Title}
              />

              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    display: { xs: "flex", md: "none" },
                    height: "80%",
                    width: "50%",
                    marginLeft: 3,
                    marginBottom: 2,
                    border: "solid black 2px",
                    borderRadius: 3,
                  }}
                  src={movie.Poster}
                  alt={movie.Title}
                />

                <Box
                  sx={{
                    color: "#101935",
                  }}
                >
                  {/* adding title to movie.  */}
                  <Typography
                    sx={{ marginTop: "1rem", fontSize: 17, textAlign: "left" }}
                  >
                    <strong>Title:</strong> {movie.Title}
                  </Typography>
                  <Typography
                    sx={{ marginTop: "1rem", fontSize: 17, textAlign: "left" }}
                  >
                    <strong>Director:</strong> {movie.Director}
                  </Typography>
                  <Typography
                    sx={{ marginTop: "1rem", fontSize: 17, textAlign: "left" }}
                  >
                    <strong>Year:</strong> {movie.Year}
                  </Typography>
                  <Typography
                    sx={{ marginTop: "1rem", fontSize: 17, textAlign: "left" }}
                  >
                    <strong>Cast:</strong> {movie.Actors}
                  </Typography>
                  <Typography
                    sx={{ marginTop: "1rem", fontSize: 17, textAlign: "left" }}
                  >
                    <strong>Plot:</strong> {movie.Plot}
                  </Typography>
                  <Typography
                    sx={{ marginTop: "1rem", fontSize: 17, textAlign: "left" }}
                  >
                    <strong>IMDB Rating:</strong> {movie.imdbRating}
                  </Typography>
                  {/* <Typography
                    sx={{ marginTop: "1rem", fontSize: 17, textAlign: "left" }}
                  > */}
                  <Button
                    component={Link}
                    to={movie.Trailer}
                    sx={{
                      color: "black",
                      fontFamily: "monospace",
                      fontSize: "1rem",
                      mb: 4,
                      mr: 4,
                    }}
                    variant=""
                    endIcon={<PlayCircleFilledWhiteIcon />}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography
                      sx={{
                        marginTop: "1rem",
                        fontSize: 17,
                        textAlign: "left",
                        mb: 1.5,
                        fontFamily: "monospace",
                      }}
                    >
                      <strong>Watch Trailer</strong>
                    </Typography>
                  </Button>

                  {/*  <Link to="reviews">review</Link> */}
                  {/* <Button
                    component={Link}
                    to={`/movies/reviews/${_id}`}
                   
                    sx={{
                      color: "black",
                      fontFamily: "monospace",
                      fontSize: "1rem",
                      mb: 4,
                    }}
                    variant=""
                  >
                    <Typography
                      sx={{
                        marginTop: "1rem",
                        fontSize: 17,
                        textAlign: "left",
                        mb: 1.5,
                        fontFamily: "monospace",
                      }}
                    >
                      <strong>Reviews</strong>
                    </Typography>
                  </Button> */}
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <ViewReview />
      </Container>
    </>
  );
}

export default PosterDetails;
