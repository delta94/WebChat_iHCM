import React from 'react';
import CustomInputScreen from '../../../../../libraries/Features/CustomInput/Views/CustomInputScreen';
import IconImageScreen from '../../../../../libraries/Features/IconImage/Views/IconImageScreen';
import './ChatInputScreen.css';
import { connect   } from "react-redux";
import { unactiveResponseText } from "../../../../../redux/Actions/ResponseText.action";
import { ENUM_KIND_OF_MESSAGE } from '../../../../../libraries/Constants/KindOfMessage';

const iconsmile = require('./Icons/iconsmile.svg').default;
const icongim = require('../../../../../libraries/Icons/icongim.svg').default;
const iconsubstract = require('./Icons/iconsubstract.svg').default;
const iconcancel = require('../../../../../libraries/Icons/iconcancel.svg').default;

const styleCustomInput = {
    backgroundImage:`url('${ iconsmile }')`,
    backgroundPosition:'99% 50%',
    padding:'10px 35px 10px 10px',
    borderRadius:'8px',
    fontSize:'14px',
}
function ChatInputScreen(props: any){
    const { responseText } = props;

    const showContextResponseText = (kindOfMess: number , context: string) =>{
        let eleResult = "";
        switch (kindOfMess) {
            case ENUM_KIND_OF_MESSAGE.TEXT:
                eleResult = context;
                break;
            case ENUM_KIND_OF_MESSAGE.IMAGE:
                eleResult = "Ảnh";
                break;
            case ENUM_KIND_OF_MESSAGE.FILE:
                eleResult = "File";
                break;
            case ENUM_KIND_OF_MESSAGE.LINK:
                eleResult = "Link";
                break;
            default:
                break;
        }
        return eleResult;
    }
    return (
        <div className={ responseText.isActive ? "chatinput-container chatinput--hasresponsetext" : "chatinput-container"}>

            {
                responseText.isActive && (
                    <div className="chatinput-responsetext">
                        <div>
                            <span className="app-mainfont">
                                Trả lời 
                                <span className="chatinput-responsetext-username"> { responseText.name } </span>
                            </span>
                            <p className="chatinput-responsetext-context">
                                { showContextResponseText(responseText.kindOfMess , responseText.context) }
                            </p>
                        </div>
                        <IconImageScreen src={ iconcancel } alt="gim" onClick={ props.unactiveResponseText } class="chatinput-responsetext-icon-cancel"></IconImageScreen>
                    </div>
                )
            }
            <div className="chatinput-main">
                <IconImageScreen src={ icongim } alt="gim"></IconImageScreen>
                <CustomInputScreen placeHolder="Nhập nội dung bình luận" class="" style={ styleCustomInput }></CustomInputScreen>
                <IconImageScreen src={ iconsubstract } alt="send data"></IconImageScreen>
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
        unactiveResponseText: () => dispatch(unactiveResponseText()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInputScreen)