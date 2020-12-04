import React from 'react';
import './UserChatScreen.css';
import { IUserChat } from '../Models/UserChatModel';
import CircleAvatarScreen from '../../../../libraries/CircleAvatar/Views/CircleAvatarScreen';

// const iconuseronline = require('./Icons/iconuseronline.svg').default;
const iconunread = require('./Icons/iconunread.svg').default;

function UserChatScreen(props : IUserChat) {
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
          <span className={ props.hasRead ? "userchat-username" : "userchat-username userchat-unreadcontext" }>
            { props.name }
          </span>
          { props.isGroup && (<span className="userchat-groupchat">Nhóm</span>) }    
          <span className="userchat-timeoflastmess">
            { props.timeOfLastMess }
          </span>
        </div>
        {
          props.hasRead ? 
          (
            <div className="userchat-context-bottom"> 
              <h3 className="userchat-contextoflastmess">{ props.contextOfLastMess }</h3> 
            </div>
          ) : 
          (
            <div className="userchat-context-bottom"> 
            <h3 className="userchat-contextoflastmess userchat-unreadcontext">{ props.contextOfLastMess }</h3> 
            <img src={ iconunread } className="userchat-icon-unread" />
          </div>
          )
        }

      </div>
    </div>
  );
}

export default UserChatScreen;
