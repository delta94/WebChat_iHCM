import React from 'react';
import DetailPopupScreen from '../../../../../libraries/Features/Popup/DetailPopup/Views/DetailPopupScreen';
import MainPopupScreen from '../../../../../libraries/Features/Popup/MainPopup/Views/MainPopupScreen';
import ToggleSwitchScreen from '../../../../../libraries/Features/ToggleSwitch/Views/ToggleSwitchScreen';
import TooltipScreen from '../../../../../libraries/Features/Tooltip/Views/TooltipScreen';
import './HeaderNotificationListScreen.css';

const iconvertical3dots = require('../../../../../libraries/Icons/iconvertical3dots.svg').default;
const icontrash = require('../../../../../libraries/Icons/icontrash.svg').default;
const iconsetting = require('../../../../../libraries/Icons/iconsetting.svg').default;
const iconconfirm = require('../../../../../libraries/Icons/iconconfirm.svg').default;
const iconbrownnoti = require('../../../../../libraries/Icons/iconbrownnoti.svg').default;

function HeaderNotificationListScreen(props: any) {

    const eleContext = (
        <div className="userchatlist-header-container">
            <div className="brownnoti-container">
                <img src={ iconbrownnoti }  alt=""></img>
            </div>
            <div className="app-mainfont">
                <h4>Thông báo</h4>
                <span>Tất cả các thông báo</span>
            </div>
            <ToggleSwitchScreen></ToggleSwitchScreen>
        </div>
    );

    const listEles = [
        {
            onClick: null,
            icon: iconconfirm,
            text: "Đã đọc tất cả",
            eleContext: null,
        },
        {
            onClick: null,
            icon: iconsetting,
            text: "Cài đặt",
            eleContext: eleContext,
        },
        {
            onClick: null,
            icon: icontrash,
            text: "Xóa tất cả",
            eleContext: eleContext,
        },
      ];

    return (
        <>
            <div className="notification-top">
                <div className="userchatlist-header-container">
                    <h4 className="app-mainfont">Thông báo</h4>
                    
                    <MainPopupScreen context={ <DetailPopupScreen listEles={ listEles }></DetailPopupScreen> }>
                        <div>
                            <TooltipScreen context="Tạo tin nhắn">
                                <img src={ iconvertical3dots } className="userchatlist-icon-penedit" alt=""/>
                            </TooltipScreen>
                        </div>
                    </MainPopupScreen>
                </div>
            </div>
        </>
    );

}

export default HeaderNotificationListScreen;


