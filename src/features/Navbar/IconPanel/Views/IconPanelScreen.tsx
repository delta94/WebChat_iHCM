import React from 'react';
import './IconPanelScreen.css';
import { IconPanelModel } from '../Models/IconPanelModel';
import IconImageScreen from '../../../../libraries/Features/IconImage/Views/IconImageScreen';
import TooltipScreen from '../../../../libraries/Features/Tooltip/Views/TooltipScreen';

function IconPanelScreen(props : IconPanelModel) {
  return (
    <TooltipScreen context={ props.contextToolTip }>
      <div className={ props.isActive ? 
        "navbar-iconpanel-container navbar-iconpanel-container--active" : 
        "navbar-iconpanel-container"}
        onClick={ props.onClick }
      >
        <IconImageScreen src={ props.srcImg } alt="" class="navbar-iconpanel-icon"></IconImageScreen>
        {/* <div className="navbar-iconpanel--hasnoti"></div> */}

      </div>
    </TooltipScreen>

  );
}

export default IconPanelScreen;
