import {
  AppBar,
  Container,
  Toolbar,
  Box,
  MenuItem,
  Typography,
  Button,
  Avatar,
  Tooltip,
  IconButton,
  Menu,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GreenBgButton from "../uicomponents/GreenBgButton";
import UserProfile from "../uicomponents/UserProfile";
import { Link } from "react-router-dom";
import ParagraphText from "../uicomponents/ParagraphText";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pages = ["Home", "Menu", "Contact Us", "About Us", "Catering"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const handleOpenMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "white",
        padding: "10px 0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <ParagraphText color="black" fontSize="20px" fontWeight="bold">
            Consistent
          </ParagraphText>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {pages.map((value) => (
              <Typography
                key={value}
                component="a"
                href="#"
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "18px",
                  color: "black",
                  textDecoration: "none",
                  transition: "color 0.3s",
                  "&:hover": {
                    color: "#5e885a",
                  },
                }}
              >
                {value}
              </Typography>
            ))}
          </Box>

          {/* Login Button & Avatar (Desktop) */}
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              gap: "15px",
              alignItems: "center",
            }}
          >
            <Link to="/login">
              <GreenBgButton width="180px">Login</GreenBgButton>
            </Link>

            <UserProfile
              onClick={handleOpenUserMenu}
              title="Santhakumar"
              // src={brandLogo}
            />

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography key={setting} component="a" href="#">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Menu Button */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <UserProfile
              onClick={handleOpenUserMenu}
              title="Santhakumar"
              // src={brandLogo}
            />

            {/* User Menu for Mobile */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>

            <IconButton onClick={handleOpenMenu}>
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  width: "100vw",
                  height: "100vh",
                  top: "0",
                  left: "0",
                  background: "#f0f0f0",
                  padding: "20px",
                },
              }}
            >
              {/* Close Button */}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton onClick={handleCloseMenu}>
                  <CloseIcon sx={{ color: "black" }} />
                </IconButton>
              </Box>

              {/* Mobile Menu Links */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                  mt: 2,
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseMenu}>
                    <Typography
                      sx={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: "20px",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}

                {/* Login Button Inside Mobile Menu */}
                <Link to="/login">
                  <GreenBgButton width="100%">Login</GreenBgButton>
                </Link>
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
