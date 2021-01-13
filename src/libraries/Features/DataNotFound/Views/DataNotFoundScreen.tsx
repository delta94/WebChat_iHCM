import React from 'react';
import { ENUM_KIND_OF_NOTFOUNDICON } from '../../../Constants/KindOfNotFoundIcon';
import { IDataNotFound } from '../Models/DataNotFound';
import './DataNotFoundScreen.css';

const iconnotfounddata = require('../../../Icons/iconnotfounddata.svg').default;
const iconnotfoundchat = require('../../../Icons/iconnotfoundchat.svg').default;
const iconnotfoundnoti = require('../../../Icons/iconnotfoundnoti.svg').default;
const iconnotfoundmessage = require('../../../Icons/iconnotfoundmessage.svg').default;

function DataNotFoundScreen(props : IDataNotFound) {

  const icon = () =>{
    switch (props.icon) {
      case ENUM_KIND_OF_NOTFOUNDICON.CHAT:
        return iconnotfoundchat;
      case ENUM_KIND_OF_NOTFOUNDICON.DATA:
        return iconnotfounddata;
      case ENUM_KIND_OF_NOTFOUNDICON.NOTI:
        return iconnotfoundnoti;
      case ENUM_KIND_OF_NOTFOUNDICON.MESSAGE:
        return iconnotfoundmessage;
        
    }
  }

  return (
    <div className={ props.isPosition ? "datanotfound-container app-mainfont datanotfound-container--isposition" : "datanotfound-container app-mainfont"}>
      <img src={ icon() } alt="" className="datanotfound-icon"/>
      <h4>
        { props.text }
      </h4>
    </div>
  );
}

export default DataNotFoundScreen;
