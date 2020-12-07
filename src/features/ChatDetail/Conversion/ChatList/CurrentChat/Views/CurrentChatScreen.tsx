import React from 'react';
import './CurrentChatScreen.css';

function CurrentChatScreen(props : any){
    return (
        <div className="chatcurrent-container">
            <div className="chatcurrent-context">
                <span>
                    { props.context }
                </span>
                <span className="chat-time">
                    { props.datetime }
                </span> 
            </div>  
        </div>
    )
}

export default CurrentChatScreen;