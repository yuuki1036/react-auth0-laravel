import { Avatar as MuiAvatar } from "@mui/material";
import Avatar from "react-avatar";
import React, { VFC } from "react";

type UserAvatarProps = {
  src?: string;
};

export const UserAvatar: VFC<UserAvatarProps> = ({ src }) => {
  return <MuiAvatar src={src} sx={{ width: 56, height: 56 }} />;
};

type GuestAvatarProps = {
  name: string;
};

export const GuestAvatar: VFC<GuestAvatarProps> = ({ name }) => {
  return <Avatar name={name} round={true} size="56px" />;
};
