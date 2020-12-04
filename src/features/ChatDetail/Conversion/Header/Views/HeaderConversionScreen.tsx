import React from 'react';
import CircleAvatarScreen from '../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import './HeaderConversionScreen.css';

const iconcamera = require('./Icons/iconcamera.svg').default;
const icon3dots = require('./Icons/icon3dots.svg').default;
const iconsearch = require('../../../../../libraries/Icons/iconsearch.svg').default;

function HeaderConversionScreen(){
    return (
        <div className="conversionheader-container">
            <div className="conversionheader-image">
                <CircleAvatarScreen
                isOnline={true}
                src="https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"
                width="50px"
                height="50px"
                class=""
                alt=""
                ></CircleAvatarScreen>
            </div>
            <div className="conversionheader-context">
                <div>
                    <h3>Huy Quang</h3>
                    <span>Đang online</span>
                </div>
                <div className="conversionheader-context-icons">
                    <img src={ iconcamera } alt=""/>
                    <img src={ iconsearch } alt=""/>
                    <img src={ icon3dots } alt=""/>
                </div>
            </div>
        </div>
    )
}

export default HeaderConversionScreen;