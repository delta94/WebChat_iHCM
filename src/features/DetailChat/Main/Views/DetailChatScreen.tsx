import React from 'react';
import NoChatScreen from '../../NoChat/Views/NoChatScreen';
import './DetailChatScreen.css';
import {ChatDetailModel} from '../Models/ChatDetailModel';
import ConversationScreen from '../../Conversation/Main/Views/ConversationScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function DetailChatScreen(props : ChatDetailModel) {
  return (
    <div className="detailchat-container">
      <Router>
        <Switch>
          <Route path="/" exact>
            { props.hasChat ? 
              <ConversationScreen></ConversationScreen> :
              <NoChatScreen></NoChatScreen>
            } 
          </Route>
          <Route path="/conversation/detail/:id">
            <NoChatScreen></NoChatScreen>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default DetailChatScreen;
