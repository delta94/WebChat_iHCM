import React from 'react';
import './BodyScreen.css';
import NavbarScreen from './../../../features/Navbar/Main/Views/NavbarScreen'
import UserChatListScreen from '../../../features/UserChatList/Main/Views/UserChatListScreen';
import DetailChatScreen from '../../../features/DetailChat/Main/Views/DetailChatScreen';

function BodyScreen(props : any) {
  const { hasNavbar } = props;
  return (
    <div className="body-container">
      <div className={ hasNavbar ? "body-left" : "body-left body-left--hide"}>
        <NavbarScreen></NavbarScreen>
      </div>

      <div className={ hasNavbar ? "body-right--hasnavbar body-right" : "body-right"}>
        <UserChatListScreen></UserChatListScreen>
        <DetailChatScreen hasChat={ true }></DetailChatScreen>
      </div>
    </div>
  );
}

export default BodyScreen;
