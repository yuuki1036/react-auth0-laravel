import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../Components/Sidebar";

const Index = () => {
    // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <Box
            sx={{
                display: "flex",
                height: "100%",
                maxWidth: "lg",
                mx: "auto",
                py: 0,
                px: 1,
            }}
        >
            {/* <header className="App-header">
                {!isAuthenticated ? (
                    <button onClick={loginWithRedirect}>Log in</button>
                ) : (
                    <button
                        onClick={() =>
                            logout({ returnTo: window.location.origin })
                        }
                    >
                        Log out
                    </button>
                )}
            </header> */}
            <Sidebar />
        </Box>
    );
};

export default Index;
