import React from 'react';
import './IconPanelScreen.css';
import { IconPanelModel } from '../Models/IconPanelModel';

function IconPanelScreen(props : IconPanelModel) {
  return (
    <div className={ props.isActive ? 
      "navbar-iconpanel-container navbar-iconpanel-container-active" : 
      "navbar-iconpanel-container"}
    >
      <div className={ "navbar-iconpanel-icon " + props.iconClass }></div>
    </div>
  );
}

export default IconPanelScreen;
