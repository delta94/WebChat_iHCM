import React, { useEffect, useRef, useState } from 'react';
import CurrentChatScreen from '../../CurrentChat/Views/CurrentChatScreen';
import GuessChatCurrent from '../../GuessChat/Views/GuessChatCurrent';
import './ChatListScreen.css';

function ChatListScreen(props : any){
    const [curUserId, setCurUserId] = useState(1);
    const { listUser , listMessage } = props;

    const chatlistRef = useRef<HTMLInputElement>(null);

    useEffect(() =>{
        if(chatlistRef.current){
            chatlistRef.current.scrollTop = chatlistRef.current.scrollHeight;
        }
    })

    return (
        <div className="chatlist-container" ref={ chatlistRef }>
            <CurrentChatScreen></CurrentChatScreen>
            <GuessChatCurrent></GuessChatCurrent>
        </div>
    )
}

export default ChatListScreen;