import React from 'react';
import CircleAvatarScreen from '../../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import IconImageScreen from '../../../../../../libraries/Features/IconImage/Views/IconImageScreen';
import { IGuessChat } from '../Models/GuessChat';
import './GuestChatScreen.css';
import { connect   } from "react-redux";
import { setResponseText } from "../../../../../../redux/Actions/ResponseText.action";

const iconhorizontal3dots = require('../../../../../../libraries/Icons/iconhorizontal3dots.svg').default;

function GuestChatScreen(props : IGuessChat){
    return (
        <div className="guestchat-container" onClick={() => props.setResponseText(props.user.name , props.context , props.kindOfMess)}>
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
                    <div className="guestchat-icon-horizontal3dots">
                        <IconImageScreen src={ iconhorizontal3dots } alt="horizontal 3 dots" class={""}></IconImageScreen>
                    </div>
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