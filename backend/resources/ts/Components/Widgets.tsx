import Search from "@mui/icons-material/Search";
import { Box, Input, Typography } from "@mui/material";
import React, { VFC } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Widgets: VFC = () => {
  return (
    <Box sx={{ flex: 1.5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "secondary.main",
          p: 10,
          borderRadius: 20,
          mt: 10,
          ml: 5,
        }}
      >
        <Search sx={{ color: "gray", ml: 10, mr: 7 }} />
        <Input placeholder="search hitokoto" disableUnderline={true} />
      </Box>

      <Box
        sx={{
          mt: 15,
          py: 20,
          px: 10,
        }}
      >
        <Typography fontSize={20} fontWeight={800} mb={5}>
          What's happeing
        </Typography>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Twitter"
          options={{ height: "80vh" }}
          noScrollbar={true}
          noHeader={true}
          noFooter={true}
        />
      </Box>
    </Box>
  );
};

export default Widgets;
