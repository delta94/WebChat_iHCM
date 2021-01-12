import React from 'react';
import { IDataNotFound } from '../Models/DataNotFound';
import './DataNotFoundScreen.css';

const icondatanotfound = require('./Icons/icondatanotfound.svg').default;

function DataNotFoundScreen(props : IDataNotFound) {
  return (
    <div className={ props.isPosition ? "datanotfound-container app-mainfont datanotfound-container--isposition" : "datanotfound-container app-mainfont"}>
      <img src={ icondatanotfound } alt="" className="datanotfound-icon"/>
      <h4>Không tìm thấy kết quả</h4>
    </div>
  );
}

export default DataNotFoundScreen;
