// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// allows spotify to handle authentaction
export const authEndpoint = "https://accounts.spotify.com/authorize";
// added to spotify
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
// obtained from spotify
const clientId = process.env.REACT_APP_CLIENT_ID;

// scopes are telling spotify what it is we are going to let the user do in the app
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
