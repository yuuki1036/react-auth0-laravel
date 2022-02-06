import { Box } from "@mui/material";
import React from "react";
import Feed from "../Components/Feed";
import Sidebar from "../Components/Sidebar";
import Widgets from "../Components/Widgets";

const Index = () => {
  console.log(process.env.MIX_AUTH0_DOMAIN);
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        maxWidth: 1300,
        mx: "auto",
        pddingY: 0,
        paddingX: 10,
      }}
    >
      <Sidebar />
      <Feed />
      <Widgets />
    </Box>
  );
};

export default Index;
