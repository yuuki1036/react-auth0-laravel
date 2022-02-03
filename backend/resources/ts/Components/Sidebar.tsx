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

const Sidebar: VFC = () => {
  return (
    <Box
      sx={{
        flex: 0.3,
        mt: 3,
        px: 3,
        borderRight: 1,
        borderColor: "secondary.main",
      }}
    >
      <Twitter
        className="ml-3"
        color="primary"
        sx={{ fontSize: 30, ml: 3, mb: 3 }}
      />
      <SidebarOption Icon={Home} active={true} text="Home" />
      <SidebarOption Icon={Search} text="Explone" />
      <SidebarOption Icon={NotificationsNone} text="Notifications" />
      <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
      <SidebarOption Icon={ListAlt} text="Lists" />
      <SidebarOption Icon={PermIdentity} text="Profile" />
      <SidebarOption Icon={MoreHoriz} text="More" />

      {/* Button -> Tweet */}
      <Button
        variant="outlined"
        fullWidth
        sx={{
          backgroundColor: "primary.main",
          border: "none",
          color: "white",
          fontWeight: 900,
          fontSize: 20,
          textTransform: "inherit",
          borderRadius: 30,
          height: 50,
          mt: 3,
          "&:hover": {
            backgroundColor: "#1b9def",
          },
        }}
      >
        Tweet
      </Button>
    </Box>
  );
};

export default Sidebar;
