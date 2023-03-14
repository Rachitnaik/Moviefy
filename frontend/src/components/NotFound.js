import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function NotFound() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          {/* <Typography
            variant="h1"
            sx={{ fontSize: { xs: "96px", md: "100px" } }}
          >
            Error Series 4
          </Typography> */}
          <Typography variant="h5" sx={{ mt: 2 }}>
            Movie Not Found
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default NotFound;
