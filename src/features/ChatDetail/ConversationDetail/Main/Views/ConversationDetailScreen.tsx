import React from 'react';
import { useParams } from 'react-router-dom';
import BodyConversationDetailScreen from '../../Body/Views/BodyConversationDetailScreen';
import HeaderConversationDetailScreen from '../../Header/Views/HeaderConversationDetailScreen';
import './ConversationDetailScreen.css';


function ConversationDetailScreen(props : any) {
  // let { id } : any = useParams();

  return (
    <div className="conversationdetail-container">
      <HeaderConversationDetailScreen></HeaderConversationDetailScreen>
      <BodyConversationDetailScreen></BodyConversationDetailScreen>
    </div>
  );
}

export default ConversationDetailScreen;
