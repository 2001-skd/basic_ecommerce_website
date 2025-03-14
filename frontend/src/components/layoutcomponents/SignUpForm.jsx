import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import Heading from "../uicomponents/Heading";
import InputComponent from "./InputComponent";
import SubmitButton from "../uicomponents/SubmitButton";
import GreenBgButton from "../uicomponents/GreenBgButton";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [inputState, setInputState] = useState({
    username: "",
    usermail: "",
    userpassword: "",
  });
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInputState((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  }

  async function handleSubmit(e) {
    console.log("inputState", inputState);
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost/basic_ecommerce_app/backend/register.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputState),
        }
      );

      if (response.status === 200) {
        // console.log("registered successfully");
        alert("registered successfully");
      } else if (response.status === 400) {
        // console.log("User Already Registered");
        alert("User Already Registered");
      } else {
        // console.log("Something Went wrong");
        alert("Something Went wrong");
      }
    } catch (err) {
      console.log("error while form submitting", err);
    }
  }
  return (
    <section className="signup_section">
      <Box>
        <Card sx={{ width: { xs: "350px", md: "600px" } }}>
          <CardContent>
            <Heading>👋 Register Now</Heading>
            <Box component="form" onSubmit={handleSubmit}>
              <InputComponent
                name="username"
                value={inputState.username}
                onChange={handleInputChange}
                placeholder="Enter Your Name"
              />

              <InputComponent
                type="email"
                name="usermail"
                value={inputState.useremail}
                onChange={handleInputChange}
                placeholder="Enter Your Email"
              />

              {/* <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}> */}
              <InputComponent
                type="password"
                name="userpassword"
                value={inputState.password}
                onChange={handleInputChange}
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
                <Link to="/login">
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: '"Outfit", sans-serif',
                      color: "black",
                      textDecoration: "underline",
                    }}
                  >
                    Login Here
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

export default SignUpForm;
