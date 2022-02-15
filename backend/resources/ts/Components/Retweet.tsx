import RepeatRounded from "@mui/icons-material/RepeatRounded";
import RepeatOn from "@mui/icons-material/RepeatOn";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useState, VFC } from "react";
import { ReloadContext } from "./Feed";

type Props = {
  count: number;
  tweetId: number;
  userId: string;
  userIds: string[];
  userName: string;
};

const ReTweet: VFC<Props> = ({ count, tweetId, userId, userIds, userName }) => {
  const { reload, setReload } = useContext(ReloadContext);
  const [isReTweet, setIsReTweet] = useState<boolean>(userIds.includes(userId));
  const handleClick = () => {
    if (isReTweet) return;
    setIsReTweet(true);
    axios
      .post("api/post/create/retweet", { id: tweetId, userId, userName })
      .then((res) => {
        // feed更新
        setReload(!reload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      onClick={() => handleClick()}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: 40,
        cursor: "pointer",
      }}
    >
      {isReTweet ? (
        <RepeatOn fontSize="small" sx={{ color: "lightGreen" }} />
      ) : (
        <RepeatRounded fontSize="small" />
      )}
      <Typography fontSize={15} color={isReTweet ? "lightgreen" : ""}>
        {count}
      </Typography>
    </Box>
  );
};

export default ReTweet;
