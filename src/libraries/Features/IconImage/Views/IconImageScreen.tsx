import React from 'react';
import { IIconImage } from '../Models/IconImage';
import './IconImageScreen.css';

function IconImageScreen(props : IIconImage) {
  return (
    <img src={ props.src } alt={ props.alt } className={"iconimage-container " + props.class}/>
  );
}

export default IconImageScreen;
