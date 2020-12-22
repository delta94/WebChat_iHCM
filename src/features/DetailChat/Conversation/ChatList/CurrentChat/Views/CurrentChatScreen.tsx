import React from 'react';
import './CurrentChatScreen.css';

function CurrentChatScreen(props : any){
    return (
        <div className="currentchat-container">
            {/* <div className="currentchat-context">
                <span className="app-mainfont">
                    { props.context }
                </span>
                <span className="chat-time app-mainfont">
                    { props.datetime }
                </span> 
            </div>   */}
            { props.children }
        </div>
    )
}

export default CurrentChatScreen;