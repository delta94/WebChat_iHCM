import React from 'react';
import { useParams } from 'react-router-dom';
import BodyDetailConversationScreen from '../../Body/Views/BodyDetailConversationScreen';
import HeaderDetailConversationScreen from '../../Header/Views/HeaderDetailConversationScreen';
import './DetailConversationScreen.css';


function DetailConversationScreen(props : any) {
  let { id } : any = useParams();

  return (
    <div className="detailconversation-container">
      <HeaderDetailConversationScreen></HeaderDetailConversationScreen>
      <BodyDetailConversationScreen></BodyDetailConversationScreen>
    </div>
  );
}

export default DetailConversationScreen;
