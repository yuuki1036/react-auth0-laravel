import React, { useContext, useState, VFC } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import RepeatRounded from "@mui/icons-material/RepeatRounded";
import RepeatOn from "@mui/icons-material/RepeatOn";
import { ReloadContext } from "./Feed";
import { formatted } from "../types/Tweet";
import { Auth } from "../types/Auth";

type Props = {
  count: number;
  tweetId: number;
  formatted: formatted;
  auth: Auth;
};

const ReTweet: VFC<Props> = ({ count, tweetId, formatted, auth }) => {
  // feed更新フラグ
  const { reload, setReload } = useContext(ReloadContext);
  // リツィートフラグ
  const [isReTweet, setIsReTweet] = useState<boolean>(
    formatted.retweetIds.includes(auth.authId)
  );

  const handleClick = () => {
    if (isReTweet) return;
    setIsReTweet(true);
    axios
      .post("api/post/create/retweet", {
        id: tweetId,
        userId: auth.authId,
        userName: auth.authName,
      })
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
