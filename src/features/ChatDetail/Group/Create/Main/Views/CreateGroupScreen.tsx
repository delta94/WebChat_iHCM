import React from 'react';
import HeaderCreateGroupScreen from '../../Header/Views/HeaderCreateGroupScreen';
import BodyCreateGroupScreen from '../../Body/Views/BodyCreateGroupScreen';
import './CreateGroupScreen.css';


function CreateGroupScreen(props : any) {

  return (
    <div className="creategroup-container">
        <HeaderCreateGroupScreen></HeaderCreateGroupScreen>
        <BodyCreateGroupScreen></BodyCreateGroupScreen>
    </div>
  );
}

export default CreateGroupScreen;
