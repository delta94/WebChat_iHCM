import React, { useRef , useEffect } from 'react';
import './CircleAvatarScreen.css';
import { ICircleAvatar } from '../Models/CircleAvatar';

const iconuseronline = require('./Icons/iconuseronline.svg').default;

function CircleAvatarScreen(props : ICircleAvatar) {
  return (
        <>
      <div 
      className={"circleavatar-container " + props.class} 
      style={{ backgroundImage : `url(${props.src})` , width: props.width , height: props.height}}
      onClick={ props.onClick && props.onClick }
      >
        { props.isOnline && <img className="circleavatar-online" src={ iconuseronline } alt="" /> }
      </div> 
    </>
  );
}

export default CircleAvatarScreen;
