import React from "react";
import { Tooltip, Avatar, IconButton } from "@mui/material";

const UserProfile = ({ title, src, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton onClick={onClick}>
        <Avatar alt="user profile" src={src} />
      </IconButton>
    </Tooltip>
  );
};

export default UserProfile;
