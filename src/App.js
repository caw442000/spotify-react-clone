import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js"

const spotify = new SpotifyWebApi();


const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    console.log("I have a token: ", _token);

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log("user", user)
      })
      
    }


  }, []);

  return (
    <div className="app">{token ? <h1> I am logged in </h1> : <Login />}</div>
  );
};

export default App;
