import React from 'react';
import './ConversationScreen.css';
import HeaderConversationScreen from '../../Header/Views/HeaderConversationScreen'
import ChatListScreen from '../../ChatList/Main/Views/ChatListScreen';
import ChatInputScreen from '../../ChatInput/Main/Views/ChatInputScreen';
import { IConversationz } from '../Models/Conversation';


function ConversationScreen(props: IConversationz){
    return (
        <div className="conversation-container">
            <HeaderConversationScreen
            name={ props.nameHeader }
            avatar={ props.avatar }
            isOnline={ props.isOnline }
            eleOptionHeader={ props.eleOptionHeader }
            id={ props.id }
            isGroup={ props.isGroup }
            ></HeaderConversationScreen>

            <ChatListScreen
            id={ props.id }
            userList={ props.userList }
            messageList={ props.messageList }
            ></ChatListScreen>
            
            <ChatInputScreen></ChatInputScreen>
        </div>
    )
}

export default ConversationScreen;