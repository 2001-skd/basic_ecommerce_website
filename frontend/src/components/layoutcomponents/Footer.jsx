import React from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  IconButton,
  Tooltip,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ParagraphText from "../uicomponents/ParagraphText";

const QUICKLINKS = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "Menu", link: "/menu" },
  { title: "Contact Us", link: "/contact" },
  { title: "Login", link: "/login" },
  { title: "Catering", link: "/catering" },
];

const OTHERLINKS = [
  { title: "Menu", link: "/menu" },
  { title: "Create an Account", link: "/login" },
  { title: "Set New Password", link: "/set_new_password" },
  { title: "User Dashboard", link: "/user_dashboard" },
];

const ADDRESS_INFO = [
  {
    type: "Address",
    value: "Consistent address will come",
  },
  {
    type: "Phone",
    value: "1234567890",
  },
  {
    type: "Email",
    value: "info@consistent.com",
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        borderTop: "2px solid #5e885a",
        backgroundColor: "whitesmoke",
      }}
    >
      <Box sx={{ maxWidth: "1280px", mx: "auto", px: 3, py: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: "center", md: "left" }, mb: 3 }}>
              <ParagraphText color="black" fontSize="20px" fontWeight="bold">
                Consistent
              </ParagraphText>
              <Typography
                sx={{
                  fontFamily: '"Outfit", sans-serif',
                  color: "#5e885a",
                  mt: 1,
                }}
              >
                Consistent content will be come here
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={6} lg={4}>
                <Typography
                  sx={{
                    mb: 2,
                    fontFamily: '"Outfit", sans-serif',
                    color: "#5e885a",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Quick Links
                </Typography>
                {QUICKLINKS.map(({ title, link }, index) => (
                  <ListItem
                    key={index}
                    component={Link}
                    to={link}
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      color: "black",
                      textDecoration: "none",
                      m: 0,
                      paddingLeft: "0",
                      "&:hover": {
                        color: "#5e885a",
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                      },
                    }}
                  >
                    {title}
                    {/* <br /> */}
                  </ListItem>
                ))}
              </Grid>

              <Grid item xs={6} lg={4}>
                <Typography
                  sx={{
                    mb: 2,
                    fontFamily: '"Outfit", sans-serif',
                    color: "#5e885a",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Other Links
                </Typography>
                {OTHERLINKS.map(({ title, link }, index) => (
                  <ListItem
                    key={index}
                    component={Link}
                    to={link}
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      color: "black",
                      textDecoration: "none",
                      m: 0,
                      paddingLeft: "0",
                      "&:hover": {
                        color: "#5e885a",
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                      },
                    }}
                  >
                    {title}
                  </ListItem>
                ))}
              </Grid>

              <Grid item xs={6} lg={4}>
                <Typography
                  sx={{
                    mb: 2,
                    fontFamily: '"Outfit", sans-serif',
                    color: "#5e885a",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  Opening Time
                </Typography>
                {ADDRESS_INFO.map(({ type, value }, index) => (
                  <ListItem
                    key={index}
                    component={Link}
                    to={""}
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      color: "black",
                      textDecoration: "none",
                      m: 0,
                      paddingLeft: "0",
                      "&:hover": {
                        color: "#5e885a",
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                      },
                    }}
                  >
                    {" "}
                    {value}
                  </ListItem>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Outfit", sans-serif',
              color: "#212121",
              textAlign: "center",
              mb: { xs: 2, md: 0 },
            }}
          >
            &copy; {currentYear}{" "}
            <a
              href="#"
              style={{ fontFamily: '"Outfit", sans-serif', color: "#5e885a" }}
            >
              Consistent
            </a>
            . All Rights Reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Tooltip title="Facebook">
              <IconButton component="a" href="#" sx={{ color: "#5e885a" }}>
                <Facebook />
              </IconButton>
            </Tooltip>

            <Tooltip title="Instagram">
              <IconButton component="a" href="#" sx={{ color: "#5e885a" }}>
                <Instagram />
              </IconButton>
            </Tooltip>

            <Tooltip title="LinkedIn">
              <IconButton component="a" href="#" sx={{ color: "#5e885a" }}>
                <LinkedIn />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
