import React from 'react';
import { getListLinkImages , IImageChat } from '../Models/ImageChat';
import './ImageChatScreen.css';

function ImageChatScreen(props : IImageChat){
    const listLinkImages = getListLinkImages(props.context);

    const showImages = () =>{
        return listLinkImages.map((linkImage: string , index: number) =>{
            return <img src={linkImage} alt="image" key={index}></img>
        })
    }

    return (
        <div className={ props.isCurrent ? "imagechat-container imagechat-current" : "imagechat-container"}>
            {
                showImages()
            }
        </div>
    )
}

export default ImageChatScreen;