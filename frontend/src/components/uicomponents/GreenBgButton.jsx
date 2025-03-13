import React from "react";
import { Button } from "@mui/material";

const GreenBgButton = ({ children, width }) => {
  return (
    <Button
      sx={{
        background: "#5e885a",
        fontFamily: '"Outfit", sans-serif',

        color: "white",
        width: { width },
        "&:hover": {
          background: "#4a6d48",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default GreenBgButton;
