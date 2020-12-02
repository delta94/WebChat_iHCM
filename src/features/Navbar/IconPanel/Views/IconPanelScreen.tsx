import React from 'react';
import './IconPanelScreen.css';
import { IconPanelModel } from '../Models/IconPanelModel';

function IconPanelScreen(props : IconPanelModel) {
  return (
    <div className={ props.isActive ? 
      "navbar-iconpanel-container navbar-iconpanel-container-active" : 
      "navbar-iconpanel-container"}
    >
      <img src={ props.srcImg } alt="" className="navbar-iconpanel-icon"/>
    </div>
  );
}

export default IconPanelScreen;
