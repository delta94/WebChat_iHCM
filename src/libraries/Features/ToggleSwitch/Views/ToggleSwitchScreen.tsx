import React from 'react';
import './ToggleSwitchScreen.css';

const ToggleSwitchScreen = () =>{
    return(
        <label className="switch">
            <input type="checkbox" defaultChecked={ true }></input>
            <span className="slider round"></span>
        </label>
    )
}

export default ToggleSwitchScreen;