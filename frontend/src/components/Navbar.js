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
import { createTheme } from "@mui/system";
import { Typography } from "@mui/material";

const drawerWidth = 200;

createTheme({
  appBar: {
    background: "linear-gradient(to right, #ff416c, #ff4b2b)",
  },
});
function Navbar(props) {
  const clickHandler = () => {
    props.onClearbar();
  };

  const theme = createTheme();
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
    <>
      <Container
        sx={{
          width: "12.4rem",
          backgroundImage: "url(./p7.png)",
          padding: 4,
        }}
      >
        <SearchB
          sx={{
            mt: 6,
            display: { xs: "flex", md: "none" },
          }}
          datat={dataTransfer}
          onSaveSearchData={saveSearchHandler}
        ></SearchB>
      </Container>

      <Box
        onClick={handleDrawerToggle}
        sx={{
          textAlign: "center",
          backgroundImage: "url(./p7.png)",
          overflow: "hidden",
          height: "100vh",
        }}
      >
        <Divider sx={{ color: "black", border: 1 }} />
        <List>
          {/* For Home */}
          <ListItem>
            <Button
              sx={{ marginLeft: 1 }}
              component={Link}
              to="/"
              variant=""
              endIcon={<HomeIcon />}
              onClick={clickHandler}
            >
              <ListItemText>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "1.3rem",
                    color: "#142D4C",
                  }}
                >
                  Home
                </Typography>
              </ListItemText>
            </Button>
          </ListItem>
          {/* For About */}
          <ListItem>
            <Button
              sx={{ marginLeft: 1 }}
              component={Link}
              to="/about"
              variant=""
              endIcon={<InfoIcon />}
              onClick={clickHandler}
            >
              <ListItemText>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "1.3rem",
                    color: "#142D4C",
                  }}
                >
                  About
                </Typography>
              </ListItemText>
            </Button>
          </ListItem>
          {/* For Feedback */}
          <ListItem>
            <Button
              sx={{ marginLeft: 1 }}
              component={Link}
              to="/feedback"
              variant=""
              endIcon={<FeedbackIcon />}
              onClick={clickHandler}
            >
              <ListItemText>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "1.3rem",
                    color: "#142D4C",
                  }}
                >
                  Feedback
                </Typography>
              </ListItemText>
            </Button>
          </ListItem>
        </List>
        <Divider sx={{ color: "black", border: 1 }} />
        <Typography
          sx={{
            mt: 60,
            fontFamily: "monospace",
            fontSize: "1.3rem",
          }}
        >
          Movify
        </Typography>
        <Divider sx={{ color: "black", border: 1 }} />
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={14}
        component="nav"
        sx={{
          backgroundImage: "url(./p7.png)",
        }}
      >
        <Toolbar>
          <Link to="/">
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
              onClick={clickHandler}
            />
          </Link>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>

          {/* for mobile  */}
          <Link to="/">
            <Box
              component="img"
              sx={{
                margin: 0.5,
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                height: "6rem",
                alignItems: "center",
                marginLeft: 6,
                maxHeight: { xs: 80, md: 167 },
                maxWidth: { xs: 190, md: 250 },
              }}
              alt="Movify"
              src="/Movifyy.png"
            />
          </Link>
          {/*  above  mobile logo */}

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              component={Link}
              to="/"
              variant=""
              sx={{
                fontFamily: "monospace",
                fontSize: "1.1rem",
                color: "#142D4C",
              }}
              onClick={clickHandler}
            >
              Home
            </Button>

            <Button
              component={Link}
              to="/about"
              variant=""
              onClick={clickHandler}
              sx={{
                fontFamily: "monospace",
                fontSize: "1.1rem",
                color: "#142D4C",
              }}
            >
              About
            </Button>

            <Button
              component={Link}
              to="/feedback"
              variant=""
              onClick={clickHandler}
              sx={{
                fontFamily: "monospace",
                fontSize: "1.1rem",
                color: "#142D4C",
              }}
            >
              Feedback
            </Button>
          </Box>
          <Container
            sx={{
              width: "20rem",
              marginRight: 10,
              display: { xs: "none", md: "flex" },
            }}
          >
            {/* Search BAr here */}
            <SearchB
              datat={dataTransfer}
              onSaveSearchData={saveSearchHandler}
            ></SearchB>
            {/*  */}
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
