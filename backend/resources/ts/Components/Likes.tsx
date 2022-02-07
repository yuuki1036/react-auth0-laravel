import { Favorite } from "@mui/icons-material";
import FavoriteBorderRounded from "@mui/icons-material/FavoriteBorderRounded";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useState, VFC } from "react";
import { ReloadContext } from "./Feed";

type Props = {
  count: number;
  tweetId: number;
  userId: string;
  userIds: string[];
};

const Likes: VFC<Props> = ({ count, tweetId, userId, userIds }) => {
  const { reload, setReload } = useContext(ReloadContext);
  const [isLike, setIsLike] = useState<boolean>(false);

  const handleClick = () => {
    if (isLike) {
      setIsLike(!isLike);
      axios
        .post("api/post/update/likes/d", { id: tweetId, userId })
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
        .post("api/post/update/likes/u", { id: tweetId, userId })
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

      <Typography fontSize={15}>{count}</Typography>
    </Box>
  );
};

export default Likes;
