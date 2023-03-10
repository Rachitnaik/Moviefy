import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { blueGrey } from "@mui/material/colors";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        mb: 2,
        background: "transparent",
      }}
    >
      <Container maxWidth="sm" sx={{ position: "fixed center", bottom: 0 }}>
        <Typography variant="body1">
          My sticky footer can be found here.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
