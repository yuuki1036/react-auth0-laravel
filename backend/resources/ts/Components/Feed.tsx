import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  VFC,
} from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { Post as PostType } from "../types/Post";
import { Flipper } from "react-flip-toolkit";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { useAuth0 } from "@auth0/auth0-react";

export const ReloadContext = createContext(
  {} as {
    reload: boolean;
    setReload: Dispatch<SetStateAction<boolean>>;
  }
);

const Feed: VFC = () => {
  // 認証情報
  const { isAuthenticated, user } = useAuth0();

  // tweetデータ
  const [posts, setPosts] = useState<PostType[]>([]);
  // feed更新フラグ
  const [reload, setReload] = useState<boolean>(true);
  useEffect(() => getPostData(), [reload, isAuthenticated]);
  // useEffect(() => reloadPostData(), [reload]);

  // 最終取得日時
  const [latest, setLatest] = useState<number>(0);

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

  // const reloadPostData = () => {
  //   axios
  //     .post("api/post/reload", { latest })
  //     .then((res) => {
  //       if (res.data.length > 0) {
  //         // 最新tweetの投稿日時文字列取得
  //         const createdAtLatest = res.data[0].created_at;
  //         const formatLatest = format(
  //           parseISO(createdAtLatest),
  //           "yyyy-MM-dd HH:mm:ss"
  //         );
  //         // セット
  //         setLatest(formatLatest);
  //         // 最新のtweetをpostsに追加
  //         setPosts([...res.data, ...posts]);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <Box
      sx={{
        p: 0,
        width: 550,
        overflowY: "scroll",
        "::-webkit-scrollbar": {
          display: "none,",
        },
      }}
    >
      <Box sx={{ borderRight: 1, borderRightColor: "secondary.main" }}>
        {/* feed header */}
        <Box
          sx={{
            position: "sticky",
            top: 0,
            backgroundColor: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(5px)",
            zIndex: 100,
            borderColor: "secondary.main",
            py: 16,
            px: 20,
          }}
        >
          <Typography fontSize={20} fontWeight={800}>
            Welcome! {isAuthenticated ? user?.nickname : "Guest"}
          </Typography>
        </Box>

        <ReloadContext.Provider value={{ reload, setReload }}>
          <TweetBox />

          <Flipper flipKey={posts} spring="wobbly">
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </Flipper>
        </ReloadContext.Provider>
      </Box>
    </Box>
  );
};

export default Feed;
