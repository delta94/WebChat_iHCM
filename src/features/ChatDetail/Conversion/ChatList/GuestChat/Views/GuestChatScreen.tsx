import React from 'react';
import CircleAvatarScreen from '../../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import IconImageScreen from '../../../../../../libraries/Features/IconImage/Views/IconImageScreen';
import './GuestChatScreen.css';

const iconhorizontal3dots = require('../../../../../../libraries/Icons/iconhorizontal3dots.svg').default;

function GuestChatScreen(props : any){
    return (
        <div className="guestchat-container">
            <CircleAvatarScreen
            width="30px"
            height="30px"
            src={ props.user.avatar }
            alt={ props.user.name }
            class="guestchat-left"
            isOnline={ false }
            ></CircleAvatarScreen>
            <div className="guestchat-right">
                <p className="app-mainfont">
                    { props.user.name }
                </p>
                {/* <div className="guestchat-context app-mainfont">
                    <span>
                        { props.context }                   
                    </span>
                    <span className="chat-time app-mainfont">
                        { props.datetime }
                    </span>
                </div>   */}
                { props.children }
            </div>
            <div className="guestchat-icon-horizontal3dots">
                <IconImageScreen src={ iconhorizontal3dots } alt="horizontal 3 dots" class={""}></IconImageScreen>
            </div>
        </div>
    )
}

export default GuestChatScreen;