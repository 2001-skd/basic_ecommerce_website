import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import Heading from "../uicomponents/Heading";
import InputComponent from "./InputComponent";
import SubmitButton from "../uicomponents/SubmitButton";
import GreenBgButton from "../uicomponents/GreenBgButton";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <section className="signup_section">
      <Box>
        <Card sx={{ width: { xs: "350px", md: "600px" } }}>
          <CardContent>
            <Heading>👋 Login Now</Heading>
            <Box component="form">
              <InputComponent
                type="email"
                name="usermail"
                value={""}
                onChange={""}
                placeholder="Enter Your Email"
              />

              <InputComponent
                type="password"
                name="userpassword"
                value={""}
                onChange={""}
                placeholder="Enter Password"
              />

              <InputComponent
                type="password"
                name="confirmuserpassword"
                value={""}
                onChange={""}
                placeholder="Confirm Password"
              />

              <SubmitButton>Login</SubmitButton>
            </Box>
            <Box sx={{ marginTop: "10px" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: '"Outfit", sans-serif',
                }}
              >
                Don't Have an Account ?{" "}
                <Link to="/sign_up">
                  <Typography
                    component="a"
                    sx={{
                      textAlign: "center",
                      fontFamily: '"Outfit", sans-serif',
                      color: "black",
                      textDecoration: "underline",
                    }}
                  >
                    Register Now
                  </Typography>
                </Link>
              </Typography>
            </Box>
            <Box sx={{ marginTop: "10px" }}>
              <Divider>OR</Divider>
            </Box>
            <Box sx={{ marginTop: "10px" }}>
              <GreenBgButton width="100%">Continue With Google</GreenBgButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </section>
  );
};

export default LoginForm;
