import React, { useState } from "react";
import { TextField, Box, IconButton } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const InputComponent = ({
  type = "text",
  placeholder,
  onChange,
  name,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  function handlePasswordToggle() {
    setShowPassword(!showPassword);
  }
  return (
    <TextField
      type={type === "password" ? (showPassword ? "text" : "password") : type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      fullWidth
      margin="normal"
      variant="outlined"
      InputProps={{
        sx: {
          // Custom font and color for the input value
          fontFamily: '"Outfit", sans-serif',
          color: "black",
          "&::placeholder": {
            color: "#9e9e9e", // Custom placeholder color
            fontFamily: '"Outfit", sans-serif', // Custom placeholder font
          },
        },
        endAdornment: (
          <>
            {type === "password" && (
              <IconButton onClick={handlePasswordToggle}>
                {showPassword ? (
                  <VisibilityIcon sx={{ color: "#4a6d48" }} />
                ) : (
                  <VisibilityOffIcon sx={{ color: "#4a6d48" }} />
                )}
              </IconButton>
            )}
          </>
        ),
      }}
      endad
      InputLabelProps={{
        sx: {
          // Custom font and color for the label
          fontFamily: '"Outfit", sans-serif',
          color: "#4a6d48",
          "&.Mui-focused": {
            color: "#4a6d48", // Custom color on focus
          },
        },
      }}
      sx={{
        // Custom hover and focus styles for the overall TextField component
        "& .MuiOutlinedInput-root": {
          fontFamily: '"Outfit", sans-serif',
          "& fieldset": {
            borderColor: "#4a6d48", // Initial border color
          },
          "&:hover fieldset": {
            borderColor: "#4a6d48", // Custom border color on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: "#4a6d48", // Custom border color on focus
          },
        },
      }}
    />
  );
};

export default InputComponent;
