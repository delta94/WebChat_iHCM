import React, { useState } from 'react';
import './App.css';
import HeaderScreen from './containers/Header/Views/HeaderScreen';
import BodyScreen from './containers/Body/Views/BodyScreen';
import PopupScreen from './libraries/Features/Popup/Views/PopupScreen';

function App() {
  const [hasNavbar , setHasNavbar] = useState<boolean>(true);
  const [hasPopup , setHasPopup] = useState<boolean>(false);
  const [coordPopup , setCoordPopup] = useState<object>({});

  const toggleNavbar = () =>{
    setHasNavbar(prev => !prev);
  }

  const togglePopup = (ref: any) =>{
    if(!hasPopup){
      setCoordPopup({
        x: ref.current.offsetLeft,
        y: ref.current.offsetTop + ref.current.offsetHeight
      })
    }
    setHasPopup(prev => !prev);
  }

  return (
    <div className="container">
      <HeaderScreen 
      toggleNavbar={ toggleNavbar }
      togglePopup={ togglePopup }
      ></HeaderScreen>

      <BodyScreen hasNavbar={ hasNavbar}></BodyScreen>

      <PopupScreen hasPopup={ hasPopup } coordPopup={ coordPopup } togglePopup={ togglePopup }></PopupScreen>
    </div>
  );
}

export default App;
