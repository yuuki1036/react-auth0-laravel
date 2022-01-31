import React from "react";
import ReactDOM from "react-dom";
import Index from "./Pages/Index";
import { Auth0Provider } from "@auth0/auth0-react";
import { REACT_APP_AUTH0_CLIENT_ID, REACT_APP_AUTH0_DOMAIN } from "./config";
import { ThemeProvider } from "@mui/system";
import MyTheme from "./theme";
import { CssBaseline } from "@mui/material";

ReactDOM.render(
    <Auth0Provider
        domain={REACT_APP_AUTH0_DOMAIN}
        clientId={REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
    >
        <React.StrictMode>
            <ThemeProvider theme={MyTheme}>
                <CssBaseline />
                <Index />
            </ThemeProvider>
        </React.StrictMode>
    </Auth0Provider>,
    document.getElementById("app")
);
