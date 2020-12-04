import React from 'react';
import './ConversionScreen.css';
import HeaderConversionScreen from '../../Header/Views/HeaderConversionScreen'
import ChatListScreen from '../../ChatList/Views/ChatListScreen';
import ChatInputScreen from '../../ChatInput/Views/ChatInputScreen';

function ConversionScreen(){
    return (
        <div className="conversion-container">
            <HeaderConversionScreen></HeaderConversionScreen>
            <ChatListScreen></ChatListScreen>
            <ChatInputScreen></ChatInputScreen>
        </div>
    )
}

export default ConversionScreen;