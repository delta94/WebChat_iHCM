import React from 'react';
import './UserChatScreen.css';
import { IUserChat } from '../Models/UserChatModel';
import CircleAvatarScreen from '../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import { IConversationState } from '../../../../redux/Reducers/ConversationList.reducer';

// const iconuseronline = require('./Icons/iconuseronline.svg').default;
const iconunread = require('./Icons/iconunread.svg').default;

function UserChatScreen(props : IConversationState) {
  return (
    <div className={ props.isActive ? "userchat-container userchat-container-active" : "userchat-container"}>
      <div className="userchat-image">
        <CircleAvatarScreen 
          class=""
          width="48px"
          height="48px"
          src={ props.avatar }
          alt="avatar"
          isOnline={ props.isOnline }
        ></CircleAvatarScreen>
      </div>
      <div className="userchat-context">
        <div className="userchat-context-top">
          <span className={ props.hasReadLastMess ? "userchat-username app-mainfont" : "userchat-username app-mainfont userchat-unreadcontext" }>
            { props.name }
          </span>
          { props.isGroup && (<span className="userchat-groupchat app-mainfont">Nhóm</span>) }    
          <span className="userchat-timeoflastmess app-mainfont">
            { props.timeToReadLastMess }
          </span>
        </div>
        {
          props.hasReadLastMess ? 
          (
            <div className="userchat-context-bottom"> 
              <h3 className="userchat-contextoflastmess">{ props.lastMess }</h3> 
            </div>
          ) : 
          (
            <div className="userchat-context-bottom"> 
            <h3 className="userchat-contextoflastmess userchat-unreadcontext">{ props.lastMess }</h3> 
            <img src={ iconunread } className="userchat-icon-unread" alt="" />
          </div>
          )
        }

      </div>
    </div>
  );
}

export default UserChatScreen;
