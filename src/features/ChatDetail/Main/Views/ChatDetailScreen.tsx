import React from 'react';
import NoChatScreen from '../../NoChat/Views/NoChatScreen';
import './ChatDetailScreen.css';
import {ChatDetailModel} from '../Models/ChatDetailModel';

function ChatDetailScreen(props : ChatDetailModel) {
  return (
    <div className="chatdetail-container">
      { !props.hasChat && <NoChatScreen></NoChatScreen> }
      
    </div>
  );
}

export default ChatDetailScreen;
