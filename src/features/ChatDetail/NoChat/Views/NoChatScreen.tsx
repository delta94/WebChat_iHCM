import React from 'react';
import './NoChatScreen.css';

const iconnochat = require('./Icons/iconnochat.svg').default;

function NoChatScreen() {
  return (
    <div className="nochat-container">
      <img src={ iconnochat} alt="" className="nochat-icon"/>
      <p className="nochat-text app-mainfont">Vui lòng chọn vào một tin nhắn</p>
    </div>
  );
}

export default NoChatScreen;
