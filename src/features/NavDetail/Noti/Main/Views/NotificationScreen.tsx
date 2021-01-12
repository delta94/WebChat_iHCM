import React from 'react';
import DetailPopupScreen from '../../../../../libraries/Features/Popup/DetailPopup/Views/DetailPopupScreen';
import MainPopupScreen from '../../../../../libraries/Features/Popup/MainPopup/Views/MainPopupScreen';
import TooltipScreen from '../../../../../libraries/Features/Tooltip/Views/TooltipScreen';
import NoNotificationScreen from '../../NoNoti/Views/NoNotificationScreen';
import './NotificationScreen.css';

const iconvertical3dots = require('../../../../../libraries/Icons/iconvertical3dots.svg').default;
const icontrash = require('../../../../../libraries/Icons/icontrash.svg').default;
const iconsetting = require('../../../../../libraries/Icons/iconsetting.svg').default;
const iconconfirm = require('../../../../../libraries/Icons/iconconfirm.svg').default;

function NotificationScreen(props: any) {

    const listEles = [
        {
            onClick: null,
            icon: iconconfirm,
            text: "Đã đọc tất cả"
        },
        {
            onClick: null,
            icon: iconsetting,
            text: "Cài đặt"
        },
        {
            onClick: null,
            icon: icontrash,
            text: "Xóa tất cả"
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

            <div className="notification-bottom">

            </div>
        </>
    );

}

export default NotificationScreen;