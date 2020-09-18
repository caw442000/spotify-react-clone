import React from "react";
import "./Body.css";
import Header from "./Header";
import { useStateProviderValue } from "../reducer/StateProvider";


const Body = ({ spotify }) => {

  const [{ discover_weekly }, dispatch] = useStateProviderValue();


  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>description...</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
