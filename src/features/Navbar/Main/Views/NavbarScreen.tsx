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
      <IconPanelScreen isActive={true} srcImg={ iconmessage }></IconPanelScreen>
      <IconPanelScreen isActive={false} srcImg={ iconfriend }></IconPanelScreen>
      <IconPanelScreen isActive={false} srcImg={ iconnoti }></IconPanelScreen>
      <IconPanelScreen isActive={false} srcImg={ iconquestion }></IconPanelScreen>
    </div>
  );
}

export default NavbarScreen;
