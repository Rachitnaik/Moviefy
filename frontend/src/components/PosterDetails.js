import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";

function PosterDetails() {
  // var Link = require("react-router-dom").Link;

  // const { id = "" } = useParams(); --------- the part which was causing the fault

  const { _id } = useParams();
  const [movie, setMovie] = useState({});

  //const _id = id.toString();--------------------- and this

  console.log("_id: ", _id);
  //const newId = "63dc981ba72a55be27fa47a6";

  useEffect(() => {
    async function fetchData() {
      console.log("_id inside useEffect: ", _id);
      if (_id) {
        const result = await axios.get(`http://localhost:5000/movies/${_id}`);
        console.log(result);
        setMovie(result.data);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Container fullwidth>
        <Card
          elevation={5}
          sx={{
            background: "transparent",
            /*   boxShadow: "2px 2px 2px 2px", */
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
                  <Typography
                    sx={{ marginTop: "1rem", fontSize: 17, textAlign: "left" }}
                  >
                    <strong>Director:</strong> {movie.Director}
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
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default PosterDetails;
