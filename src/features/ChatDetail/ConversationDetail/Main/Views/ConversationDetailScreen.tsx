import React from 'react';
import { useParams } from 'react-router-dom';
import BodyConversationDetailScreen from '../../Body/Views/BodyConversationDetailScreen';
import HeaderConversationDetailScreen from '../../Header/Views/HeaderConversationDetailScreen';
import { IConversationDetail } from '../Models/ConversationDetail';
import './ConversationDetailScreen.css';


function ConversationDetailScreen(props : IConversationDetail) {
  return (
    <div className="conversationdetail-container">
      <HeaderConversationDetailScreen { ...props.header } ></HeaderConversationDetailScreen>
      <BodyConversationDetailScreen { ...props.body }></BodyConversationDetailScreen>
    </div>
  );
}

export default ConversationDetailScreen;
