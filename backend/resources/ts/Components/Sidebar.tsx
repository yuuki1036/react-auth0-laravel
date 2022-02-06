import React, { VFC } from "react";
import { Box, Button } from "@mui/material";
import SidebarOption from "./SidebarOption";
import Twitter from "@mui/icons-material/Twitter";
import Home from "@mui/icons-material/Home";
import Search from "@mui/icons-material/Search";
import NotificationsNone from "@mui/icons-material/NotificationsNone";
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";
import ListAlt from "@mui/icons-material/ListAlt";
import PermIdentity from "@mui/icons-material/PermIdentity";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import Auth from "./Auth";

const Sidebar: VFC = () => {
  return (
    <Box
      sx={{
        flex: 1,
        mt: 15,
        pl: 10,
        pr: 20,
        borderRight: 1,
        borderColor: "secondary.main",
      }}
    >
      <Twitter color="primary" sx={{ fontSize: 30, ml: 20, mb: 20 }} />
      <SidebarOption Icon={Home} active={true} text="Home" />
      <SidebarOption Icon={Search} text="Explone" />
      <SidebarOption Icon={NotificationsNone} text="Notifications" />
      <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
      <SidebarOption Icon={ListAlt} text="Lists" />
      <SidebarOption Icon={PermIdentity} text="Profile" />
      <SidebarOption Icon={MoreHoriz} text="More" />

      {/* login btn */}
      <Box sx={{ pt: 10 }}>
        <Auth />
      </Box>
    </Box>
  );
};

export default Sidebar;
