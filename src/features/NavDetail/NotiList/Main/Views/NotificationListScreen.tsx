import React, { useEffect, useState } from 'react';
import { ENUM_KIND_OF_ICONPANEL } from '../../../../../libraries/Constants/KindOfIconPanel';
import { ENUM_KIND_OF_NOTFOUNDICON } from '../../../../../libraries/Constants/KindOfNotFoundIcon';
import DataNotFoundScreen from '../../../../../libraries/Features/DataNotFound/Views/DataNotFoundScreen';
import SkeletonNavbarDetailScreen from '../../../../../libraries/Features/SkeletonNavbarDetail/Views/SkeletonNavbarDetailScreen';
import { sleep } from '../../../../../libraries/Functions/Sleep';
import HeaderNotificationListScreen from '../../Header/Views/HeaderNotificationListScreen';
import { INotification } from '../../Noti/Models/Notification';
import NotificationScreen from '../../Noti/Views/NotificationScreen';
import './NotificationListScreen.css';

const notiList: INotification[] = [
    {
        avatar: "https://i.pinimg.com/736x/27/bc/7b/27bc7b1d116c83824fbdf4547308a296.jpg",
        time: "2021-01-13T07:10:46.000Z",
        isActive: true,
        status:1,
        username:"Trung Đức",
        context:""
    },
    {
        avatar: "https://i.pinimg.com/736x/27/bc/7b/27bc7b1d116c83824fbdf4547308a296.jpg",
        time: "2020-10-21 01:10:40",
        isActive: false,
        status:2,
        username:"Trung Đức",
        context:"Nhóm hội người yêu chim quý Cổ Nhuế Bắc Từ Liêm Hà Nội"
    },
    {
        avatar: "https://i.pinimg.com/736x/27/bc/7b/27bc7b1d116c83824fbdf4547308a296.jpg",
        time: "2020-10-21 01:10:40",
        isActive: false,
        status:3,
        username:"Trung Đức",
        context:""
    },
    {
        avatar: "https://i.pinimg.com/736x/27/bc/7b/27bc7b1d116c83824fbdf4547308a296.jpg",
        time: "2020-10-21 01:10:40",
        isActive: true,
        status:4,
        username:"Trung Đức",
        context:"Hello cả nhà"
    },
    {
        avatar: "https://i.pinimg.com/736x/27/bc/7b/27bc7b1d116c83824fbdf4547308a296.jpg",
        time: "2020-10-21 01:10:40",
        isActive: true,
        status:4,
        username:"Trung Đức",
        context:"Hello cả nhà"
    },
    {
        avatar: "https://i.pinimg.com/736x/27/bc/7b/27bc7b1d116c83824fbdf4547308a296.jpg",
        time: "2020-10-21 01:10:40",
        isActive: true,
        status:4,
        username:"Trung Đức",
        context:"Hello cả nhà"
    },
    {
        avatar: "https://i.pinimg.com/736x/27/bc/7b/27bc7b1d116c83824fbdf4547308a296.jpg",
        time: "2020-10-21 01:10:40",
        isActive: true,
        status:4,
        username:"Trung Đức",
        context:"Hello cả nhà"
    },
    {
        avatar: "https://i.pinimg.com/736x/27/bc/7b/27bc7b1d116c83824fbdf4547308a296.jpg",
        time: "2020-10-21 01:10:40",
        isActive: true,
        status:4,
        username:"Trung Đức",
        context:"Hello cả nhà"
    },
    {
        avatar: "https://i.pinimg.com/736x/27/bc/7b/27bc7b1d116c83824fbdf4547308a296.jpg",
        time: "2020-10-21 01:10:40",
        isActive: true,
        status:4,
        username:"Trung Đức",
        context:"Hello cả nhà"
    },
    {
        avatar: "https://i.pinimg.com/736x/27/bc/7b/27bc7b1d116c83824fbdf4547308a296.jpg",
        time: "2020-10-21 01:10:40",
        isActive: true,
        status:4,
        username:"Trung Đức",
        context:"Hello cả nhà"
    },
    {
        avatar: "https://i.pinimg.com/736x/27/bc/7b/27bc7b1d116c83824fbdf4547308a296.jpg",
        time: "2020-10-21 01:10:40",
        isActive: true,
        status:4,
        username:"Trung Đức",
        context:"Hello cả nhà"
    },
    {
        avatar: "https://i.pinimg.com/736x/27/bc/7b/27bc7b1d116c83824fbdf4547308a296.jpg",
        time: "2020-10-21 01:10:40",
        isActive: true,
        status:4,
        username:"Trung Đức",
        context:"Hello cả nhà"
    },
    {
        avatar: "https://i.pinimg.com/736x/27/bc/7b/27bc7b1d116c83824fbdf4547308a296.jpg",
        time: "2020-10-21 01:10:40",
        isActive: true,
        status:4,
        username:"Trung Đức",
        context:"Hello cả nhà"
    },
    {
        avatar: "https://i.pinimg.com/736x/27/bc/7b/27bc7b1d116c83824fbdf4547308a296.jpg",
        time: "2020-10-21 01:10:40",
        isActive: true,
        status:4,
        username:"Trung Đức",
        context:"Hello cả nhà"
    },
    {
        avatar: "https://i.pinimg.com/736x/27/bc/7b/27bc7b1d116c83824fbdf4547308a296.jpg",
        time: "2020-10-21 01:10:40",
        isActive: true,
        status:4,
        username:"Trung Đức",
        context:"Hello cả nhà"
    },
    {
        avatar: "https://i.pinimg.com/736x/27/bc/7b/27bc7b1d116c83824fbdf4547308a296.jpg",
        time: "2020-10-21 01:10:40",
        isActive: true,
        status:4,
        username:"Trung Đức",
        context:"Hello cả nhà"
    },
]


