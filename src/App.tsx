import React, { useState } from 'react';
import './App.css';
import HeaderScreen from './containers/Header/Views/HeaderScreen';
import BodyScreen from './containers/Body/Views/BodyScreen';

function App() {
  const [hasNavbar , setHasNavbar] = useState<boolean>(true);

  const toggleNavbar = () =>{
    setHasNavbar(prev => !prev);
    console.log(hasNavbar);
  }

  return (
    <div className="container">
      <HeaderScreen toggleNavbar={ toggleNavbar }></HeaderScreen>
      <BodyScreen hasNavbar={ hasNavbar}></BodyScreen>
    </div>
  );
}

export default App;
