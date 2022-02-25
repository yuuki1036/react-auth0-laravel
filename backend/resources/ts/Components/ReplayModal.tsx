import React, { forwardRef, useContext } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { GuestAvatar, UserAvatar } from "./MyAvatar";
import { format } from "date-fns";
import Close from "@mui/icons-material/Close";
import { Post } from "../types/Post";
import { Auth } from "../types/Auth";
import ReplayBox from "./ReplayBox";
import { ReplayModalContext } from "./Replay";

type Props = {
  post: Post;
  auth: Auth;
};

const ReplayModal = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { post, auth } = props;
  const { open, setOpen } = useContext(ReplayModalContext);
  const handleClose = () => setOpen(false);
  return (
    <Box
      ref={ref}
      tabIndex={0}
      sx={{
        width: 600,
        minWidth: 600,
        maxWidth: 600,
        bgcolor: "white",
        outline: "none",
        borderRadius: "25px",
        p: 10,
      }}
    >
      {/* closebtn */}
      <IconButton onClick={handleClose}>
        <Close fontSize="small" />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          mt: 10,
        }}
      >
        {/* avatar */}
        <Box sx={{ p: 20, pr: 10, pl: 13 }}>
          {post.avatar || post.displayName === "anonymous" ? (
            <UserAvatar src={post.avatar} />
          ) : (
            <GuestAvatar name={post.displayName} />
          )}
        </Box>
        {/* post body */}
        <Box sx={{ flex: 1, padding: 10 }}>
          <Box>
            <Typography
              fontSize={17}
              fontWeight={800}
              sx={{ display: "inline", marginBottom: 5 }}
            >
              {post.displayName}&nbsp;
            </Typography>

            <Typography
              fontWeight={500}
              fontSize={14}
              color="gray"
              sx={{ display: "inline" }}
            >
              @{post.userName}&nbsp;&nbsp;&nbsp;
              {format(new Date(post.created_at), "MMM d, yyyy")}
            </Typography>
          </Box>
          <Box sx={{ maxWidth: 500, marginBottom: 10 }}>
            <Typography fontSize={15}>{post.content}</Typography>
            <Typography fontSize={15} sx={{ mt: 15 }}>
              Replaying to @{post.userName}
            </Typography>
          </Box>
        </Box>
      </Box>
      <ReplayBox post={post} auth={auth} />
    </Box>
  );
});

export default ReplayModal;
