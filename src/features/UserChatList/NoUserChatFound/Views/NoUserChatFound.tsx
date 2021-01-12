import React from 'react';
import './NoUserChatFound.css';

const iconnouserchatfound = require('./Icons/iconnouserchatfound.svg').default;

function NoUserChatFound() {
  return (
    <div className="nouserchatfound-container app-mainfont">
      <img src={ iconnouserchatfound } alt="" className="nouserchatfound-icon"/>
      <h4>Không tìm thấy kết quả</h4>
    </div>
  );
}

export default NoUserChatFound;
