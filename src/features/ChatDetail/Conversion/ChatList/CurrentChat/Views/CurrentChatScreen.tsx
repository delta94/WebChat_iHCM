import React from 'react';
import './CurrentChatScreen.css';

function CurrentChatScreen(props : any){
    return (
        <div className="chatcurrent-container">
            <div className="chatcurrent-context">
                <span className="app-mainfont">
                    { props.context }
                </span>
                <span className="chat-time app-mainfont">
                    { props.datetime }
                </span> 
            </div>  
        </div>
    )
}

export default CurrentChatScreen;