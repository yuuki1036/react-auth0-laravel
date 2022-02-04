import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
  VFC,
} from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { Post as PostType } from "../types/Post";
import { Flipped, Flipper } from "react-flip-toolkit";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { useAuth0 } from "@auth0/auth0-react";
import { format } from "date-fns";
import shuffle from "lodash.shuffle";
import Verified from "@mui/icons-material/Verified";
import Avatar from "react-avatar";

export const ReloadContext = createContext(
  {} as {
    reload: string;
    setReload: Dispatch<SetStateAction<string>>;
  }
);

const Feed: VFC = () => {
  const { isAuthenticated, user } = useAuth0();
  const [reload, setReload] = useState<string>(
    format(new Date(), "yyyy-MM-dd HH:mm:ss")
  );
  const [posts, setPosts] = useState<PostType[]>([]);
  const [flip, setFlip] = useState<boolean>(true);
  useEffect(() => getPostData(), []);
  useEffect(() => reloadPostData(), [reload]);

  const getPostData = () => {
    axios
      .get("api/post/get")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const reloadPostData = () => {
    console.log("reload", reload);
    axios
      .post("api/post/reload", { reload: reload })
      .then((res) => {
        if (res.data.length > 0) setPosts([...res.data, ...posts]);
        setFlip(!flip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const shuffleList = () => setPosts(shuffle(posts));

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
        <Typography fontSize={20} fontWeight={800}>
          Welcome! {isAuthenticated ? user?.nickname : "Guest"}
        </Typography>
      </Box>

      <ReloadContext.Provider value={{ reload, setReload }}>
        <TweetBox />
      </ReloadContext.Provider>
      <button onClick={shuffleList}> shuffle</button>
      <Flipper flipKey={posts}>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </Flipper>
    </Box>
  );
};

export default Feed;
