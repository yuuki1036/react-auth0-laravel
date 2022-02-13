import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Input } from "@mui/material";
import axios from "axios";
import React, { useContext, VFC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SendPost } from "../types/Post";
import { ReloadContext } from "./Feed";
import { UserAvatar } from "./MyAvatar";

type Inputs = {
  content: string;
};

const TweetBox: VFC = () => {
  const { isAuthenticated, user } = useAuth0();
  const { reload, setReload } = useContext(ReloadContext);
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!data.content) return;

    let userId;
    if (isAuthenticated && user?.sub) {
      userId = user.sub.match(/.*\|(.+)/)?.[1];
    }

    const sendPost: SendPost = {
      userId: userId ?? "44hJcni36xHwbcPHtKTa",
      displayName: user?.nickname ?? "anonymous",
      userName: user?.nickname ?? "anonymous",
      emailVerified: user?.email_verified ?? false,
      avatar: user?.picture ?? "",
      type: "tweet",
      content: data.content,
      image: "",
      replay: 0,
      retweet: 0,
      likes: 0,
      replayIds: "",
      retweetIds: "",
      likesIds: "",
    };

    axios
      .post("api/post/create", sendPost)
      .then((res) => {
        // 投稿フォーム入力値削除
        reset();
        // feed更新
        setReload(!reload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // tweet box
    <Box
      sx={{
        paddingBottom: 10,
        borderBottom: 1,
        borderBottomColor: "secondary.main",
        paddingRight: 10,
      }}
    >
      {/* tweet box form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/* tweet box input */}
          <Box sx={{ display: "flex", px: 20, py: 10 }}>
            <UserAvatar src={isAuthenticated ? user?.picture : ""} />
            <Input
              {...register("content", { maxLength: 100 })}
              placeholder="What's happening?"
              disableUnderline={true}
              color="info"
              sx={{
                flex: 1,
                ml: 20,
                fontSize: 20,
              }}
            />
          </Box>
          <Button
            type="submit"
            variant="outlined"
            sx={{
              backgroundColor: "primary.main",
              border: "none",
              color: "white",
              fontWeight: 900,
              fontSize: 17,
              textTransform: "inherit",
              borderRadius: 15,
              width: 90,
              height: 40,
              mt: 0,
              ml: "auto",
              "&:hover": {
                backgroundColor: "#1b9def",
              },
            }}
          >
            Tweet
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default TweetBox;
