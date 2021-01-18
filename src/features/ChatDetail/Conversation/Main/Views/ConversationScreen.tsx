import React, { useEffect, useState } from 'react';
import './ConversationScreen.css';
import HeaderConversationScreen from '../../Header/Views/HeaderConversationScreen'
import ChatListScreen from '../../ChatList/Main/Views/ChatListScreen';
import ChatInputScreen from '../../ChatInput/Main/Views/ChatInputScreen';
import { IConversationz } from '../Models/Conversation';
import SearchChatScreen from '../../ChatList/SearchChat/Views/SearchChatScreen';

function ConversationScreen(props: IConversationz){
    const [query , setQuery] = useState("");

    const { hasSearch } = props;

    useEffect(() => {
        !hasSearch && setQuery("");
    },[hasSearch])

    return (
        <div className="conversation-container">
            <HeaderConversationScreen
            name={ props.nameHeader }
            avatar={ props.avatar }
            isOnline={ props.isOnline }
            eleOptionHeader={ props.eleOptionHeader }
            id={ props.id }
            isGroup={ props.isGroup }
            hasSearch={ hasSearch }
            onSearch={ props.onSearch }
            setQuery={ setQuery }
            ></HeaderConversationScreen>

            {
                props.hasSearch && (
                    <SearchChatScreen query={ query }></SearchChatScreen>
                )
            }

            <ChatListScreen
            id={ props.id }
            userList={ props.userList }
            messageList={ props.messageList }
            hasSearch={ props.hasSearch }
            ></ChatListScreen>
            
            <ChatInputScreen></ChatInputScreen>
        </div>
    )
}

export default ConversationScreen;