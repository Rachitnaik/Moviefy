import React from "react";
import { Typography, Grid, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h4: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      textAlign: "center",
      marginBottom: "1rem",
      color: "#152D4D",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      marginBottom: "1rem",
      color: "#152D4D",
    },
  },
  spacing: 2,
});

function About() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h4" component="h1">
            Welcome to MovieFy!
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" component="p" paragraph>
            We are a team of movie enthusiasts who are passionate about sharing
            our love for films with the world. Our goal is to provide a
            comprehensive database of movies that users can easily search and
            find information about.
          </Typography>
          <Typography variant="body1" component="p" paragraph>
            We understand that finding a good movie to watch can be a daunting
            task, and that's why we created this website. Our team works
            tirelessly to curate a collection of movies that we think are worth
            watching, and we provide users with all the information they need to
            make an informed decision.
          </Typography>
          <Typography variant="body1" component="p" paragraph>
            Our website features a user-friendly interface that makes it easy
            for users to search for movies by title, director, or genre. Each
            movie page includes information such as the plot summary, cast and
            crew, ratings, and reviews, as well as a trailer and links to where
            the movie can be streamed or purchased.
          </Typography>
          <Typography variant="body1" component="p" paragraph>
            At [Your Website Name], we are committed to providing our users with
            the best possible experience. We strive to keep our database up to
            date and accurate, and we welcome feedback from our users on how we
            can improve.
          </Typography>
          <Typography variant="body1" component="p" paragraph>
            Thank you for visiting our website, and we hope you find the movie
            you're looking for!
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default About;
