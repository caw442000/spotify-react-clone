import React from 'react';
import './SidebarOption.css';
import { useStateProviderValue } from "../reducer/StateProvider";


const SidebarOption = ({spotify, title, id, Icon}) => {
  const [{}, dispatch] = useStateProviderValue();

  const changePlaylist = (id, e) => {
      dispatch({
          type: 'SET_CURRENT_PLAYLIST',
          id: id
      });

      spotify.getPlaylistTracks(id).then((response) => {
          dispatch({
              type: 'SET_TRACKS',
              tracks: response
          })
      });
  }

  return (
      <div className='sidebarOption'>
          {Icon && <Icon className='sidebarOption__icon'/>}
          {Icon ? <h4>{title}</h4> : <div onClick={(e) => changePlaylist(id, e)}>{title}</div>}
      </div>
  )
}

export default SidebarOption
