import React from 'react';
import './CurrentChatScreen.css';

function CurrentChatScreen(props : any){
    return (
        <div className="chatcurrent-container">
            <p>Quang Huy</p>
            <div className="chatcurrent-context">
                <span>
                    Bootstrap is aBootstrap  Bootstrap is aBootstrap is aBootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.
                </span>
                <span className="chat-time">06:30 pm</span> 
            </div>  
        </div>
    )
}

export default CurrentChatScreen;