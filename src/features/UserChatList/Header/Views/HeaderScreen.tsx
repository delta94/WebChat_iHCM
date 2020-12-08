import React from 'react';
import './HeaderScreen.css';

const iconpenedit = require('./Icons/iconpenedit.svg').default;

function HeaderScreen() {
  return (
    <div className="userchatlist-header-container">
      <h4 className="app-mainfont">Trò chuyện</h4>
      <img src={ iconpenedit } className="userchatlist-icon-penedit" alt=""/>
    </div>
  );
}

export default HeaderScreen;
