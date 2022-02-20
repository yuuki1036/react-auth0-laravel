import React, { VFC } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

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

export default Loading;
