import React, { useEffect, useState, VFC } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { Post as PostType } from "../types/Post";
import { Flipped } from "react-flip-toolkit";
import Post from "./Post";

const Feed: VFC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => getPostData(), []);

  const getPostData = () => {
    axios
      .get("api/get_posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        flex: 0.4,
        borderRight: 1,
        borderRightColor: "secondary.main",
        minWidth: "fit-content",
        overflowY: "scroll",
        "*::-webkit-scrollbar": {
          display: "none,",
        },
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          zIndex: 100,
          border: 1,
          borderColor: "secondary.main",
          py: 2,
          px: 3,
        }}
      >
        <Typography>Home</Typography>
      </Box>

      {posts.map((post) => (
        <Flipped key={post.id} flipId={post.id}>
          <Post
            displayName={post.userName}
            userName={post.userName}
            verified={true}
            content={post.content}
            avatar=""
            image=""
          />
        </Flipped>
      ))}
    </Box>
  );
};

export default Feed;
