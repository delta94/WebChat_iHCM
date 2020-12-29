import React from 'react';
import NoChatScreen from '../../NoChat/Views/NoChatScreen';
import './ChatDetailScreen.css';
import {ChatDetailModel} from '../Models/ChatDetailModel';
import ConversationScreen from '../../Conversation/Main/Views/ConversationScreen';
import {
  Switch,
  Route
} from "react-router-dom";
import CreateGroupScreen from '../../Group/Create/Main/Views/CreateGroupScreen';
import GroupDetailScreen from '../../Group/Detail/Views/GroupDetailScreen';
import PersonalDetailScreen from '../../Personal/Detail/Views/PersonalDetailScreen';

function ChatDetailScreen(props : ChatDetailModel) {
  return (
    <div className="chatdetail-container">
        <Switch>
          <Route path="/" exact>
            <NoChatScreen></NoChatScreen>
          </Route>
          <Route path="/personal/detail/:id">
            <PersonalDetailScreen></PersonalDetailScreen>
          </Route>
          <Route path="/personal/:id">
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
