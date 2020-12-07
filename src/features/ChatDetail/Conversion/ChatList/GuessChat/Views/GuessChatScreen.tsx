import React from 'react';
import CircleAvatarScreen from '../../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import IconImageScreen from '../../../../../../libraries/Features/IconImage/Views/IconImageScreen';
import './GuessChatScreen.css';

const iconhorizontal3dots = require('../../../../../../libraries/Icons/iconhorizontal3dots.svg').default;

function GuessChatScreen(props : any){
    return (
        <div className="chatguess-container">
            <CircleAvatarScreen
            width="30px"
            height="30px"
            src={ props.user.avatar }
            alt={ props.user.name }
            class="chatguess-left"
            isOnline={ false }
            ></CircleAvatarScreen>
            <div className="chatguess-right">
                <p>
                    { props.user.name }
                </p>
                <div className="chatguess-context">
                    <span>
                        { props.context }                   
                    </span>
                    <span className="chat-time">
                        { props.datetime }
                    </span>
                </div>  
            </div>
            <div className="chatguess-icon-horizontal3dots">
                <IconImageScreen src={ iconhorizontal3dots } alt="horizontal 3 dots" class={""}></IconImageScreen>
            </div>
        </div>
    )
}

export default GuessChatScreen;