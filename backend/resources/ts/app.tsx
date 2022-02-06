import React from "react";
import ReactDOM from "react-dom";
import Index from "./Pages/Index";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "@mui/system";
import MyTheme from "./theme";
import { CssBaseline } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.MIX_AUTH0_DOMAIN}
      clientId={process.env.MIX_AUTH0_CLIENT_ID}
      redirectUri={process.env.MIX_AUTH0_CALLBACK_URL}
    >
      <ThemeProvider theme={MyTheme}>
        <CssBaseline />
        <Index />
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
