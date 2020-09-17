import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from '@material-ui/core';


const Header = ({spotify}) => {
  return (
    <div className='header'>
      <div className="header__left">
      <SearchIcon />
      <input 
        placeholder="Search for Artists, Songs, or Playlists"
        type="text"
      />


      </div>
      <div className="header__right">
        <Avatar src="" alt=""/>
                  <h4>Cedric Winbush</h4>

      </div>
    </div>
  )
}

export default Header
