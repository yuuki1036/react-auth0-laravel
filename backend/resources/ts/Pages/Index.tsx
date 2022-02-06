import { Box } from "@mui/material";
import React from "react";
import Feed from "../Components/Feed";
import Sidebar from "../Components/Sidebar";
import Widgets from "../Components/Widgets";

const Index = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        maxWidth: 1300,
        mx: "auto",
        py: 0,
        px: 10,
      }}
    >
      <Sidebar />
      <Feed />
      <Widgets />
    </Box>
  );
};

export default Index;
