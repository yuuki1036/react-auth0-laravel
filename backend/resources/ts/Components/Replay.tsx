import ChatBubbleOutlineRounded from "@mui/icons-material/ChatBubbleOutlineRounded";
import { Box, Typography } from "@mui/material";
import React, { VFC } from "react";

type Props = {
  count: number;
};

const Replay: VFC<Props> = ({ count }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: 40,
        cursor: "pointer",
      }}
    >
      <ChatBubbleOutlineRounded fontSize="small" sx={{}} />
      <Typography fontSize={15}>{count}</Typography>
    </Box>
  );
};

export default Replay;
