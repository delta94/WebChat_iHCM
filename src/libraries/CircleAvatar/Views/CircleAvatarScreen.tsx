import React from 'react';
import './CircleAvatarScreen.css';
import { ICircleAvatar } from '../Models/CircleAvatar';
import { url } from 'inspector';

const iconuseronline = require('./Icons/iconuseronline.svg').default;

function CircleAvatarScreen(props : ICircleAvatar) {
  // return (
  //   <>
  //     <img className={"circleavatar " + props.class} src={ props.src } alt={ props.alt} style={{ width: props.width , height: props.height}} />
  //     { props.isOnline && <img className="" src={ iconuseronline } /> }
  //   </>
  // );
  return (
        <>
      <div className={"circleavatar-container " + props.class} style={{ backgroundImage : `url(${props.src})` , width: props.width , height: props.height}}>
      { props.isOnline && <img className="circleavatar-online" src={ iconuseronline } /> }
      </div>
      
    </>
  );
}

export default CircleAvatarScreen;
