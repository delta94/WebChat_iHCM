import React, { useRef } from 'react';
import './CircleAvatarScreen.css';
import { ICircleAvatar } from '../Models/CircleAvatar';
import { url } from 'inspector';

const iconuseronline = require('./Icons/iconuseronline.svg').default;

function CircleAvatarScreen(props : ICircleAvatar) {
  const eleRef = useRef(null);
  return (
        <>
      <div 
      className={"circleavatar-container " + props.class} 
      style={{ backgroundImage : `url(${props.src})` , width: props.width , height: props.height}}
      onClick={ () =>{ props.onClick(eleRef) } }
      ref={ eleRef }
      >
        { props.isOnline && <img className="circleavatar-online" src={ iconuseronline } /> }
      </div>
      
    </>
  );
}

export default CircleAvatarScreen;
