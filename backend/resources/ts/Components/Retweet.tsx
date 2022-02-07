import RepeatRounded from "@mui/icons-material/RepeatRounded";
import { Box, Typography } from "@mui/material";
import React, { VFC } from "react";

type Props = {
  count: number;
};

const ReTweet: VFC<Props> = ({ count }) => {
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
      <RepeatRounded fontSize="small" sx={{}} />
      <Typography fontSize={15}>{count}</Typography>
    </Box>
  );
};

export default ReTweet;
