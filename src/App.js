import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useStateProviderValue } from "./reducer/StateProvider";

const spotify = new SpotifyWebApi();

const App = () => {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useStateProviderValue();

  // const [{ user}] this is like saying const [StateProvider]
  // to get to user it is StateProvider.user

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // dispatch({
      //   type: "SET_SPOTIFY",
      //   spotify: spotify,
      // });
      // need to change playlist it is getting to correct id
      spotify.getPlaylist("37i9dQZEVXcEmKE3MxudMe").then((response) =>
        dispatch({
          type: "SET_CURRENT_PLAYLIST",
          discover_weekly: response,
        })
      );
      spotify.getPlaylistTracks("37i9dQZEVXcEmKE3MxudMe").then((response) => {
        dispatch({
            type: 'SET_TRACKS',
            tracks: response
        })
    });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })
    }
  }, []);

  console.log("user", user);
  console.log("I have a token: ", token);

  return <div className="app">{token ? <Player spotify={spotify}/> : <Login />}</div>;
};

export default App;
