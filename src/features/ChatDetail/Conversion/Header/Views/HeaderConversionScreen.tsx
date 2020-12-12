import React from 'react';
import CircleAvatarScreen from '../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import IconImageScreen from '../../../../../libraries/Features/IconImage/Views/IconImageScreen';
import DetailPopupScreen from '../../../../../libraries/Features/Popup/DetailPopup/Views/DetailPopupScreen';
import MainPopupScreen from '../../../../../libraries/Features/Popup/MainPopup/Views/MainPopupScreen';
import TooltipScreen from '../../../../../libraries/Features/Tooltip/Views/TooltipScreen';
import './HeaderConversionScreen.css';

const iconcamera = require('./Icons/iconcamera.svg').default;
const iconoffvolume = require('./Icons/iconoffvolume.svg').default;
const icon3dots = require('./Icons/icon3dots.svg').default;
const iconsearch = require('../../../../../libraries/Icons/iconsearch.svg').default;
const icontrash = require('../../../../../libraries/Icons/icontrash.svg').default;

function HeaderConversionScreen(props: any){

    const listEles = [
        {
            onClick: null,
            icon: iconsearch,
            text: "Tìm kiếm"
        },
        {
            onClick: null,
            icon: iconoffvolume,
            text: "Tắt thông báo"
        },
        {
            onClick: null,
            icon: icontrash,
            text: "Xóa chat"
        }
      ];

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
                <MainPopupScreen context={ <DetailPopupScreen listEles={ listEles }></DetailPopupScreen> }>
                    <div>
                        <TooltipScreen context="Chức năng khác">
                            <div>
                                <IconImageScreen src={ icon3dots } alt="3 dots"></IconImageScreen>
                            </div>
                        </TooltipScreen>
                    </div>
                </MainPopupScreen>
            </div>
        </div>
    )
}

export default HeaderConversionScreen;