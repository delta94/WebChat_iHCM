import React from 'react';
import CircleAvatarScreen from '../../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import IconImageScreen from '../../../../../../libraries/Features/IconImage/Views/IconImageScreen';
import { IGuessChat } from '../Models/GuessChat';
import './GuestChatScreen.css';
import { connect   } from "react-redux";
import { setResponseText } from "../../../../../../redux/Actions/ResponseText.action";
import MainPopupScreen from '../../../../../../libraries/Features/Popup/MainPopup/Views/MainPopupScreen';
import { ENUM_KIND_OF_MESSAGE } from '../../../../../../libraries/Constants/KindOfMessage';
import DetailPopupScreen from '../../../../../../libraries/Features/Popup/DetailPopup/Views/DetailPopupScreen';

const iconhorizontal3dots = require('../../../../../../libraries/Icons/iconhorizontal3dots.svg').default;
const iconreplay = require('./Icons/iconreplay.svg').default;
const iconcopy = require('./Icons/iconcopy.svg').default;
const icontrash = require('../../../../../../libraries/Icons/icontrash.svg').default;

function GuestChatScreen(props : IGuessChat){

    const listEles = [
        {
            onClick: () => props.setResponseText(props.user.name , props.context , props.kindOfMess),
            icon: iconreplay,
            text: "Trả lời"
        },
        {
            onClick: () => props.kindOfMess === ENUM_KIND_OF_MESSAGE.TEXT && navigator.clipboard.writeText(props.context),
            icon: iconcopy,
            text: "Sao chép"
        },
        {
            onClick: null,
            icon: icontrash,
            text: "Xóa"
        },
    ]

    return (
        <div className="guestchat-container">
            <CircleAvatarScreen
            width="30px"
            height="30px"
            src={ props.user.avatar }
            alt={ props.user.name }
            class="guestchat-left"
            isOnline={ false }
            ></CircleAvatarScreen>
            <div className="guestchat-right">
                <p className="app-mainfont">
                    { props.user.name }
                </p>
                <div className="guestchat-maincontext">
                    { props.children }
                    <MainPopupScreen context={ <DetailPopupScreen listEles={ listEles }></DetailPopupScreen> }> 
                        <div className="guestchat-icon-horizontal3dots">
                            <IconImageScreen src={ iconhorizontal3dots } alt="horizontal 3 dots" class={""}></IconImageScreen>
                        </div>
                    </MainPopupScreen>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        responseText: state.responseText,
    }
}
  
const mapDispatchToProps = (dispatch: any) => {
    return {
        setResponseText: (name:string , context: string , kindOfMess: number) => dispatch(setResponseText(name , context , kindOfMess)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestChatScreen)