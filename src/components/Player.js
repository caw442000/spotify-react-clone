import React from "react";
import Body from "./Body";
import Sidebar from "./Sidebar"
import "./Player.css";
import Footer from "./Footer";


const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        {/* <Sidebar /> */}
        <Sidebar spotify = {spotify} />
        <Body spotify = {spotify}/>
    
      </div>
      <Footer />
      {/* <Footer spotify = {spotify} /> */}
     
    </div>
  );
};

export default Player;
