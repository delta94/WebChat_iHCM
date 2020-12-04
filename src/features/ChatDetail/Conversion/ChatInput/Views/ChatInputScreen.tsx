import React from 'react';
import CustomInputScreen from '../../../../../libraries/Features/CustomInput/Views/CustomInputScreen';
import IconImageScreen from '../../../../../libraries/Features/IconImage/Views/IconImageScreen';
import './ChatInputScreen.css';

const iconsmile = require('./Icons/iconsmile.svg').default;
const icongim = require('./Icons/icongim.svg').default;
const iconsubstract = require('./Icons/iconsubstract.svg').default;

const styleCustomInput = {
    backgroundImage:`url('${ iconsmile }')`,
    backgroundPosition:'99% 50%',
    padding:'10px',
    borderRadius:'8px',
    fontSize:'14px',
}
function ChatInputScreen(){
    return (
        <div className="chatinput-container">
            <IconImageScreen src={ icongim } alt="gim"></IconImageScreen>
            <CustomInputScreen placeHolder="Nhập nội dung bình luận" class="" style={ styleCustomInput }></CustomInputScreen>
            <IconImageScreen src={ iconsubstract } alt="send data"></IconImageScreen>
        </div>
    )
}

export default ChatInputScreen;