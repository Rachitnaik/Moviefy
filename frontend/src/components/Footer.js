import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { blueGrey } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function BottomAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundImage: "url(./p8.png)",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: "left",
            color: "#333",
            fontSize: "1.2rem",
            fontStyle: "inherit",
            color: "white",
          }}
        >
          Movify
        </Typography>
        <Stack spacing={2} direction="row" sx={{ justifyContent: "center" }}>
          <a href="https://www.instagram.com/">
            <Badge sx={{ bgcolor: "#C13584", borderRadius: 1 }}>
              <InstagramIcon sx={{ color: "white" }} />
            </Badge>
          </a>
          <a href="https://www.facebook.com/">
            <Badge sx={{ bgcolor: "#1877F2", borderRadius: 1 }}>
              <FacebookIcon sx={{ color: "white" }} />
            </Badge>
          </a>
          <a href="https://twitter.com/">
            <Badge sx={{ bgcolor: "#1DA1F2", borderRadius: 1 }}>
              <TwitterIcon sx={{ color: "white" }} />
            </Badge>
          </a>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
