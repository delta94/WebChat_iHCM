import React from 'react';
import './HeaderScreen.css';

const iconpenedit = require('./Icons/iconpenedit.svg').default;

function HeaderScreen() {
  return (
    <div className="userchatlist-header-container">
      <h5>Trò chuyện</h5>
      <img src={ iconpenedit } className="userchatlist-icon-penedit" alt=""/>
    </div>
  );
}

export default HeaderScreen;
