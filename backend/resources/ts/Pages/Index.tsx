import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/material";
import React, { useState } from "react";
import Feed from "../Components/Feed";
import Sidebar from "../Components/Sidebar";

const Index = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        maxWidth: "lg",
        mx: "auto",
        py: 0,
        px: 1,
      }}
    >
      <Sidebar />
      <Feed />
    </Box>
  );
};

export default Index;
