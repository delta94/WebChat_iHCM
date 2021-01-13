import React from 'react';
import { ENUM_KIND_OF_NOTIFICATION } from '../../../../../libraries/Constants/KindOfNotification';
import CircleAvatarScreen from '../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import { decodeHTML } from '../../../../../libraries/Functions/DecodeHTML';
import { useWindowSize } from '../../../../../libraries/Hooks/useWindowSize';
import { getTimePeriod, INotification } from '../Models/Notification';
import './NotificationScreen.css';

const iconnotitag = require("./Icons/iconnotitag.svg").default;
const iconnotikicked = require("./Icons/iconnotikicked.svg").default;
const iconnotilike = require("./Icons/iconnotilike.svg").default;
const iconnotireply = require("./Icons/iconnotireply.svg").default;

function NotificationScreen(props: INotification) {
    const [width, height] = useWindowSize();

    function context ():string{
        switch (props.status) {
            case ENUM_KIND_OF_NOTIFICATION.REPLY:
                return "đã trả lời bình luận của bạn trong &#8243; " + props.context +" &#8243;";
            case ENUM_KIND_OF_NOTIFICATION.KICKED:
                return "đã xóa bạn khỏi nhóm chat &#8243; " + props.context +" &#8243;";
            case ENUM_KIND_OF_NOTIFICATION.LIKE:
                return "đã tương tác bình luận của bạn ";
            case ENUM_KIND_OF_NOTIFICATION.TAG:
                return "đã nhắc bạn trong một bình luận ";
            default:
                return "";
        }
    }

    const icon = () =>{
        switch (props.status) {
            case ENUM_KIND_OF_NOTIFICATION.REPLY:
                return iconnotireply;
            case ENUM_KIND_OF_NOTIFICATION.KICKED:
                return iconnotikicked;
            case ENUM_KIND_OF_NOTIFICATION.LIKE:
                return iconnotilike
            case ENUM_KIND_OF_NOTIFICATION.TAG:
                return iconnotitag;
        }
    }

    const renderUserImage = () => {
        let widthAva="48px";
        let heightAva="48px";
        if (width < 768) {
            widthAva="40px";
            heightAva="40px";
        }

        return (
            <CircleAvatarScreen
              class=""
              width={ widthAva }
              height={ heightAva }
              src={ props.avatar }
              alt="avatar"
              isOnline={ false }
              notiIcon={ icon() }
            />
        );
    };

    return (
        <div
            className={
            props.isActive
                ? "userchat-container userchat-container-active notification-container"
                : "userchat-container notification-container"
            }
        >
            <div className="userchat-image">
            {
                renderUserImage()
            }
            </div>
            <div className="userchat-context app-mainfont">
                <div>
                    <div className="notification-context">
                        <p>{ props.username }</p>
                        {" "}
                        <span>{ decodeHTML(context()) }</span>
                    </div>
                    <span className="notification-time">
                        { getTimePeriod(props.time) } 
                    </span>
                </div>
            </div>
        </div>
    );
}

export default NotificationScreen;


