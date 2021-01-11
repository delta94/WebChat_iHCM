import React from 'react';
import { ENUM_KIND_OF_GROUPNOTICHAT } from '../../../../../../../libraries/Constants/KindOfGroupNotiChat';
import CircleAvatarScreen from '../../../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import { IGroupNotiChat } from '../Models/GroupNotiChat';
import './GroupNotiChatScreen.css';

const iconaddmember2 = require('../../../../../../../libraries/Icons/iconaddmember2.svg').default;
const iconkickmember = require('../../../../../../../libraries/Icons/iconkickmember.svg').default;

function GroupNotiChatScreen(props : IGroupNotiChat){

    const content = () =>{
        switch (props.status) {
            case ENUM_KIND_OF_GROUPNOTICHAT.ADD_MEMBER: 
                return " đã được thêm vào nhóm";
            case ENUM_KIND_OF_GROUPNOTICHAT.MEMBER_GETOUT: 
                return " đã thoát khỏi nhóm";
            case ENUM_KIND_OF_GROUPNOTICHAT.KICK_MEMBER: 
                return " đã bị xóa khỏi nhóm";
        }
    }

    return (
        <div className="groupnotichat-container">
            <CircleAvatarScreen
                width="48px"
                height="48px"
                src={ props.imgSrc }
                alt={ "" }
                class=""
                isOnline={ false }
                onClick={ null }
            ></CircleAvatarScreen>
            <div className="groupnotichat-content">
                <img src={ props.status === ENUM_KIND_OF_GROUPNOTICHAT.ADD_MEMBER ? iconaddmember2 : iconkickmember } alt=""/>
                { " " }
                <span className="app-mainfont">
                    <span className="groupnotichat-content-username">
                        { props.username }
                    </span> 
                    {
                        content()
                    }
                </span>
            </div>

        </div>
    )
}

export default GroupNotiChatScreen;