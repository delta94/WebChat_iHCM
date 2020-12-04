import React from 'react';
import CircleAvatarScreen from '../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import './HeaderScreen.css';

const icon9dots = require('./Icons/icon9dots.svg').default;
const iconmain = require('./Icons/iconmain.svg').default;
const iconavatar = require('./Icons/iconavatar.svg').default;

function HeaderScreen() {
  return (
    <div className="header-container">
      <img src={ icon9dots } className="header-icon-9dots"/>
      <img src={ iconmain } className="header-icon-main" alt="main"/>
      <CircleAvatarScreen 
      isOnline={false}
      src={"https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"}
      width={'40px'}
      height={'40px'}
      alt={"avatar"}
      class={"header-icon-avatar"}
      ></CircleAvatarScreen>
    </div>
  );
}

export default HeaderScreen;
