import React from 'react';
import Popup from 'reactjs-popup';
import { IModal } from '../Models/Modal';
import './ModalScreen.css';

const icondelete = require("../../../../libraries/Icons/icondelete.svg").default;

const ModalScreen = (props: IModal) => (
  <Popup
    trigger={props.children}
    modal
    nested
    className="modal"
  >
    {(close:any) => (
      <div className="modal-container">
        <div className="modal-header-container modal-header-bottomborder">
          <h4 className="app-mainfont modal-header-content">
            {
              props.headerContent
            }
          </h4>
          <div className="modal-header-close" onClick={close}>
            <img src={ icondelete } alt=""></img>
          </div>
        </div>
        <div className={ props.hasPadding ? "modal-content-container" : ""}>
          {
            props.contextHasClose && props.contextHasClose(close)
          }
          {
            props.context
          }
        </div>
      </div>
    )}
  </Popup>
);

export default ModalScreen;