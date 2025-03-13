import { Button } from "@mui/material";
import React from "react";

const SubmitButton = ({ children, onClick }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      fullWidth
      sx={{
        fontFamily: '"Outfit", sans-serif',
        color: "white",
        background: "#5e885a",
        marginTop: "10px",
        "&:hover": {
          background: "#4a6d48",
        },
        "&:focus": {
          background: "#4a6d48",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
