import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./components/Player";
import {useStateProviderValue } from './reducer/StateProvider';

const spotify = new SpotifyWebApi();


const App = () => {
  // const [token, setToken] = useState(null);
  const [{ user, token}, dispatch] = useStateProviderValue();

  // const [{ user}] this is like saying const [StateProvider]
  // to get to user it is StateProvider.user


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {

        dispatch({
          type: 'SET_USER',
          user: user,

        })
      })
      
    }


  }, []);


  console.log("user", user);
  console.log("I have a token: ", token);

  return (
    <div className="app">{token ? <Player /> : <Login />}</div>
  );
};

export default App;
