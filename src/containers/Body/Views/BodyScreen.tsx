import React, { useState } from 'react';
import './BodyScreen.css';
import NavbarScreen from './../../../features/Navbar/Main/Views/NavbarScreen'
// import UserChatListScreen from '../../../features/NavDetail/UserChatList/Main/Views/UserChatListScreen';
import ChatDetailScreen from '../../../features/ChatDetail/Main/Views/ChatDetailScreen';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { useWindowSize } from '../../../libraries/Hooks/useWindowSize';
import { ENUM_KIND_OF_ICONPANEL } from '../../../libraries/Constants/KindOfIconPanel';
import NavDetailScreen from '../../../features/NavDetail/Main/Views/NavDetailScreen';

function BodyScreen(props : any) {
  const [activedIcon , setActivedIcon] = useState(ENUM_KIND_OF_ICONPANEL.MESSAGES);
  const { hasNavbar } = props;
  const [width, height] = useWindowSize();

  const eleHeader: any = document.querySelector('.header-container');
  const heightHeader = eleHeader ? eleHeader.offsetHeight : 50
  const styleInline = {
    height: height- heightHeader
  }



  return (
    <Router>
      <div className="body-container" style = { styleInline }>
        <div className={ hasNavbar ? "body-left" : "body-left body-left--hide"}>
          <NavbarScreen activedIcon={ activedIcon } setActivedIcon={ setActivedIcon }></NavbarScreen>
        </div>
        <div className={ hasNavbar ? "body-right--hasnavbar body-right" : "body-right"}>

          <NavDetailScreen  activedIcon={ activedIcon }></NavDetailScreen>
          <ChatDetailScreen hasChat={ true }></ChatDetailScreen>
        </div>
      </div>
    </Router>

  );
}


export default BodyScreen;
