import React from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";



const pages = ["Home", "Fitness Partner", "Corporate Partner", "Contact US"];
const links = ["/", "/fitnesspartner", "/corporatepartner", "/contactus"];
const NavBar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 
  return (
    <div className="navbar">
      <div className="social">
        <FacebookRoundedIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
      <AppBar position="static" className="appbar">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Bebas Neue, sans-serif",
                fontWeight: 700,
                letterSpacing: "2px",
                color: "#b42426",
                textDecoration: "none"
              }}
            >
              HealthTechSport
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="#b42426"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" }
                }}
              >
                {links &&
                  pages.map((page, index) => (
                    <MenuItem className="menu-item" key={index}>
                      <Link className="nav-links" to={links[index]}>
                        {page}
                      </Link>
                    </MenuItem>
                  ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {links &&
                pages.map((page, index) => (
                  <MenuItem className="menu-item" key={index}>
                    <Link className="nav-links" to={links[index]}>
                      {page}
                    </Link>
                  </MenuItem>
                ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button className="nav-btn" onClick={()=>{
                navigate('/login')
              }}> Partner Login </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
