import React from 'react';
import CustomInputScreen from '../../../../../../libraries/Features/CustomInput/Views/CustomInputScreen';
import IconImageScreen from '../../../../../../libraries/Features/IconImage/Views/IconImageScreen';
import './ChatInputScreen.css';
import { connect } from "react-redux";
import { unactiveResponseMess } from "../../../../../../redux/Actions/ResponseMess.action";
import { ENUM_KIND_OF_MESSAGE } from '../../../../../../libraries/Constants/KindOfMessage';
import { useState } from 'react';
import UploadImageScreen from '../../UploadImage/Views/UploadImageScreen';
import { buildFileSelector } from '../../../../../../libraries/Functions/BuildFileSelector';

const iconsmile = require('./Icons/iconsmile.svg').default;
const icongim = require('../../../../../../libraries/Icons/icongim.svg').default;
const iconsubstract = require('./Icons/iconsubstract.svg').default;
const iconcancel = require('../../../../../../libraries/Icons/iconcancel.svg').default;

const styleCustomInput = {
    backgroundImage:`url('${ iconsmile }')`,
    backgroundPosition:'99% 50%',
    padding:'10px 35px 10px 10px',
    borderRadius:'8px',
    fontSize:'14px',
}

function ChatInputScreen(props: any){
    const { responseMess } = props;

    const [pathFileList , setPathFileList] = useState<string[]>([]);
    const [hasImage , setHasImage] = useState<Boolean>(false);
    const [isMultilineText, setIsMultilineText] = useState<Boolean>(false);

    function cb (pathFileListTemp: string[]){
        setPathFileList(pathFileListTemp);
        setHasImage(true);
    }

    const fileSelector = buildFileSelector(true , cb)


    const handleFileSelect = (e: any) => {
        e.preventDefault();
        fileSelector.click();
    }

    const removePathFile = (pathFilez: string) =>{
        const list = pathFileList.filter(item => item !== pathFilez);
        setPathFileList(list);
        if(list.length === 0){
            setHasImage(false);
        }
    }

    const showContextResponseMess = (kindOfMess: number , context: string) =>{
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

    const classNameChatInput = () =>{
        const  containerClass = "chatinput-container";
        const extensionClass = "chatinput-extension";
        const hasResponseMessClass = "chatinput--hasresponseMess";
        const space = " ";
        let result = containerClass;

        if(responseMess.isActive || hasImage){
            result += space + extensionClass + space + hasResponseMessClass
        }else{
            if(isMultilineText){
                result += space + extensionClass 
            }
        }

        return result;
    } 
    return (
        <div className={ classNameChatInput() }>
            {
                responseMess.isActive && (
                    <div className="chatinput-responseMess">
                        <div>
                            <span className="app-mainfont">
                                Trả lời 
                                <span className="chatinput-responseMess-username"> { responseMess.name } </span>
                            </span>
                            <p className="chatinput-responseMess-context app-mainfont">
                                { showContextResponseMess(responseMess.kindOfMess , responseMess.context) }
                            </p>
                        </div>
                        <IconImageScreen src={ iconcancel } alt="gim" onClick={ props.unactiveResponseMess } class="chatinput-responseMess-icon-cancel"></IconImageScreen>
                    </div>
                )
            }
            {
                hasImage && (
                    <div className="chatinput-uploadimages">
                        {
                            pathFileList.map((pathFile: string , index: number) => <UploadImageScreen pathFile={ pathFile } class="" removePathFile={ removePathFile }></UploadImageScreen>)
                        }
                    </div>
                )
            }
            <div className="chatinput-main">
                <IconImageScreen src={ icongim } alt="gim" onClick={ handleFileSelect }></IconImageScreen>
                <CustomInputScreen placeHolder="Nhập nội dung bình luận" class="" style={ styleCustomInput } setIsMultiline={ setIsMultilineText } isMultiline={ true } isTextArea={ true }></CustomInputScreen>
                <IconImageScreen src={ iconsubstract } alt="send data"></IconImageScreen>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        responseMess: state.responseMess,
    }
}
  
const mapDispatchToProps = (dispatch: any) => {
    return {
        unactiveResponseMess: () => dispatch(unactiveResponseMess()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInputScreen)