import * as React from "react";
import { Grid, Typography, Avatar, Stack } from "@mui/material";

const AboutUsPage = () => {
  return (
    <>
      {" "}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1">
            Welcome to MovieFy!
          </Typography>
          <Typography variant="body1" component="p" paragraph>
            We are a team of movie enthusiasts who are passionate about sharing
            our love for films with the world. Our goal is to provide a
            comprehensive database of movies that users can easily search and
            find information about.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <Avatar
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <Avatar
              alt="Cindy Baker"
              src="/static/images/avatar/3.jpg"
              sx={{ width: 100, height: 100 }}
            />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUsPage;
