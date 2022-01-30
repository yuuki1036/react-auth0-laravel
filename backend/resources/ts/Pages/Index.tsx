import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Index = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <div className="App">
            <header className="App-header">
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
            </header>
        </div>
    );
};

export default Index;
