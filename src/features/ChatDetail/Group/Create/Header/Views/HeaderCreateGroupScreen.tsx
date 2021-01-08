import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CustomInputScreen from '../../../../../../libraries/Features/CustomInput/Views/CustomInputScreen';
import IconCirclePanel from '../../../../../../libraries/Features/IconCirclePanel/Views/IconCirclePanelScreen';
import { buildFileSelector } from '../../../../../../libraries/Functions/BuildFileSelector';
import './HeaderCreateGroupScreen.css';

const iconleftarrow = require("../../../../../../libraries/Icons/iconleftarrow.svg").default;
const iconwhiteaddavatar = require("../../../../../../libraries/Icons/iconwhiteaddavatar.svg").default;
const iconaddavatar = require("./Icons/iconaddavatar.svg").default;

const styleCustomInput = {
    padding:'10px 55px 10px 10px',
    borderRadius:'8px',
    fontSize:'14px',
}

function HeaderCreateGroupScreen() {
    const history = useHistory();
    const [pathFileList , setPathFileList] = useState<string[]>([]);
    const [hasHover , setHasHover] = useState<boolean>(false);
    
    function cb (pathFileListTemp: string[]){
        setPathFileList(pathFileListTemp);
        setHasHover(true);
    }

    const fileSelector = buildFileSelector(false , cb);

    const handleFileSelect = (e: any) => {
        e.preventDefault();
        fileSelector.click();
    }

    const redirectToConversation = () =>{
      history.goBack();
    }

    const srcIcon = pathFileList.length > 0 ? pathFileList[0] : iconaddavatar;
    return (
        <div className="headercreategroup-container app-mainfont">
            <div className="headerconversationdetail-back">
                <div onClick={ redirectToConversation }>
                    <img src={ iconleftarrow } alt="" ></img>
                    <span>Quay lại</span>
                </div>
            </div>
            <h4>Tạo nhóm trò chuyện</h4>
            <div className="headercreategroup-addavatarandname">
                <div className="headercreategroup-addedavatar">
                    <IconCirclePanel 
                    srcIcon={ srcIcon } 
                    width="60px" 
                    height="60px" 
                    padding={ pathFileList.length > 0 ? "" : "1rem" } 
                    class={ "" } 
                    onClick={ handleFileSelect }
                    ></IconCirclePanel>
                    {
                        hasHover && (
                            <div className="headercreategroup-hoveraddedavatar" onClick={ handleFileSelect }>
                                <img src={ iconwhiteaddavatar } alt=""/>
                            </div>
                        )
                    }
                </div>
                
                <CustomInputScreen 
                placeHolder="Nhập tên nhóm trò chuyện" 
                class="" 
                style={ styleCustomInput } 
                isTextArea={ true }
                isMultiline={ false }></CustomInputScreen>
            </div>
        </div>
    );
}

export default HeaderCreateGroupScreen;
