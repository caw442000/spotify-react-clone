// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// allows spotify to handle authentaction
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "b7699b7ca6ad4f14b201f5ca309a4ffa";

// scopes are telling spotify what it is we are going to let the user do in the app
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
