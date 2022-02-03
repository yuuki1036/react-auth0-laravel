import React, { forwardRef } from "react";
import Avatar from "react-avatar";
import { Avatar as MuiAvatar, Box, Typography } from "@mui/material";
import Verified from "@mui/icons-material/Verified";
import ChatBubbleOutlineRounded from "@mui/icons-material/ChatBubbleOutlineRounded";
import RepeatRounded from "@mui/icons-material/RepeatRounded";
import FavoriteBorderRounded from "@mui/icons-material/FavoriteBorderRounded";
import PublishRounded from "@mui/icons-material/PublishRounded";

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
    <Box
      ref={ref}
      sx={{
        display: "flex",
        alignItems: "flex-start",
        borderBottom: 1,
        borderBottomColor: "secondary.main",
        paddingBottom: "10px",
      }}
    >
      <Box sx={{ padding: "20px" }}>
        <Avatar name={props.displayName} round={true} size="60px" />
      </Box>
      <Box sx={{ flex: 1, padding: "10px" }}>
        <Box>
          <Box>
            <Typography fontSize={15} sx={{ marginBottom: "5px" }} />
            {props.displayName}{" "}
            <Typography
              fontWeight={600}
              fontSize={12}
              color="gray"
              sx={{ display: "inline" }}
            >
              {props.verified && (
                <Verified sx={{ fontSize: "14px", color: "primary.main" }} />
              )}
              @{props.userName}
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography fontSize={15}>{props.content}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <ChatBubbleOutlineRounded fontSize="small" />
            <RepeatRounded fontSize="small" />
            <FavoriteBorderRounded fontSize="small" />
            <PublishRounded fontSize="small" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

export default Post;
