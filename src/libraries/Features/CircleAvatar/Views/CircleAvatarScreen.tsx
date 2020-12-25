import React, { useRef , useEffect } from 'react';
import './CircleAvatarScreen.css';
import { ICircleAvatar } from '../Models/CircleAvatar';

const iconuseronline = require('./Icons/iconuseronline.svg').default;
const iconcancel = require('../../../Icons/iconcancel.svg').default;

function CircleAvatarScreen(props : ICircleAvatar) {
  return (
        <>
      <div 
      className={"circleavatar-container " + props.class} 
      style={{ backgroundImage : `url(${props.src})` , width: props.width , height: props.height}}
      onClick={ props.onClick && props.onClick }
      >
        { props.isOnline && <img className="circleavatar-online" src={ iconuseronline } alt="" /> }
        { props.canRomove && <div className="circleavatar-remove">
                                <img src={ iconcancel } alt="" />
                              </div>  
        }
      </div> 
    </>
  );
}

export default CircleAvatarScreen;
