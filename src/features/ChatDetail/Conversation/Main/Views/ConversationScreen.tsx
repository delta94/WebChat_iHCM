import React, { useState } from 'react';
import './ConversationScreen.css';
import HeaderConversationScreen from '../../Header/Views/HeaderConversationScreen'
import ChatListScreen from '../../ChatList/Main/Views/ChatListScreen';
import ChatInputScreen from '../../ChatInput/Main/Views/ChatInputScreen';
import { IConversationz } from '../Models/Conversation';


function ConversationScreen(props: IConversationz){
    const [query , setQuery] = useState("");

    return (
        <div className="conversation-container">
            <HeaderConversationScreen
            name={ props.nameHeader }
            avatar={ props.avatar }
            isOnline={ props.isOnline }
            eleOptionHeader={ props.eleOptionHeader }
            id={ props.id }
            isGroup={ props.isGroup }
            hasSearch={ props.hasSearch }
            onSearch={ props.onSearch }
            setQuery={ setQuery }
            ></HeaderConversationScreen>

            {
                props.hasSearch && (
                    <div className="searchmessage-container">
                        Huy
                    </div>
                )
            }

            <ChatListScreen
            id={ props.id }
            userList={ props.userList }
            messageList={ props.messageList }
            hasSearch={ props.hasSearch }
            query={ query }
            ></ChatListScreen>
            
            <ChatInputScreen></ChatInputScreen>
        </div>
    )
}

export default ConversationScreen;