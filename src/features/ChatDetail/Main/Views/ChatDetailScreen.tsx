import React from 'react';
import './ChatDetailScreen.css';
import {ChatDetailModel} from '../Models/ChatDetailModel';
import {
  Switch,
  Route
} from "react-router-dom";
import CreateGroupScreen from '../../Group/Create/Main/Views/CreateGroupScreen';
import GroupDetailScreen from '../../Group/Detail/Views/GroupDetailScreen';
import PersonalDetailScreen from '../../Personal/Detail/Views/PersonalDetailScreen';
import GroupConversationScreen from '../../Group/Conversation/Views/GroupConversationScreen';
import PersonalConversationScreen from '../../Personal/Conversation/Views/PersonalConversationScreen';
import DataNotFoundScreen from '../../../../libraries/Features/DataNotFound/Views/DataNotFoundScreen';
import { ENUM_KIND_OF_NOTFOUNDICON } from '../../../../libraries/Constants/KindOfNotFoundIcon';

function ChatDetailScreen(props : ChatDetailModel) {
  return (
    <div className="chatdetail-container">
        <Switch>
          <Route path="/" exact>
            <DataNotFoundScreen text={"Vui lòng chọn một tin nhắn"} icon={ ENUM_KIND_OF_NOTFOUNDICON.CHAT } isPosition={ true }></DataNotFoundScreen>
          </Route>
          <Route path="/personal/detail/:id">
            <PersonalDetailScreen></PersonalDetailScreen>
          </Route>
          <Route path="/personal/:id">
            <PersonalConversationScreen></PersonalConversationScreen>
          </Route>
          <Route path="/group/create">
            <CreateGroupScreen></CreateGroupScreen>
          </Route>
          <Route path="/group/detail/:id">
            <GroupDetailScreen></GroupDetailScreen>
          </Route>
          <Route path="/group/:id">
            <GroupConversationScreen></GroupConversationScreen>
          </Route>
        </Switch>
    </div>
  );
}

export default ChatDetailScreen;
