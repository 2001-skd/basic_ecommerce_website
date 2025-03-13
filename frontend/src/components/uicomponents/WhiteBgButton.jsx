import React from "react";
import { Button } from "@mui/material";
import { ImSpoonKnife } from "react-icons/im";

const WhiteBgButton = ({ children, width }) => {
  return (
    <Button
      sx={{
        background: "#fff",
        fontFamily: '"Outfit", sans-serif',
        transition: "0.3s all linear",
        color: "#5e885a",
        width: { width },
        "&:hover": {
          background: "#4a6d48",
          color: "#fff",
        },
      }}
      endIcon={<ImSpoonKnife />}
    >
      {children}
    </Button>
  );
};

export default WhiteBgButton;
