import React from 'react';
import './HeaderScreen.css';

const iconavatar = require('./Icons/iconavatar.svg').default;
const icon9dots = require('./Icons/icon9dots.svg').default;
const iconmain = require('./Icons/iconmain.svg').default;

function HeaderScreen() {
  return (
    <div className="header-container">
      <img src={ icon9dots } className="header-icon-9dots"/>
      <img src={ iconmain } className="header-icon-main" alt="main"/>
      <img src={ iconavatar } className="header-icon-avatar" alt="avatar"/>
    </div>
  );
}

export default HeaderScreen;
