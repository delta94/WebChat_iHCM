import React from 'react';
import './IconPanelScreen.css';
import { IconPanelModel } from '../Models/IconPanelModel';
import IconImageScreen from '../../../../libraries/Features/IconImage/Views/IconImageScreen';

function IconPanelScreen(props : IconPanelModel) {
  return (
    <div className={ props.isActive ? 
      "navbar-iconpanel-container navbar-iconpanel-container--active" : 
      "navbar-iconpanel-container"}
    >
      <IconImageScreen src={ props.srcImg } alt="" class="navbar-iconpanel-icon"></IconImageScreen>
    </div>
  );
}

export default IconPanelScreen;
