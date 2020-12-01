import React from 'react';
import IconPanelScreen from '../../IconPanel/Views/IconPanelScreen';
import './NavbarScreen.css';

function NavbarScreen() {
  return (
    <div className="navbar-container">
      <IconPanelScreen isActive={true} iconClass={"navbar-iconpanel-icon-message"}></IconPanelScreen>
      <IconPanelScreen isActive={false} iconClass={"navbar-iconpanel-icon-friend"}></IconPanelScreen>
      <IconPanelScreen isActive={false} iconClass={"navbar-iconpanel-icon-noti"}></IconPanelScreen>
      <IconPanelScreen isActive={false} iconClass={"navbar-iconpanel-icon-question"}></IconPanelScreen>
    </div>
  );
}

export default NavbarScreen;