function NotificationListScreen(props: any) {
    const [notiListz, setNotiListz] = useState<INotification[]>([]);

    const iconpanel = ENUM_KIND_OF_ICONPANEL.NOTI;

    useEffect(() => {
        (async () =>{
            await sleep(4e3);
            setNotiListz(notiList);
        })()

    }, []);
    
    const showNotiList = () =>{
        // if(notiListz.length <= 0){
        //     return <DataNotFoundScreen text={"Bạn chưa có thông báo"} icon={ ENUM_KIND_OF_NOTFOUNDICON.NOTI } isPosition={ false }></DataNotFoundScreen>;
        // }
        return notiListz.map(
            (noti: INotification, idx: number) => (
                <NotificationScreen {...noti}></NotificationScreen>
            )
        );

    }

    return (
        <>
            <div className="userchatlist-top headernoti-container">
                <HeaderNotificationListScreen></HeaderNotificationListScreen>
            </div>

            <div className="userchatlist-bottom">
                { 
                    showNotiList() 
                }
                {
                    (notiListz.length === 0) && (
                        <>
                            <SkeletonNavbarDetailScreen iconpanel={ iconpanel }></SkeletonNavbarDetailScreen>
                            <SkeletonNavbarDetailScreen iconpanel={ iconpanel }></SkeletonNavbarDetailScreen>                            <SkeletonNavbarDetailScreen iconpanel={ iconpanel }></SkeletonNavbarDetailScreen>
                            <SkeletonNavbarDetailScreen iconpanel={ iconpanel }></SkeletonNavbarDetailScreen>
                            <SkeletonNavbarDetailScreen iconpanel={ iconpanel }></SkeletonNavbarDetailScreen>
                            <SkeletonNavbarDetailScreen iconpanel={ iconpanel }></SkeletonNavbarDetailScreen>
                            <SkeletonNavbarDetailScreen iconpanel={ iconpanel }></SkeletonNavbarDetailScreen>
                            <SkeletonNavbarDetailScreen iconpanel={ iconpanel }></SkeletonNavbarDetailScreen>
                            <SkeletonNavbarDetailScreen iconpanel={ iconpanel }></SkeletonNavbarDetailScreen>
                        </>

                    )
                }
            </div>
        </>
    );

}

export default NotificationListScreen;


