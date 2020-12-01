import React from 'react';
import './UserChatScreen.css';
import { UserChatModel } from '../Models/UserChatModel';

function UserChatScreen(props : UserChatModel) {
  return (
    <div className="userchat-container">
      <div className="userchat-image">
        <img src={ props.avatar } alt=""/>
        {
          props.isOnline && (<div className="userchat-icon-useronline"></div>)
        }     
      </div>
      <div className="userchat-context">
        <div className="userchat-context-top">
          <span className="userchat-username">
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
            <div className="userchat-icon-unread"></div>
          </div>
          )
        }

      </div>
    </div>
  );
}

export default UserChatScreen;
