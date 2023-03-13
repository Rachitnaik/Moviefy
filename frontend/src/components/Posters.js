import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { Divider, Skeleton } from "@mui/material";

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
  const baseURL = "http://localhost:5000/movies";
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(14);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        setPosts(response.data);
      } catch (error) {
        // handle error
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
      <Container fullwidth sx={{ width: "90%" }}>
        <Box>
          <Grid
            sx={{ alignItems: "center", padding: 3, paddingLeft: 7 }}
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 2,
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
      </Container>
    </>
  );
}
