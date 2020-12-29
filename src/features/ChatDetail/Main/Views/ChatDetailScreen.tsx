import React from 'react';
import NoChatScreen from '../../NoChat/Views/NoChatScreen';
import './ChatDetailScreen.css';
import {ChatDetailModel} from '../Models/ChatDetailModel';
import ConversationScreen from '../../Conversation/Main/Views/ConversationScreen';
import {
  Switch,
  Route
} from "react-router-dom";
import ConversationDetailScreen from '../../ConversationDetail/Main/Views/ConversationDetailScreen';
import CreateGroupScreen from '../../Group/Create/Main/Views/CreateGroupScreen';
import GroupDetailScreen from '../../Group/Detail/Views/GroupDetailScreen';

function ChatDetailScreen(props : ChatDetailModel) {
  return (
    <div className="chatdetail-container">
        <Switch>
          <Route path="/" exact>
            <NoChatScreen></NoChatScreen>
          </Route>
          <Route path="/conversation/detail/:id">
            {/* <ConversationDetailScreen></ConversationDetailScreen> */}
          </Route>
          <Route path="/conversation/:id">
            <ConversationScreen></ConversationScreen>
          </Route>
          <Route path="/group/create">
            <CreateGroupScreen></CreateGroupScreen>
          </Route>
          <Route path="/group/detail/:id">
            <GroupDetailScreen></GroupDetailScreen>
          </Route>
        </Switch>
    </div>
  );
}

export default ChatDetailScreen;
