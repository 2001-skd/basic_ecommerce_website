import { Typography } from "@mui/material";
import React from "react";

const Heading = ({ children }) => {
  return (
    <Typography
      sx={{
        fontFamily: '"Outfit", sans-serif',
        color: "black",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      {children}
    </Typography>
  );
};

export default Heading;
