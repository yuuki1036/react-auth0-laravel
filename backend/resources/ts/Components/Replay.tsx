import React, { useState, VFC } from "react";
import { styled } from "@mui/system";
import { Box, ModalUnstyled, Typography } from "@mui/material";
import ChatBubbleOutlineRounded from "@mui/icons-material/ChatBubbleOutlineRounded";
import ReplayModal from "./ReplayModal";
import { Post } from "../types/Post";
import { Auth } from "../types/Auth";
import { formatted } from "../types/Tweet";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-tap-highlight-color: transparent;
`;

type Props = {
  count: number;
  post: Post;
  formatted: formatted;
  auth: Auth;
};

const Replay: VFC<Props> = ({ count, post, formatted, auth }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: 40,
          cursor: "pointer",
        }}
      >
        <ChatBubbleOutlineRounded fontSize="small" sx={{}} />
        <Typography fontSize={15}>{count}</Typography>
      </Box>
      <StyledModal
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <ReplayModal post={post} auth={auth} />
      </StyledModal>
    </>
  );
};

export default Replay;
