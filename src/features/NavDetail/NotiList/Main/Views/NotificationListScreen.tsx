import React from 'react';
import { ENUM_KIND_OF_NOTFOUNDICON } from '../../../../../libraries/Constants/KindOfNotFoundIcon';
import DataNotFoundScreen from '../../../../../libraries/Features/DataNotFound/Views/DataNotFoundScreen';
import HeaderNotificationListScreen from '../../Header/Views/HeaderNotificationListScreen';
import './NotificationListScreen.css';


function NotificationListScreen(props: any) {


    return (
        <>
            <div className="userchatlist-top">
                <HeaderNotificationListScreen></HeaderNotificationListScreen>
            </div>

            <div className="userchatlist-bottom">
                <DataNotFoundScreen text={"Bạn chưa có thông báo"} icon={ ENUM_KIND_OF_NOTFOUNDICON.NOTI } isPosition={ false }></DataNotFoundScreen>
            </div>
        </>
    );

}

export default NotificationListScreen;


