import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./utils/spotify";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    console.log("I have a token: ", _token);

    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <div className="app">{token ? <h1> I am logged in </h1> : <Login />}</div>
  );
};

export default App;
