import React, { useEffect } from 'react';
import IconImageScreen from '../../../../../../../libraries/Features/IconImage/Views/IconImageScreen';
import { IFileChat } from '../Models/FileChat';
import './FileChatScreen.css';
import {getLinkPreview} from 'link-preview-js';

const iconlink = require('./Icons/iconlink.svg').default;
const icondownload = require('./Icons/icondownload.svg').default;
const iconnavigation = require('./Icons/iconnavigation.svg').default;
const icongim = require('../../../../../../../libraries/Icons/icongim.svg').default;

function FileChatScreen(props : IFileChat){

    const redirectWeb = (link: string) =>{
        window.open(
            link,
            '_blank' // <- This is what makes it open in a new window.
          );
    }

    // useEffect(() =>{
    //     (() => {
    //         getLinkPreview('https://www.youtube.com/watch?v=MejbOFk7H6c')
    //         .then((data) => console.debug(data));
    //     })();
    // })



    return (
        <div className="filechat-container">
            <IconImageScreen src={ props.isFile ? icongim : iconlink } alt="link" class=""></IconImageScreen>
            <div className="filechat-maincontext">
                <div className="filechat-context">
                    <h5 className="app-mainfont">
                        <a href={ props.context } target="_blank">
                            { props.context }
                        </a>
                    </h5>
                    <div className="app-mainfont">
                        <h5>5678kb</h5>
                    </div>
                </div>
                <div className="filechat-iconbutton">
                    <IconImageScreen 
                    src={ props.isFile ? icondownload : iconnavigation } 
                    alt="link" 
                    class=""
                    onClick={ () =>{ redirectWeb(props.context)} }
                    ></IconImageScreen>
                </div>
            </div>

        </div>
    )
}

export default FileChatScreen;