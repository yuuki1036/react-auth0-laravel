import React, { VFC } from "react";
import { Box, Typography } from "@mui/material";
import Verified from "@mui/icons-material/Verified";
import ChatBubbleOutlineRounded from "@mui/icons-material/ChatBubbleOutlineRounded";
import RepeatRounded from "@mui/icons-material/RepeatRounded";
import FavoriteBorderRounded from "@mui/icons-material/FavoriteBorderRounded";
import PublishRounded from "@mui/icons-material/PublishRounded";
import { Post } from "../types/Post";
import { Flipped } from "react-flip-toolkit";
import { GuestAvatar, UserAvatar } from "./MyAvatar";
import { format } from "date-fns";

type Props = Post;

const Post: VFC<Props> = (props) => {
  return (
    <Flipped flipId={props.id}>
      {/* post */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          borderBottom: 1,
          borderBottomColor: "secondary.main",
          paddingBottom: 10,
        }}
      >
        {/* avatar */}
        <Box sx={{ p: 20, pr: 10 }}>
          {props.avatar || props.displayName === "anonymous" ? (
            <UserAvatar src={props.avatar} />
          ) : (
            <GuestAvatar name={props.displayName} />
          )}
        </Box>
        {/* post body */}
        <Box sx={{ flex: 1, padding: 10 }}>
          <Box>
            <Typography
              fontSize={17}
              fontWeight={800}
              sx={{ display: "inline", marginBottom: 5 }}
            >
              {props.displayName}&nbsp;
            </Typography>

            <Typography
              fontWeight={500}
              fontSize={14}
              color="gray"
              sx={{ display: "inline" }}
            >
              {/* {!!props.emailVerified && (
                <Verified sx={{ fontSize: 15, color: "primary.main" }} />
              )} */}
              @{props.userName}&nbsp;&nbsp;&nbsp;
              {format(new Date(props.created_at), "MMM d, yyyy")}
            </Typography>
          </Box>
          <Box sx={{ maxWidth: 500, marginBottom: 10 }}>
            <Typography fontSize={15}>{props.content}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 20,
              mr: 20,
            }}
          >
            <ChatBubbleOutlineRounded fontSize="small" />
            <RepeatRounded fontSize="small" />
            <FavoriteBorderRounded fontSize="small" />
            <PublishRounded fontSize="small" />
          </Box>
        </Box>
      </Box>
    </Flipped>
  );
};

export default Post;
