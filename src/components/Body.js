import React from "react";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";

import { useStateProviderValue } from "../reducer/StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useSoundLayerValue } from "../reducer/SoundLayer";


const Body = ({ spotify }) => {
  const [{current_playlist, tracks, track}] = useStateProviderValue();
  const [{playing, volume}, soundDispatch] = useSoundLayerValue();


  const startPlaying = () => {
    soundDispatch({
        type: "SET_PLAYING",
        playing: true
    });
    soundDispatch({
        type: "SET_VOLUME",
        volume: volume / 100
    });
};

const stopPlaying = () => {
    soundDispatch({
        type: "SET_PLAYING",
        playing: false
    });
};

return (
    <div className="body">
        <Header spotify={spotify}/>
        <div className="body__info">
            <img
                src={current_playlist ? current_playlist?.images[0].url : 'https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png'}
                alt=""/>
            <div className="body__infoText">
                <strong>PLAYLIST</strong>
                <h2>{current_playlist?.name}</h2>
                <p>{current_playlist?.description}</p>
            </div>
        </div>

        <div className="body__songs">
            <div className="body__icons">
                {playing ? <PauseCircleFilledIcon onClick={track ? stopPlaying : null}
                                                  className='body__shuffle'/> :
                    <PlayCircleFilledIcon onClick={track ? startPlaying : null} fontSize='large'
                                          className='body__shuffle'/>}
                <FavoriteIcon fontSize='large'/>
                <MoreHorizIcon/>
            </div>
            {tracks?.items.map((track, index) => {
                return <SongRow spotify= {spotify} track={track.track} key={index}/>
            })}
        </div>
    </div>
)
};

export default Body;
