import React, { useContext, VFC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Box, Button, Input } from "@mui/material";
import { Auth } from "../types/Auth";
import { Post, SendPost } from "../types/Post";
import { ReloadContext } from "./Feed";
import { UserAvatar } from "./MyAvatar";
import { ReplayModalContext } from "./Replay";

type Inputs = {
  content: string;
};

type Props = {
  post: Post;
  auth: Auth;
};

const ReplayBox: VFC<Props> = ({ post, auth }) => {
  const { reload, setReload } = useContext(ReloadContext);
  const { open, setOpen } = useContext(ReplayModalContext);
  const handleClose = () => setOpen(false);
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!data.content) return;

    const sendPost: SendPost = {
      userId: auth.authId,
      displayName: auth.authDisplayName,
      userName: auth.authName,
      emailVerified: auth.emailVerified,
      avatar: auth.authAvatarUri,
      type: "replay",
      public: true,
      content: `Replaying To @${post.userName}<br/>${data.content}`,
      image: "",
      replay: 0,
      retweet: 0,
      likes: 0,
      replayIds: "",
      retweetIds: "",
      likesIds: "",
      replayTo: post.id,
    };
    console.log(sendPost);
    axios
      .post("api/post/create/replay", sendPost)
      .then((res) => {
        // 投稿フォーム入力値削除
        reset();
        // モーダルを閉じる
        setOpen(false);
        // feed更新
        setReload(!reload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // tweet box
    <>
      {/* tweet box form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", p: 20, pr: 10, pl: 13 }}>
            <UserAvatar src={auth.authAvatarUri} />
            <Input
              {...register("content", { maxLength: 100 })}
              placeholder="Hitokoto your replay"
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
    </>
  );
};

export default ReplayBox;
