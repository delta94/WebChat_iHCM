import React from 'react';
import './UploadImageScreen.css';

const icondelete = require("../../../../../../libraries/Icons/icondelete.svg").default;

function UploadImageScreen(props: any) {
  return (
    <div 
    className={"uploadimage-container " + props.class} 
    style={{ backgroundImage : `url(${ props.pathFile })` , width: props.width , height: props.height}}
    onClick={ () =>{ props.removePathFile(props.pathFile) }}
    >
        <div className="uploadimage-icon-delete-panel">
            <img src={ icondelete }></img>
        </div>
    </div> 
  );
}

export default UploadImageScreen;
