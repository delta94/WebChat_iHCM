import React from 'react';
import './App.css';
import HeaderScreen from './containers/Header/Views/HeaderScreen';
import BodyScreen from './containers/Body/Views/BodyScreen';
import PopupScreen from './libraries/Popup/Views/PopupScreen';

function App() {
  return (
    <div>
      <HeaderScreen></HeaderScreen>
      <BodyScreen></BodyScreen>
      <PopupScreen></PopupScreen>
    </div>
  );
}

export default App;
