import React, { VFC } from "react";
import { Box, Typography } from "@mui/material";
import { Flipped } from "react-flip-toolkit";
import { GuestAvatar, UserAvatar } from "./MyAvatar";
import { format } from "date-fns";
import RepeatRounded from "@mui/icons-material/RepeatRounded";
import Replay from "./Replay";
import ReTweet from "./Retweet";
import Likes from "./Likes";
import { formatted as formattedType } from "../types/Tweet";
import { Post } from "../types/Post";
import { Auth } from "../types/Auth";

type Props = {
  post: Post;
  auth: Auth;
};

const Tweet: VFC<Props> = ({ post, auth }) => {
  const formatted: formattedType = {
    replayIds: post.replayIds ? post.replayIds.split(",") : [""],
    retweetIds: post.retweetIds ? post.retweetIds.split(",") : [""],
    likesIds: post.likesIds ? post.likesIds.split(",") : [""],
    date: format(new Date(post.created_at), "MMM d, yyyy"),
    datetime: "",
  };

  return (
    <Flipped flipId={post.id}>
      {/* wrapper */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          borderBottom: 1,
          borderBottomColor: "secondary.main",
        }}
      >
        {/* avatar */}
        <Box sx={{ p: 20, pr: 10 }}>
          {post.avatar || post.displayName === "anonymous" ? (
            <UserAvatar src={post.avatar} />
          ) : (
            <GuestAvatar name={post.displayName} />
          )}
        </Box>
        {/* post body */}
        <Box sx={{ flex: 1, padding: 10 }}>
          {/* retweet info */}
          {post.type === "retweet" && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <RepeatRounded fontSize="small" sx={{ color: "gray", mr: 2 }} />
              <Typography fontSize={14} fontWeight={800} color="gray">
                {post.retweetBy} rehitokoted
              </Typography>
            </Box>
          )}
          {/* publish info */}
          <Box>
            <Typography
              fontSize={17}
              fontWeight={800}
              sx={{ display: "inline", marginBottom: 5 }}
            >
              {post.displayName}&nbsp;
            </Typography>

            <Typography
              fontWeight={500}
              fontSize={14}
              color="gray"
              sx={{ display: "inline" }}
            >
              @{post.userName}&nbsp;&nbsp;&nbsp;
              {format(new Date(post.created_at), "MMM d, yyyy")}
            </Typography>
          </Box>
          {/* content */}
          <Box sx={{ maxWidth: 500, marginBottom: 10 }}>
            <Typography fontSize={15}>{post.content}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 20,
              mr: 20,
              color: "gray",
            }}
          >
            <Replay
              count={post.replay}
              post={post}
              formatted={formatted}
              auth={auth}
            />
            <ReTweet
              count={post.retweet}
              tweetId={post.id}
              formatted={formatted}
              auth={auth}
            />
            <Likes
              count={post.likes}
              tweetId={post.id}
              formatted={formatted}
              auth={auth}
            />
            <Box sx={{ width: 40 }}></Box>
          </Box>
        </Box>
      </Box>
    </Flipped>
  );
};

export default Tweet;
