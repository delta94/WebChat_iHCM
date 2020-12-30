import React, { useState } from 'react';
import './BodyScreen.css';
import NavbarScreen from './../../../features/Navbar/Main/Views/NavbarScreen'
import UserChatListScreen from '../../../features/UserChatList/Main/Views/UserChatListScreen';
import ChatDetailScreen from '../../../features/ChatDetail/Main/Views/ChatDetailScreen';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { useLayoutEffect } from 'react';

function BodyScreen(props : any) {
  const { hasNavbar } = props;
  const [width, height] = useWindowSize();


  return (
    <Router>
      <div className="body-container" style = {{height:height-50}}>
        <div className={ hasNavbar ? "body-left" : "body-left body-left--hide"}>
          <NavbarScreen></NavbarScreen>
        </div>
        <div className={ hasNavbar ? "body-right--hasnavbar body-right" : "body-right"}>
          <UserChatListScreen></UserChatListScreen>
          <ChatDetailScreen hasChat={ true }></ChatDetailScreen>
        </div>
      </div>
    </Router>

  );
}

// resize screen
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default BodyScreen;
