import React, { useState } from "react";
import "./SongRow.css";
import { useStateProviderValue } from "../reducer/StateProvider";
import { useSoundLayerValue } from "../reducer/SoundLayer";

function SongRow({ track, spotify }) {
  const [{}, dispatch] = useStateProviderValue();
  const [{ playing, repeat }, soundDispatch] = useSoundLayerValue();
  // const [body, setBody] =useState({
  //   uri: ""
  // })
  // const audio = new Audio();
  // let uris = "";

  const changeTrack = (e, track) => {
    console.log("clicked track", track);
    dispatch({
      type: "SET_TRACK",
      track: track,
    });

    if (playing == true) {
      soundDispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    }
    // console.log("track uri to pass", track.uri)
    // setBody({
    //   uri: track.uri
    // })
    // console.log("uris", uris)
    spotify.getMyDevices()
    .then(response => {
      console.log("my device", response)
    })
    // spotify.play(uris=[track.uri])
    // .then(response => {
    //  audio = new Audio(response);
    //   console.log("response of getTrack", response)
    // })
    // .catch (err => {
    //   console.log("error in play response", err)
    // })
    // console.log("spotify track", spotify.getTrack(track.id))
    // console.log("track", track)
    // console.log("track", track.id)
    // removing this takes it from playing preview and playing in browser

    // this sets it up so you can listen to open desktop and it will play there with this command not what i want
    // spotify.play({uris: [`spotify:track:${track.id}`],})
    // .then((res) => {
    //   console.log("response from spotify.play", res)

    // })
    // .catch((err) => {
    //   console.log("this is the err from play", err)
    // })

    let audio = new Audio(track.preview_url);
    audio.loop = repeat;

    
    soundDispatch({
      type: "SET_AUDIO",
      audio: audio,
    });

    // if (wasPlaying) {

    
      soundDispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    // }
    // changes the top tab name
    document.title = `${track.name} · ${track.artists
      .map((artist) => artist.name)
      .join(", ")}`;
  };
  return (
    <div className="songRow" onClick={(e) => changeTrack(e, track)}>
      <img
        className="songRow__album"
        src={track?.album?.images[0]?.url}
        alt=""
      />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
        <p>{track.album.name}</p>
      </div>
    </div>
  );
}

export default SongRow;
