import React from 'react';
import IconImageScreen from '../../../../../../../libraries/Features/IconImage/Views/IconImageScreen';
import { IFileChat } from '../Models/FileChat';
import './FileChatScreen.css';

const iconlink = require('./Icons/iconlink.svg').default;
const icondownload = require('./Icons/icondownload.svg').default;
const iconnavigation = require('./Icons/iconnavigation.svg').default;
const icongim = require('../../../../../../../libraries/Icons/icongim.svg').default;

function FileChatScreen(props : IFileChat){
    return (
        <div className="filechat-container">
            <IconImageScreen src={ props.isFile ? icongim : iconlink } alt="link" class=""></IconImageScreen>
            <div className="filechat-context">
                <h5 className="app-mainfont">
                    { props.context }
                </h5>
                <div className="app-mainfont">
                    5678kb
                </div>
            </div>
            <div className="filechat-iconbutton">
            <IconImageScreen src={ props.isFile ? icondownload : iconnavigation } alt="link" class=""></IconImageScreen>
            </div>
        </div>
    )
}

export default FileChatScreen;