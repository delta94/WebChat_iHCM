import React from 'react';
import './BodyScreen.css';
import NavbarScreen from './../../../features/Navbar/Views/NavbarScreen'
import UserChatList from '../../../features/UserChatList/Views/UserChatList';
import ChatDetail from '../../../features/ChatDetail/Views/ChatDetail';

function BodyScreen() {
  return (
    <div className="body-container">
      <NavbarScreen></NavbarScreen>
      <UserChatList></UserChatList>
      <ChatDetail></ChatDetail>
    </div>
  );
}

export default BodyScreen;
