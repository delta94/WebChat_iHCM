import React from 'react';
import ModalScreen from '../../../../libraries/Features/Modal/Views/ModalScreen';
import ToggleSwitchScreen from '../../../../libraries/Features/ToggleSwitch/Views/ToggleSwitchScreen';
import IconPanelScreen from '../../IconPanel/Views/IconPanelScreen';
import './NavbarScreen.css';

const iconfriend = require('./Icons/iconfriend.svg').default;
const iconmessage = require('./Icons/iconmessage.svg').default;
const iconwhitenoti = require('./Icons/iconwhitenoti.svg').default;
const iconbrownnoti = require('./Icons/iconbrownnoti.svg').default;
const iconquestion = require('../../../../libraries/Icons/iconquestion.svg').default;

function NavbarScreen() {

  const eleContext = (
    <div className="noti-context">
      <div className="brownnoti-container">
        <img src={ iconbrownnoti }  alt=""></img>
      </div>
      <div className="app-mainfont">
        <h4>Thông báo</h4>
        <span>Tất cả các thông báo</span>
      </div>
      <ToggleSwitchScreen></ToggleSwitchScreen>
    </div>
  );
  return (
    <div className="navbar-container">
      <IconPanelScreen isActive={true} srcImg={ iconmessage } contextToolTip={"Trò chuyện"}></IconPanelScreen>
      <IconPanelScreen isActive={false} srcImg={ iconfriend } contextToolTip={"Bạn bè"}></IconPanelScreen>
      <ModalScreen contentheader={ "Cài đặt thông báo" } context={ eleContext }>
        <div>
          <IconPanelScreen isActive={false} srcImg={ iconwhitenoti } contextToolTip={"Thông báo"}></IconPanelScreen>
        </div>
      </ModalScreen> 
      <div className="navbar-iconpanel-last">
        <IconPanelScreen isActive={false} srcImg={ iconquestion } contextToolTip={"Giải đáp"}></IconPanelScreen>
      </div>

    </div>
  );
}

export default NavbarScreen;
