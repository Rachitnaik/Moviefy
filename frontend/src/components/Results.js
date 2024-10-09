import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import Pagination from "@mui/material/Pagination";
import { Typography } from "@mui/material";

export default function Results({ name }) {
  const [n, setN] = useState([]);
  const baseURL = `https://moviefy-wine.vercel.app/search/title?title=${name}`;

  ///////////for pagination///////

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(14);
  const [selectedPostId, setSelectedPostId] = useState(null);

  /*  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setN(response.data);
    });
  }, [name]); */

  useEffect(() => {
    try {
      axios.get(baseURL).then((response) => {
        setN(response.data);
      });
    } catch (error) {
      console.error(error);
      // Handle the error here
    }
  }, [name]);

  //for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = n.slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const handlePosterSelect = (postId) => {
    setSelectedPostId(postId);
  };

  const styles = {
    poster: {
      borderRadius: 5,
      transition: "transform 0.2s",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    selectedPoster: {
      transform: "scale(1.1)",
    },
  };

  return (
    <>
      <Container fullwidth sx={{ width: "100%" }}>
        <Box sx={{ flexGrow: 1, mt: -5 }}>
          <Grid
            sx={{ alignItems: "center", padding: 3, paddingLeft: 5 }}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 4, md: 15 }} // for desktop
          >
            {currentPosts.length > 0 ? (
              currentPosts.map((movie, index) => (
                <Grid key={movie._id} item xs={2} sm={4} md={2}>
                  <Link
                    key={movie._id}
                    to={`/movies/${movie._id}`}
                    underline="none"
                    //for pagination
                    onClick={() => handlePosterSelect(movie._id)}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: "100%",
                        width: "100%",

                        borderRadius: 5,

                        ...(selectedPostId === movie._id
                          ? styles.selectedPoster
                          : styles.poster),
                      }}
                      src={movie.Poster}
                      alt={movie.Title}
                    />
                  </Link>
                </Grid>
              ))
            ) : (
              <NotFound />
            )}
          </Grid>
        </Box>
        <Box
          sx={{
            mt: 3,

            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <Pagination
            count={Math.ceil(n.length / postsPerPage)}
            page={currentPage}
            onChange={handleChange}
            color="primary"
            sx={{ position: "fixed", bottom: "4.5rem" }}
          />
        </Box>
      </Container>
    </>
  );
}
