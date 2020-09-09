import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from './utils/spotify'

const App = () => {

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const token = hash.access_token;
    console.log("I have a token: ", token)

    
    
  }, []);
  
  return (
    <div className="app">
      <Login />
    </div>
  );
}

export default App;
