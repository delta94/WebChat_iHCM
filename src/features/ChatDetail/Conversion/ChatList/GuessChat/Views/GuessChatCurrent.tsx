import React from 'react';
import CircleAvatarScreen from '../../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import './GuessChatCurrent.css';

function GuessChatCurrent(props : any){
    return (
        <div className="chatguess-container">
            <CircleAvatarScreen
            width="30px"
            height="30px"
            src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
            alt="Quang Huy"
            class="chatguess-left"
            isOnline={false}></CircleAvatarScreen>
            <div className="chatguess-right">
                <p>Quang Huy</p>
                <div className="chatguess-context">
                    <span>
                    Bootstrap is aBootstrap    Bootstrap is aBootstrap is aBootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.
                    </span>
                    <span className="chat-time">06:30 pm</span>
                </div>  
            </div>  
        </div>
    )
}

export default GuessChatCurrent;