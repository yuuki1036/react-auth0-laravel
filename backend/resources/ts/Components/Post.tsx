import { Avatar, Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";

type Props = {
  displayName: string;
  userName: string;
  verified: boolean;
  content: string;
  image: string;
  avatar: string;
};

const Post = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <Box ref={ref}>
      <Box>
        <Avatar />
      </Box>
      <Box>
        <Box>
          <Box>
            <Typography>{props.displayName}</Typography>
          </Box>
          <Box>
            <Typography>{props.content}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

export default Post;
