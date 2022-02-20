import React, { VFC } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/material";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import { Auth } from "../types/Auth";

const Wrapper: VFC = () => {
  // auth0認証情報
  const { isAuthenticated, user } = useAuth0();

  // ログインユーザーID生成
  let tempId: string | undefined;
  // ID部分のみ抽出
  if (user?.sub) tempId = user?.sub.match(/.*\|(.+)/)?.[1];
  const authId = tempId ?? "44hJcni36xHwbcPHtKTa";
  // ログインユーザー名生成
  const authName: string = user?.nickname ?? "anonymous";

  // アプリ内認証情報
  const auth: Auth = {
    isLogin: isAuthenticated,
    authId: authId,
    authDisplayName: authName,
    authName: authName,
    emailVerified: user?.email_verified ?? false,
    authAvatarUri: user?.picture ?? "",
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        maxWidth: 1300,
        mx: "auto",
        py: 0,
        px: 10,
      }}
    >
      <Sidebar />
      <Feed auth={auth} />
      <Widgets />
    </Box>
  );
};

export default Wrapper;
