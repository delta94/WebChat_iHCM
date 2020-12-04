import React from 'react';
import NoChatScreen from '../../NoChat/Views/NoChatScreen';
import './ChatDetailScreen.css';
import {ChatDetailModel} from '../Models/ChatDetailModel';
import ConversionScreen from '../../Conversion/Main/Views/ConversionScreen';

function ChatDetailScreen(props : ChatDetailModel) {
  return (
    <div className="chatdetail-container">
      { props.hasChat ? 
        <ConversionScreen></ConversionScreen> :
        <NoChatScreen></NoChatScreen>
      }  
    </div>
  );
}

export default ChatDetailScreen;
