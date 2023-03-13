import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { blueGrey } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function BottomAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "transparent",
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
          }}
        >
          Movify
        </Typography>
        <Stack spacing={2} direction="row" sx={{ color: "#333" }}>
          <Badge color="secondary">
            <InstagramIcon />
          </Badge>
          <Badge color="secondary">
            <FacebookIcon />
          </Badge>
          <Badge color="secondary">
            <TwitterIcon />
          </Badge>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
