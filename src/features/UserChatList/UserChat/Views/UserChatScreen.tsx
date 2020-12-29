import React, { useState } from 'react';
import './UserChatScreen.css';
import { IUserChat } from '../Models/UserChatModel';
import CircleAvatarScreen from '../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import { IConversationState } from '../../../../redux/Reducers/ConversationList.reducer';
import { useHistory } from 'react-router-dom';
import CustomBadgeScreen from '../../../../libraries/Features/CustomBadge/Views/CustomBadgeScreen';

// const iconuseronline = require('./Icons/iconuseronline.svg').default;
const iconunread = require('./Icons/iconunread.svg').default;

function UserChatScreen(props : IConversationState) {
  const history = useHistory();

  const redirectToChatDetail = () =>{
    let kind = "personal";
    if(props.isGroup){
      kind = "group";
    }
    history.push(`/${kind}/${props.id}`);

    props.setIsActive(props.isGroup , props.id);
  }

  return (
    <div className={ props.isActive ? "userchat-container userchat-container-active" : "userchat-container"} onClick={ redirectToChatDetail }>
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
          { props.isGroup && (<CustomBadgeScreen text="Nhóm" class="userchat-groupchat"></CustomBadgeScreen>) }    
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
