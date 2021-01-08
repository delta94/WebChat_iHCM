import React from 'react';
import './CircleAvatarScreen.css';
import { ICircleAvatar } from '../Models/CircleAvatar';

const iconuseronline = require('./Icons/iconuseronline.svg').default;
const iconcancel = require('../../../Icons/iconcancel.svg').default;

function CircleAvatarScreen(props : ICircleAvatar) {
  const styleInline = { 
    backgroundImage : `url(${props.src})` , 
    width: props.width , 
    height: props.height,
    cursor: props.hasCursor ? "pointer" : "initial"
  }

  return (
        <>
      <div 
      className={"circleavatar-container " + props.class} 
      style={ styleInline }
      onClick={ props.onClick && props.onClick }
      >
        { props.isOnline && <img className="circleavatar-online" src={ iconuseronline } alt="" /> }
        { props.canRomove && <div className="circleavatar-remove" onClick={ props.onRemove }>
                                <img src={ iconcancel } alt="" />
                              </div>  
        }
      </div> 
    </>
  );
}

export default CircleAvatarScreen;


