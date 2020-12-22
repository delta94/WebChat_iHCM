import React from 'react';
import './TextChatScreen.css';


function TextChatScreen(props : any){
    return (
        <div className={ props.isCurrent ? "currentchat-context" : "guestchat-context app-mainfont" }>
            <span className={ props.isCurrent ? "app-mainfont" : "" }>
                { props.context }                   
            </span>
            <span className="chat-time app-mainfont">
                { props.datetime }
            </span>
        </div> 
    )
}

export default TextChatScreen;