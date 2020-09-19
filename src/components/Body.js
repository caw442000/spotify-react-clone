import React from "react";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";

import { useStateProviderValue } from "../reducer/StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useStateProviderValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcEmKE3MxudMe`,
      })
      .then(() => {
        spotify.getMyCurrentPlayingTrack().then((res) => {
          dispatch({
            type: "SET_ITEM",
            item: res.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then(() => {
        spotify.getMyCurrentPlayingTrack().then((response) => {
          dispatch({
            type: "SET_ITEM",
            item: response.item,
          });
          console.log("current track", response.item)
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
 console.log("discover weekly", discover_weekly)
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item, index) => (
          <SongRow key = {index} playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
