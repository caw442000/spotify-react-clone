import React from 'react'
import './SongRow.css'
import {useStateProviderValue} from '../reducer/StateProvider';
import { useSoundLayerValue } from "../reducer/SoundLayer";


function SongRow({track}) {
    const [{}, dispatch] = useStateProviderValue();
    const [{playing, repeat}, soundDispatch] = useSoundLayerValue();

    const changeTrack = (e, track) => {
      console.log("clicked track", track)
        dispatch({
            type: 'SET_TRACK',
            track: track
        });

        let wasPlaying = playing;
        // soundDispatch({
        //     type: 'SET_PLAYING',
        //     playing: false,
        // });

        let audio = new Audio(track.preview_url);
        console.log("track", track)
        audio.loop = repeat;
        soundDispatch({
            type: 'SET_AUDIO',
            audio: audio
        });

        if(wasPlaying) {
            soundDispatch({
                type: 'SET_PLAYING',
                playing: true,
            });
        }
        // changes the top tab name
        document.title = `${track.name} · ${track.artists.map((artist) => artist.name).join(', ')}`
    };
    return (
        <div className='songRow' onClick={(e) => changeTrack(e, track)}>
            <img className='songRow__album' src={track?.album?.images[0]?.url} alt=''/>
            <div className='songRow__info'>
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(', ')}
                </p>
                <p>
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
