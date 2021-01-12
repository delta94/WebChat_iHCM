import React, { useState } from 'react';
import { ENUM_KIND_OF_ICONPANEL } from '../../../../libraries/Constants/KindOfIconPanel';
import ModalScreen from '../../../../libraries/Features/Modal/Views/ModalScreen';
import ToggleSwitchScreen from '../../../../libraries/Features/ToggleSwitch/Views/ToggleSwitchScreen';
import IconPanelScreen from '../../IconPanel/Views/IconPanelScreen';
import './NavbarScreen.css';

const iconfriend = require('./Icons/iconfriend.svg').default;
const iconmessage = require('./Icons/iconmessage.svg').default;
const iconwhitenoti = require('./Icons/iconwhitenoti.svg').default;
const iconbrownnoti = require('../../../../libraries/Icons/iconbrownnoti.svg').default;
const iconquestion = require('../../../../libraries/Icons/iconquestion.svg').default;

function NavbarScreen(props: any) {
  const { activedIcon , setActivedIcon } = props;

  // const eleContext = (
  //   <div className="noti-context">
  //     <div className="brownnoti-container">
  //       <img src={ iconbrownnoti }  alt=""></img>
  //     </div>
  //     <div className="app-mainfont">
  //       <h4>Thông báo</h4>
  //       <span>Tất cả các thông báo</span>
  //     </div>
  //     <ToggleSwitchScreen></ToggleSwitchScreen>
  //   </div>
  // );

  return (
    <div className="navbar-container">
      <IconPanelScreen isActive={ activedIcon === ENUM_KIND_OF_ICONPANEL.MESSAGES } srcImg={ iconmessage } contextToolTip={"Trò chuyện"} onClick={ () =>{setActivedIcon(ENUM_KIND_OF_ICONPANEL.MESSAGES)} }></IconPanelScreen>
      <IconPanelScreen isActive={ activedIcon === ENUM_KIND_OF_ICONPANEL.FRIENDS } srcImg={ iconfriend } contextToolTip={"Bạn bè"} onClick={ () =>{setActivedIcon(ENUM_KIND_OF_ICONPANEL.FRIENDS)} }></IconPanelScreen>
      {/* <ModalScreen headerContent={ "Cài đặt thông báo" } context={ eleContext } hasPadding={ true }>
            <div>
              <IconPanelScreen isActive={false} srcImg={ iconwhitenoti } contextToolTip={"Thông báo"}></IconPanelScreen>
            </div>
          </ModalScreen> */}
      <IconPanelScreen isActive={ activedIcon === ENUM_KIND_OF_ICONPANEL.NOTI } srcImg={ iconwhitenoti } contextToolTip={"Thông báo"} onClick={ () =>{setActivedIcon(ENUM_KIND_OF_ICONPANEL.NOTI)} }></IconPanelScreen> 
      <div className="navbar-iconpanel-last">
        <IconPanelScreen isActive={ activedIcon === ENUM_KIND_OF_ICONPANEL.QUESTIONS } srcImg={ iconquestion } contextToolTip={"Giải đáp"} onClick={ () =>{setActivedIcon(ENUM_KIND_OF_ICONPANEL.QUESTIONS)} }></IconPanelScreen>
      </div>
    </div>
  );
}

export default NavbarScreen;
