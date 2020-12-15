import React from 'react';
import NoChatScreen from '../../NoChat/Views/NoChatScreen';
import './ChatDetailScreen.css';
import {ChatDetailModel} from '../Models/ChatDetailModel';
import ConversationScreen from '../../Conversation/Main/Views/ConversationScreen';

function ChatDetailScreen(props : ChatDetailModel) {
  return (
    <div className="chatdetail-container">
      { props.hasChat ? 
        <ConversationScreen></ConversationScreen> :
        <NoChatScreen></NoChatScreen>
      }  
    </div>
  );
}

export default ChatDetailScreen;
