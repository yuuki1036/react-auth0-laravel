import React, { VFC } from "react";
import { SvgIconComponent } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

type Props = {
    Icon: SvgIconComponent;
    active?: boolean;
    text: string;
};

const styleActive = {
    display: "flex",
    alignItems: "center",
    color: "primary.main",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#e8f5fe",
        borderRadius: 30,
        color: "primary.main",
    },
} as const;

const styleNoActive = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "#e8f5fe",
        borderRadius: 30,
        color: "primary.main",
    },
} as const;

const SidebarOption: VFC<Props> = ({ Icon, active = false, text }) => {
    return (
        <Box sx={active ? styleActive : styleNoActive}>
            <Box sx={{ p: 3 }}>
                <Icon />
            </Box>
            <Typography fontWeight={800} fontSize={20} sx={{ mr: 3, mt: 0.5 }}>
                {text}
            </Typography>
        </Box>
    );
};

export default SidebarOption;
