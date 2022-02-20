import React, { useContext, useState, VFC } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorderRounded from "@mui/icons-material/FavoriteBorderRounded";
import { Auth } from "../types/Auth";
import { formatted } from "../types/Tweet";
import { ReloadContext } from "./Feed";

type Props = {
  count: number;
  tweetId: number;
  formatted: formatted;
  auth: Auth;
};

const Likes: VFC<Props> = ({ count, tweetId, formatted, auth }) => {
  // feed更新フラグ
  const { reload, setReload } = useContext(ReloadContext);
  // いいねフラグ
  const [isLike, setIsLike] = useState<boolean>(
    formatted.likesIds.includes(auth.authId)
  );

  const handleClick = () => {
    if (!isLike) {
      setIsLike(!isLike);
      axios
        .post("api/post/update/likes/u", { id: tweetId, userId: auth.authId })
        .then((res) => {
          // feed更新
          setReload(!reload);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIsLike(!isLike);
      axios
        .post("api/post/update/likes/d", { id: tweetId, userId: auth.authId })
        .then((res) => {
          // feed更新
          setReload(!reload);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
      {isLike ? (
        <Favorite fontSize="small" sx={{ color: "red" }} />
      ) : (
        <FavoriteBorderRounded fontSize="small" />
      )}

      <Typography fontSize={15} color={isLike ? "red" : ""}>
        {count}
      </Typography>
    </Box>
  );
};

export default Likes;
