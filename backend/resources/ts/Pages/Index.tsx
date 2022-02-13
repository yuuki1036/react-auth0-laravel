import { useAuth0 } from "@auth0/auth0-react";
import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import React, { createContext, Dispatch, SetStateAction, VFC } from "react";
import Feed from "../Components/Feed";
import Sidebar from "../Components/Sidebar";
import Widgets from "../Components/Widgets";

const Loading: VFC = () => {
  return (
    <Box
      sx={{
        zIndex: 1,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="primary" size={40} />
      <Typography color="primary" sx={{ mt: 8 }}>
        Loading...
      </Typography>
    </Box>
  );
};

const Index: VFC = () => {
  const { isLoading } = useAuth0();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default Index;
