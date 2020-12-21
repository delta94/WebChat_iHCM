import React from 'react';
import Popup from 'reactjs-popup';
import './ModalScreen.css';

const icondelete = require("../../../../libraries/Icons/icondelete.svg").default;

const ModalScreen = (props: any) => (
  <Popup
    trigger={props.children}
    modal
    nested
  >
    {(close:any) => (
      <div className="modal-container">
        <div className="modal-header-container modal-header-bottomborder">
          <h4 className="app-mainfont modal-header-content">
            {
              props.contentheader
            }
          </h4>
          <div className="modal-header-close" onClick={close}>
            <img src={ icondelete } ></img>
          </div>
        </div>
        <div className="modal-content-container">
          {
            props.context
          }
        </div>
      </div>
    )}
  </Popup>
);

export default ModalScreen;