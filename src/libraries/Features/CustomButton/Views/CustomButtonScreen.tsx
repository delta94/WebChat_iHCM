import React from 'react';
import { ICustomButton } from '../Models/CustomButton';
import "./CustomButtonScreen.css";

function CustomButtonScreen(props : ICustomButton) {
  return (
    <button onClick={ props.onClick } className={ "custombutton-container " + props.class}>
      {
        props.text
      }
    </button>
  );
}

export default CustomButtonScreen;
