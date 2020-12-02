import React from 'react';
import './BodyScreen.css';
import NavbarScreen from './../../../features/Navbar/Main/Views/NavbarScreen'
import UserChatListScreen from '../../../features/UserChatList/Main/Views/UserChatListScreen';
import ChatDetailScreen from '../../../features/ChatDetail/Main/Views/ChatDetailScreen';

function BodyScreen() {
  return (
    <div className="body-container">
      <NavbarScreen></NavbarScreen>
      <UserChatListScreen></UserChatListScreen>
      <ChatDetailScreen hasChat={false}></ChatDetailScreen>
    </div>
  );
}

export default BodyScreen;
