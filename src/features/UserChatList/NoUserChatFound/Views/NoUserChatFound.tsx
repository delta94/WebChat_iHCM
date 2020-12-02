import React from 'react';
import './NoUserChatFound.css';

const iconnouserchatfound = require('./Icons/iconnouserchatfound.svg').default;

function NoUserChatFound() {
  return (
    <div className="nouserchatfound-container">
      <img src={ iconnouserchatfound } alt="" className="nouserchatfound-icon"/>
      <h4>Không tìm thấy kết quả tìm kiếm</h4>
    </div>
  );
}

export default NoUserChatFound;
