import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import SearchB from "./SearchB";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FeedbackIcon from "@mui/icons-material/Feedback";

const drawerWidth = 240;

function Navbar(props) {
  ///
  const dataTransfer = (p) => {
    props.finalTransfer(p);
  };
  //new code on 15feb for search
  const saveSearchHandler = (movies) => {
    const searchData = {
      ...movies,
    };
    console.log(searchData);
    props.onAddSearch(searchData);
  };
  ///
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        component="img"
        sx={{
          margin: 3,
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          height: 80,
          width: 200,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="Movify"
        src="/Movifyy.png"
      />
      <Divider sx={{ color: "black", border: 1 }} />
      <List sx={{ color: "black" }}>
        {/* For Home */}
        <ListItem>
          <Button
            sx={{ marginLeft: 5.5 }}
            component={Link}
            to="/"
            variant=""
            endIcon={<HomeIcon />}
          >
            <ListItemText> Home</ListItemText>
          </Button>
        </ListItem>
        {/* For About */}
        <ListItem>
          <Button
            sx={{ marginLeft: 5.5 }}
            component={Link}
            to="/about"
            variant=""
            endIcon={<InfoIcon />}
          >
            <ListItemText> About </ListItemText>
          </Button>
        </ListItem>
        {/* For Feedback */}
        <ListItem>
          <Button
            sx={{ marginLeft: 5 }}
            component={Link}
            to="/feedback"
            variant=""
            endIcon={<FeedbackIcon />}
          >
            <ListItemText> Feedback</ListItemText>
          </Button>
        </ListItem>
      </List>
      <Divider sx={{ color: "black", border: 1 }} />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={5}
        component="nav"
        sx={{
          background: "#152C48",
        }}
      >
        <Toolbar>
          <Box
            component="img"
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              height: 80,
              width: 200,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="Movify"
            src="/Movifyy.png"
          />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button component={Link} to="/" variant="" sx={{ color: "White" }}>
              Home
            </Button>

            <Button
              component={Link}
              to="/about"
              variant=""
              sx={{ color: "White" }}
            >
              About
            </Button>

            <Button
              component={Link}
              to="/feedback"
              variant=""
              sx={{ color: "White" }}
            >
              Feedback
            </Button>
          </Box>
          <Container sx={{ width: "20rem", marginRight: 10 }}>
            <SearchB
              datat={dataTransfer}
              onSaveSearchData={saveSearchHandler}
            ></SearchB>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border: "solid black 2px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
