import React from 'react';
import { ICustomBadge } from '../Models/CustomBadge';
import "./CustomBadgeScreen.css";

function CustomBadgeScreen(props : ICustomBadge) {
  return (
    <span className={ "custombadge-container app-mainfont " + props.class}>
        {
            props.text
        }
    </span>
  );
}

export default CustomBadgeScreen;
