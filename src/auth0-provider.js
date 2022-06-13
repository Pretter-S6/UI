import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
    const domain = "https://accounts.google.com/o/oauth2/auth";
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const redirectUrl = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
    alert(redirectUrl);
    const history = useNavigate();

    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri= {redirectUrl}
            onRedirectCallback={onRedirectCallback}
        >
            {children}

        </Auth0Provider>
    );

};

export default Auth0ProviderWithHistory;
