import React, { useContext, VFC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Box, Button, Input } from "@mui/material";
import { Auth } from "../types/Auth";
import { SendPost } from "../types/Post";
import { ReloadContext } from "./Feed";
import { UserAvatar } from "./MyAvatar";

type Inputs = {
  content: string;
};

type Props = {
  auth: Auth;
};

const TweetBox: VFC<Props> = ({ auth }) => {
  const { reload, setReload } = useContext(ReloadContext);
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!data.content) return;

    const sendPost: SendPost = {
      userId: auth.authId,
      displayName: auth.authDisplayName,
      userName: auth.authName,
      emailVerified: auth.emailVerified,
      avatar: auth.authAvatarUri,
      type: "tweet",
      public: true,
      content: data.content,
      image: "",
      replay: 0,
      retweet: 0,
      likes: 0,
      replayIds: "",
      retweetIds: "",
      likesIds: "",
      replayTo: "",
    };
    console.log(sendPost);
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
            <UserAvatar src={auth.authAvatarUri} />
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
              width: 140,
              height: 40,
              mt: 0,
              ml: "auto",
              "&:hover": {
                backgroundColor: "#1b9def",
              },
            }}
          >
            HITOKOTO
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default TweetBox;
