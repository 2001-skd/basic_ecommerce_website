import React from "react";
import { Button } from "@mui/material";

const GreenBgButton = ({ children, width, onClick, background }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        background: background,
        fontFamily: '"Outfit", sans-serif',

        color: "white",
        width: { width },
        "&:hover": {
          background: background,
        },
      }}
    >
      {children}
    </Button>
  );
};

export default GreenBgButton;
