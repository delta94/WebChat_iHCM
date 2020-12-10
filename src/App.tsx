import React, { useState } from 'react';
import './App.css';
import HeaderScreen from './containers/Header/Views/HeaderScreen';
import BodyScreen from './containers/Body/Views/BodyScreen';
import PopupScreen from './libraries/Features/Popup/Views/PopupScreen';

function App() {
  const [hasNavbar , setHasNavbar] = useState<boolean>(true);
  const [hasPopup , setHasPopup] = useState<boolean>(false);
  const [coordPopup , setCoordPopup] = useState<object>({});
  const [eleRef , setEleRef] = useState<object>({});

  const toggleNavbar = () =>{
    setHasNavbar(prev => !prev);
  }

  const setEleRefer =(ref: any) =>{
    if(hasPopup){
      setEleRef(ref);

      setCoordPopup({
        x: ref.current.offsetLeft,
        y: ref.current.offsetTop + ref.current.offsetHeight,
      })
    }
  }

  const togglePopup = (ref: any) =>{
    setEleRef(ref);
    console.log(ref);
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
      hasPopup={ hasPopup }
      setEleRefer={ setEleRefer }
      ></HeaderScreen>

      <BodyScreen hasNavbar={ hasNavbar}></BodyScreen>

      <PopupScreen hasPopup={ hasPopup } eleRef={ eleRef } coordPopup={ coordPopup } togglePopup={ togglePopup }>
        <div>
          <ul>
            <li>Tìm kiếm</li>
          </ul>
          <ul>
            <li>Tìm kiếm</li>
          </ul>
          <ul>
            <li>Tìm kiếm</li>
          </ul>
        </div>
      </PopupScreen>
    </div>
  );
}

export default App;
