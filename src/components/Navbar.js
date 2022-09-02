import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
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
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  { label: "FOR HOMECOOKS", link: "/" },
  { label: "FOR FARMERS", link: "/" },
  { label: "LOGIN", link: "https://culineer.net/" },
];

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img
        style={{ width: "auto" }}
        scr={Logo}
        srcSet={Logo}
        alt="Brand Logo"
      />
      <Divider />
      <List>
        {navItems.map(({ label, link }) => (
          <a href={link}>
            <ListItem key={label} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        className="navbar"
        component="nav"
        sx={{ backgroundColor: "transparent", position: "relative" }}
      >
        <Toolbar sx={{ padding: { sm: "0 5rem" } }}>
          <img
            style={{ width: "auto" }}
            scr={Logo}
            srcSet={Logo}
            alt="Brand Logo"
          />
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              ml: "auto",
              color: { xs: "#FFF", sm: "#000" },
              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" }, ml: "auto" }}>
            {navItems.map(({ label, link }) => (
              <a href={link}>
                <Button
                  className="font-p"
                  key={label}
                  sx={{ color: "#FFFFFF", fontWeight: "600", mr: "10px" }}
                >
                  {label}
                </Button>
              </a>
            ))}
            <Button
              className="font-p"
              sx={{
                textTransform: "capitalize",
                letterSpacing: "2px",
                color: "#FFF",
                backgroundColor: "#85C34A",
                borderRadius: "20px",
                p: "0.7rem 1rem",
                "&:hover": {
                  opacity: 0.8,
                  // color: '#000',
                  backgroundColor: "#85C34A",
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
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
};

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default Navbar;
