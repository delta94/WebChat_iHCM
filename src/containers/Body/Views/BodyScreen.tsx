import React from 'react';
import './BodyScreen.css';
import NavbarScreen from './../../../features/Navbar/Main/Views/NavbarScreen'
import UserChatListScreen from '../../../features/UserChatList/Main/Views/UserChatListScreen';
import ChatDetailScreen from '../../../features/ChatDetail/Main/Views/ChatDetailScreen';

function BodyScreen(props : any) {
  const { hasNavbar } = props;
  return (
    <div className="body-container">
      <div className={ hasNavbar ? "body-left" : "body-left body-left--hide"}>
        <NavbarScreen></NavbarScreen>
      </div>

      <div className={ hasNavbar ? "body-right--hasnavbar body-right" : "body-right"}>
        <UserChatListScreen></UserChatListScreen>
        <ChatDetailScreen hasChat={ true }></ChatDetailScreen>
      </div>
    </div>
  );
}

export default BodyScreen;
