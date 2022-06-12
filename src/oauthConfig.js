const authEndpoint = 'https://accounts.google.com/o/oauth2/auth';

const scopes = [
  'user-read-private',
];

export const getAuthorizeHref = (): string => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token`;
}