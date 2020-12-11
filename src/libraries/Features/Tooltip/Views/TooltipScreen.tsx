import React from 'react';
import Popup from 'reactjs-popup';
import './TooltipScreen.css';
const POSITION_TYPES = [
  'top left',
  'top center',
  'top right',
  'right top',
  'right center',
  'right bottom',
  'bottom left',
  'bottom center',
  'bottom right',
  'left top',
  'left center',
  'left bottom',
  'center center',
];

const TooltipScreen = (props: any) =>{
    const position = 'right center';
    return (
        <div className="example-warper">
            <Popup
              trigger={
                props.children
              }
              position={['right center', 'right top', 'bottom left']}
              on={['hover', 'focus']}
              arrow={true}
            >
                <div className="tooltip-container">
                  {
                    props.context
                  }
                </div>
            </Popup>
        </div>
      );
}

export default TooltipScreen;