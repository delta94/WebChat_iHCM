import React from 'react';
import './NoChatScreen.css';

const iconnochat = require('./Icons/iconnochat.svg').default;

function NoChatScreen() {
  return (
    <>
      <img src={ iconnochat} alt="" className="chatdetail-icon-nochat"/>
      <h5 className="chatdetail-text-nochat">Vui lòng chọn vào một tin nhắn</h5>
    </>
  );
}

export default NoChatScreen;
