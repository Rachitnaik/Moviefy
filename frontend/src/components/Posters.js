import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

import { useSelector } from "react-redux";

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

export default function Posters() {
  /* const baseURL = "http://localhost:5000/movies"; */

  const [posts, setPosts] = useState([]);
  const movData = useSelector((state) => state.movieReducer.movies);
  console.log(movData);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(14);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    try {
      setPosts(movData);
    } catch (error) {
      console.error("Error setting posts:", error);
      // handle the error or display an error message to the user
    }
  }, [movData]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const handlePosterSelect = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <>
      <Container fullwidth sx={{ width: "100%" }}>
        <Box sx={{ mt: -5 }}>
          {/* to make it mobile responsive */}
          <Grid
            sx={{ alignItems: "center", padding: 3, paddingLeft: 5 }}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 4, md: 15 }} // for desktop
          >
            {currentPosts.map((movie, index) => (
              <Grid key={movie._id} item xs={2} sm={2} md={2}>
                {" "}
                {/*  for smaller screens */}
                <Link
                  key={movie._id}
                  to={`/movies/${movie._id}`}
                  underline="none"
                  onClick={() => handlePosterSelect(movie._id)}
                >
                  <Box
                    component="img"
                    sx={{
                      height: "100%",
                      width: "100%",

                      ...(selectedPostId === movie._id
                        ? styles.selectedPoster
                        : styles.poster),
                    }}
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            mt: 3,

            flexGrow: 1,

            flexDirection: "column",
            alignItems: "center",
            marginTop: 2,
            display: { xs: "none", md: "flex" },
          }}
        >
          <Pagination
            count={Math.ceil(posts.length / postsPerPage)}
            page={currentPage}
            onChange={handleChange}
            color="primary"
            sx={{ position: "fixed", bottom: "4.5rem" }}
          />
        </Box>

        {/* for mobile */}

        <Box
          sx={{
            mt: 3,

            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 10,
            display: { xs: "flex", md: "none" },
          }}
        >
          <Pagination
            count={Math.ceil(posts.length / postsPerPage)}
            page={currentPage}
            onChange={handleChange}
            color="primary"
            sx={{
              position: "fixed",
              bottom: "4rem",
              backgroundColor: "#77CAEB",
              borderRadius: "20px",
            }}
          />
        </Box>
      </Container>
    </>
  );
}
