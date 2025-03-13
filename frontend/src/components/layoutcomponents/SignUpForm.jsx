import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import Heading from "../uicomponents/Heading";
import InputComponent from "./InputComponent";
import SubmitButton from "../uicomponents/SubmitButton";
import GreenBgButton from "../uicomponents/GreenBgButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SignUpForm = () => {
  return (
    <section className="signup_section">
      <Box>
        <Card sx={{ width: { xs: "350px", md: "600px" } }}>
          <CardContent>
            <Heading>👋 Register Now</Heading>
            <Box component="form">
              <InputComponent
                name="username"
                value={""}
                onChange={""}
                placeholder="Enter Your Name"
              />

              <InputComponent
                type="email"
                name="usermail"
                value={""}
                onChange={""}
                placeholder="Enter Your Email"
              />

              {/* <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}> */}
              <InputComponent
                type="password"
                name="userpassword"
                value={""}
                onChange={""}
                placeholder="Enter Password"
              />
              {/* <VisibilityOffIcon
                  sx={{ background: "red", height: "100% !important" }}
                /> */}
              {/* </Box> */}

              <SubmitButton>Register</SubmitButton>
            </Box>
            <Box sx={{ marginTop: "10px" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontFamily: '"Outfit", sans-serif',
                }}
              >
                Already Registered ?{" "}
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    textAlign: "center",
                    fontFamily: '"Outfit", sans-serif',
                    color: "black",
                    textDecoration: "underline",
                  }}
                >
                  Login Here
                </Typography>
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

export default SignUpForm;
