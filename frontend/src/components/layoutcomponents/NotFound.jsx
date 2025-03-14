import { Typography } from "@mui/material";
import React from "react";

const NotFound = ({ children, color, width }) => {
  return (
    <Typography
      sx={{
        fontFamily: '"Outfit", sans-serif',
        background: "red",
        padding: "20px",
        borderRadius: "20px",
        color: { color },
        fontWeight: "bold",
        width: width,
      }}
    >
      {children}
    </Typography>
  );
};

export default NotFound;
