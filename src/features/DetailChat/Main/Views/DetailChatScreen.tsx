import React from 'react';
import NoChatScreen from '../../NoChat/Views/NoChatScreen';
import './DetailChatScreen.css';
import {ChatDetailModel} from '../Models/ChatDetailModel';
import ConversationScreen from '../../Conversation/Main/Views/ConversationScreen';
import {
  Switch,
  Route
} from "react-router-dom";
import DetailConversationScreen from '../../DetailConversation/Main/Views/DetailConversationScreen';
import CreateGroupScreen from '../../Group/Create/Main/Views/CreateGroupScreen';

function DetailChatScreen(props : ChatDetailModel) {
  return (
    <div className="detailchat-container">
        <Switch>
          <Route path="/" exact>
            { props.hasChat ? 
              <ConversationScreen></ConversationScreen> :
              <NoChatScreen></NoChatScreen>
            } 
          </Route>
          <Route path="/conversation/detail/:id">
            <DetailConversationScreen></DetailConversationScreen>
          </Route>
          <Route path="/group/create">
            <CreateGroupScreen></CreateGroupScreen>
          </Route>
        </Switch>
    </div>
  );
}

export default DetailChatScreen;
