import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import React, { VFC } from "react";

const btnStyle = {
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
} as const;

const Auth: VFC = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      {!isAuthenticated ? (
        <Button
          onClick={loginWithRedirect}
          variant="outlined"
          fullWidth
          sx={btnStyle}
        >
          Login
        </Button>
      ) : (
        <Button
          onClick={() => logout()}
          variant="outlined"
          fullWidth
          sx={btnStyle}
        >
          Logout
        </Button>
      )}
    </>
  );
};

export default Auth;
