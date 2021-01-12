import React from 'react';
import './NoNotificationScreen.css';

const iconnonoti = require('./Icons/iconnonoti.svg').default;

function NoNotificationScreen(props: any) {

    return (
        <div className="nonotification-container">
            <img src={ iconnonoti } alt=""/>
        </div>
    );

}

export default NoNotificationScreen;