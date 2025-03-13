import React from "react";
import { Typography } from "@mui/material";

const ParagraphText = ({
  children,
  color,
  fontSize,
  textAlign,
  fontWeight,
}) => {
  return (
    <Typography
      sx={{
        color: { color },
        fontSize: { fontSize },
        fontFamily: "Outfit, sans-serif",
        textAlign: { textAlign },
        fontWeight: { fontWeight },
      }}
    >
      {children}
    </Typography>
  );
};

export default ParagraphText;
