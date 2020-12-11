import React from 'react';
import TooltipScreen from '../../../../libraries/Features/Tooltip/Views/TooltipScreen';
import './HeaderScreen.css';

const iconpenedit = require('./Icons/iconpenedit.svg').default;

function HeaderScreen() {
  return (
    <div className="userchatlist-header-container">
      <h4 className="app-mainfont">Trò chuyện</h4>
      <TooltipScreen context="Tạo tin nhắn">
        <img src={ iconpenedit } className="userchatlist-icon-penedit" alt=""/>
      </TooltipScreen>
    </div>
  );
}

export default HeaderScreen;
