import React from 'react';
import IconPanelScreen from '../../IconPanel/Views/IconPanelScreen';
import './NavbarScreen.css';

const iconfriend = require('./Icons/iconfriend.svg').default;
const iconmessage = require('./Icons/iconmessage.svg').default;
const iconnoti = require('./Icons/iconnoti.svg').default;
const iconquestion = require('./Icons/iconquestion.svg').default;

function NavbarScreen() {
  return (
    <div className="navbar-container">
      <IconPanelScreen isActive={true} srcImg={ iconmessage } contextToolTip={"Trò chuyện"}></IconPanelScreen>
      <IconPanelScreen isActive={false} srcImg={ iconfriend } contextToolTip={"Bạn bè"}></IconPanelScreen>
      <IconPanelScreen isActive={false} srcImg={ iconnoti } contextToolTip={"Thông báo"}></IconPanelScreen>
      <div className="navbar-iconpanel-last">
        <IconPanelScreen isActive={false} srcImg={ iconquestion } contextToolTip={"Giải đáp"}></IconPanelScreen>
      </div>

    </div>
  );
}

export default NavbarScreen;
