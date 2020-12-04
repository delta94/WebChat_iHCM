import React from 'react';
import './NoChatScreen.css';

const iconnochat = require('./Icons/iconnochat.svg').default;

function NoChatScreen() {
  return (
    <div className="nochat-container">
      <img src={ iconnochat} alt="" className="nochat-icon"/>
      <h5 className="nochat-text">Vui lòng chọn vào một tin nhắn</h5>
    </div>
  );
}

export default NoChatScreen;
