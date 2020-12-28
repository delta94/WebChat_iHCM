import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CustomInputScreen from '../../../../../../libraries/Features/CustomInput/Views/CustomInputScreen';
import IconCirclePanel from '../../../../../../libraries/Features/IconCirclePanel/Views/IconCirclePanelScreen';
import { buildFileSelector } from '../../../../../../libraries/Functions/BuildFileSelector';
import './HeaderCreateGroupScreen.css';

const iconleftarrow = require("../../../../../../libraries/Icons/iconleftarrow.svg").default;
const iconaddavatar = require("./Icons/iconaddavatar.svg").default;

const styleCustomInput = {
    padding:'10px 55px 10px 10px',
    borderRadius:'8px',
    fontSize:'14px',
}

function HeaderCreateGroupScreen() {
    const history = useHistory();
    const [pathFileList , setPathFileList] = useState<string[]>([]);
    
    function cb (pathFileListTemp: string[]){
        setPathFileList(pathFileListTemp);
    }

    const fileSelector = buildFileSelector(false , cb);

    const handleFileSelect = (e: any) => {
        e.preventDefault();
        fileSelector.click();
    }

    const redirectToConversation = () =>{
      history.push("/");
    }

    const srcIcon = pathFileList.length > 0 ? pathFileList[0] : iconaddavatar;
    return (
        <div className="headercreategroup-container app-mainfont">
            <div className="headerdetailconversation-back">
                <div onClick={ redirectToConversation }>
                    <img src={ iconleftarrow } alt="" ></img>
                    Quay lại
                </div>
            </div>
            <h4>Tạo nhóm trò chuyện</h4>
            <div className="headercreategroup-addavatarandname">
                <IconCirclePanel 
                srcIcon={ srcIcon } 
                width="60px" 
                height="60px" 
                padding={ pathFileList.length > 0 ? "" : "1rem" } 
                class={ pathFileList.length > 0 ? "headercreategroup-addedavatar" : "" } 
                onClick={ handleFileSelect }

                ></IconCirclePanel>
                <CustomInputScreen 
                placeHolder="Nhập tên nhóm trò chuyện" 
                class="" 
                style={ styleCustomInput } 
                isMultiline={ false }></CustomInputScreen>
            </div>
        </div>
    );
}

export default HeaderCreateGroupScreen;
