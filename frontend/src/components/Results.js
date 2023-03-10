import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Results({ name }) {
  const [n, setN] = useState([]);
  const baseURL = `http://localhost:5000/search/title?title=${name}`;

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setN(response.data);
    });
  }, [name]);
  return (
    <>
      <Container fullwidth>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 4, md: 12 }}
          >
            {n.map((movie, index) => (
              <Grid key={movie._id} item xs={2} sm={4} md={2}>
                <Link
                  key={movie._id}
                  to={`/movies/${movie._id}`}
                  underline="none"
                >
                  <Box
                    component="img"
                    sx={{
                      height: "100%",
                      width: "100%",

                      borderRadius: 5,
                    }}
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
}
