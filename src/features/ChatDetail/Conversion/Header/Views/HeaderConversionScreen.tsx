import React from 'react';
import CircleAvatarScreen from '../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import IconImageScreen from '../../../../../libraries/Features/IconImage/Views/IconImageScreen';
import './HeaderConversionScreen.css';

const iconcamera = require('./Icons/iconcamera.svg').default;
const icon3dots = require('./Icons/icon3dots.svg').default;
const iconsearch = require('../../../../../libraries/Icons/iconsearch.svg').default;

function HeaderConversionScreen(props: any){
    return (
        <div className="conversionheader-container">
            <div className="conversionheader-image">
                <CircleAvatarScreen
                isOnline={ props.isOnline }
                src={ props.avatar }
                width="50px"
                height="50px"
                class=""
                alt=""
                ></CircleAvatarScreen>
            </div>
            <div className="conversionheader-context">
                <div>
                    <h3>{ props.name }</h3>
                    <span>{ props.isOnline ? "Đang online" : "Đang offline" }</span>
                </div>
                <div className="conversionheader-context-icons">
                    <IconImageScreen src={ iconcamera } alt="camera"></IconImageScreen>
                    <IconImageScreen src={ iconsearch } alt="search"></IconImageScreen>
                    <IconImageScreen src={ icon3dots } alt="3 dots"></IconImageScreen>
                </div>
            </div>
        </div>
    )
}

export default HeaderConversionScreen;