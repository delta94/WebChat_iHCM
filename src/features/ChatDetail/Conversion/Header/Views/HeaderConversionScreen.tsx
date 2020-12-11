import React from 'react';
import CircleAvatarScreen from '../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import IconImageScreen from '../../../../../libraries/Features/IconImage/Views/IconImageScreen';
import TooltipScreen from '../../../../../libraries/Features/Tooltip/Views/TooltipScreen';
import './HeaderConversionScreen.css';

const iconcamera = require('./Icons/iconcamera.svg').default;
const icon3dots = require('./Icons/icon3dots.svg').default;
const iconsearch = require('../../../../../libraries/Icons/iconsearch.svg').default;

function HeaderConversionScreen(props: any){
    return (
        <div className="conversionheader-container">
            <div className="conversionheader-left">
                <CircleAvatarScreen
                isOnline={ props.isOnline }
                src={ props.avatar }
                width="48px"
                height="48px"
                class=""
                alt=""
                ></CircleAvatarScreen>
                <div className="conversionheader-context">
                    <h4 className="app-mainfont">{ props.name }</h4>
                    <span>{ props.isOnline ? "Đang online" : "Đang offline" }</span>
                </div>
            </div>
            <div className="conversionheader-right">
                <TooltipScreen context="Gọi video">
                    <div>
                        <IconImageScreen src={ iconcamera } alt="camera"></IconImageScreen>
                    </div>
                </TooltipScreen>
                <TooltipScreen context="Tìm kiếm">
                    <div>
                    <IconImageScreen src={ iconsearch } alt="search"></IconImageScreen>
                    </div>
                </TooltipScreen>
                <TooltipScreen context="Chức năng khác">
                    <div>
                    <IconImageScreen src={ icon3dots } alt="3 dots"></IconImageScreen>
                    </div>
                </TooltipScreen>

            </div>
        </div>
    )
}

export default HeaderConversionScreen;