import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import Heading from "../uicomponents/Heading";
import InputComponent from "./InputComponent";
import SubmitButton from "../uicomponents/SubmitButton";
import GreenBgButton from "../uicomponents/GreenBgButton";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loginInputState, setloginInputState] = useState({
    usermail: "",
    userpassword: "",
  });
  const navigate = useNavigate();

  // console.log("user", user);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setloginInputState((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  }

  async function handleSubmit(e) {
    console.log("loginInputState", loginInputState);
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost/basic_ecommerce_app/backend/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginInputState),
        }
      );

      const responseData = await response.json();
      console.log(responseData);

      if (response.status === 200) {
        // console.log(responseData.message);
        alert(responseData.message);
        navigate("/");
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("userDetails", JSON.stringify(responseData.user));
      } else if (response.status === 400) {
        // console.log(responseData.message);
        alert(responseData.message);
      } else {
        // console.log("Something Went wrong");
        alert("Something Went wrong");
      }
    } catch (err) {
      console.log("error while login form submitting", err);
    }
  }
  return (
    <section className="signup_section">
      <Box>
        <Card sx={{ width: { xs: "350px", md: "600px" } }}>
          <CardContent>
            <Heading>👋 Login Now</Heading>
            <Box component="form" onSubmit={handleSubmit}>
              <InputComponent
                type="email"
                name="usermail"
                value={loginInputState.usermail}
                onChange={handleInputChange}
                placeholder="Enter Your Email"
              />

              <InputComponent
                type="password"
                name="userpassword"
                value={loginInputState.userpassword}
                onChange={handleInputChange}
                placeholder="Enter Password"
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
