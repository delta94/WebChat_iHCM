import React from 'react';
import { ICustomInput } from '../Models/CustomInput';
import './CustomInputScreen.css';

function CustomInputScreen(props : ICustomInput) {
  return (
    <div className={ "custominput-container " + props.class}>
      <input type="text" multiple={true} placeholder={ props.placeHolder } style={ props.style }/>
    </div>
  );
}

export default CustomInputScreen;
