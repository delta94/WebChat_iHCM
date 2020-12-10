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
      >
        { props.isOnline && <img className="circleavatar-online" src={ iconuseronline } /> }
      </div> 
    </>
  );
}

export default CircleAvatarScreen;
