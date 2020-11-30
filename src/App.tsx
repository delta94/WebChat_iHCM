import React from 'react';
import './App.css';
import HeaderScreen from './containers/Header/Views/HeaderScreen';
import BodyScreen from './containers/Body/Views/BodyScreen';

function App() {
  return (
    <div>
      <HeaderScreen></HeaderScreen>
      <BodyScreen></BodyScreen>
    </div>
  );
}

export default App;
