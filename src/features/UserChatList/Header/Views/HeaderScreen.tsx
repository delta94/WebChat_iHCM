import React from 'react';
import { useHistory } from 'react-router-dom';
import TooltipScreen from '../../../../libraries/Features/Tooltip/Views/TooltipScreen';
import './HeaderScreen.css';

const iconpenedit = require('./Icons/iconpenedit.svg').default;

function HeaderScreen() {
  const history = useHistory();
  console.log(history);
  const redirectToCreateGroup = () =>{
    history.push("/group/create");
  }
  return (
    <div className="userchatlist-header-container">
      <h4 className="app-mainfont">Trò chuyện</h4>
      <TooltipScreen context="Tạo tin nhắn">
        <img src={ iconpenedit } className="userchatlist-icon-penedit" alt="" onClick={ redirectToCreateGroup }/>
      </TooltipScreen>
    </div>
  );
}

export default HeaderScreen;
