import React from 'react';
import './BodyScreen.css';
import NavbarScreen from './../../../features/Navbar/Main/Views/NavbarScreen'
import UserChatListScreen from '../../../features/UserChatList/Main/Views/UserChatListScreen';
import ChatDetailScreen from '../../../features/ChatDetail/Main/Views/ChatDetailScreen';

function BodyScreen(props : any) {
  const { hasNavbar } = props;
  return (
    <div className="body-container">
      <div className="body-left">
        <NavbarScreen></NavbarScreen>
      </div>
      <div className="body-right">
        <UserChatListScreen></UserChatListScreen>
        <ChatDetailScreen hasChat={ true }></ChatDetailScreen>
      </div>
    </div>
  );
}

export default BodyScreen;
