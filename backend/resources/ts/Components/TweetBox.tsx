import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Avatar } from "@mui/material";
import axios from "axios";
import { format, parseISO } from "date-fns";
import React, { useContext, VFC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SendPost } from "../types/Post";
import { ReloadContext } from "./Feed";

type Inputs = {
  content: string;
};

const TweetBox: VFC = () => {
  const { isAuthenticated, user } = useAuth0();
  const { reload, setReload } = useContext(ReloadContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

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
      replayIds: "{}",
      retweetIds: "{}",
      likesIds: "{}",
    };

    axios
      .post("api/post/create", sendPost)
      .then((res) => {
        const now = format(parseISO(res.data), "yyyy-MM-dd HH:mm:ss");
        setReload(now);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Avatar />
          <input {...register("content", { maxLength: 10 })} />
          {errors.content && <span>文字数を減らしてください</span>}
        </Box>
        <Button type="submit">発言</Button>
      </form>
    </Box>
  );
};

export default TweetBox;
