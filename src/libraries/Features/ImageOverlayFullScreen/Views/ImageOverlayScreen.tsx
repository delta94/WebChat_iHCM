import React, { useEffect, useState } from 'react';
import { IImageOverlay, IMiniImage } from '../Models/ImageOverlay';
import './ImageOverlayScreen.css';

const iconwhitecancel = require("../../../Icons/iconwhitecancel.svg").default;
const iconwhitedownload = require("../../../Icons/iconwhitedownload.svg").default;
const iconleftarrow = require("../../../Icons/iconleftarrow2.svg").default;
const iconrightarrow = require("../../../Icons/iconrightarrow2.svg").default;

// const miniImageList :IMiniImage[] =[
//     {
//         id:1,
//         author:"Trung Đức",
//         srcImage:"https://i.pinimg.com/736x/26/da/78/26da780891a603e8f9793810350ac13a.jpg",
//     },
//     {
//         id:2,
//         author:"Chi Chi",
//         srcImage:"https://external-preview.redd.it/LRmT8yJPpoqGulM3_Js5IskqmxqPwgb196NFUtX08oY.jpg?auto=webp&s=8cafc04e8600b49eee044ec92d833b986e2c33d9",
//     },
//     {
//         id:3,
//         author:"Chi Chi",
//         srcImage:"https://external-preview.redd.it/LRmT8yJPpoqGulM3_Js5IskqmxqPwgb196NFUtX08oY.jpg?auto=webp&s=8cafc04e8600b49eee044ec92d833b986e2c33d9",
//     },
//     {
//         id:4,
//         author:"Chi Chi1",
//         srcImage:"https://external-preview.redd.it/LRmT8yJPpoqGulM3_Js5IskqmxqPwgb196NFUtX08oY.jpg?auto=webp&s=8cafc04e8600b49eee044ec92d833b986e2c33d9",
//     },
//     {
//         id:5,
//         author:"Chi Chi1",
//         srcImage:"https://external-preview.redd.it/LRmT8yJPpoqGulM3_Js5IskqmxqPwgb196NFUtX08oY.jpg?auto=webp&s=8cafc04e8600b49eee044ec92d833b986e2c33d9",
//     },
//     {
//         id:6,
//         author:"Chi Chi3",
//         srcImage:"https://external-preview.redd.it/LRmT8yJPpoqGulM3_Js5IskqmxqPwgb196NFUtX08oY.jpg?auto=webp&s=8cafc04e8600b49eee044ec92d833b986e2c33d9",
//     },
//     {
//         id:7,
//         author:"Chi Chi3",
//         srcImage:"https://external-preview.redd.it/LRmT8yJPpoqGulM3_Js5IskqmxqPwgb196NFUtX08oY.jpg?auto=webp&s=8cafc04e8600b49eee044ec92d833b986e2c33d9",
//     },
//     {
//         id:8,
//         author:"Chi Chi3",
//         srcImage:"https://wallpaperaccess.com/full/629735.jpg",
//     },
//     {
//         id:9,
//         author:"Chi Chi4",
//         srcImage:"https://wallpaperaccess.com/full/629735.jpg",
//     },
//     {
//         id:10,
//         author:"Chi Chi5",
//         srcImage:"https://wallpaperaccess.com/full/629735.jpg",
//     },
//     {
//         id:11,
//         author:"Chi Chi5",
//         srcImage:"https://wallpaperaccess.com/full/629735.jpg",
//     },
//     {
//         id:12,
//         author:"Chi Chi55",
//         srcImage:"https://wallpaperaccess.com/full/629735.jpg",
//     },
//     {
//         id:13,
//         author:"Chi Chi556",
//         srcImage:"https://wallpaperaccess.com/full/629735.jpg",
//     },
// ]

function ImageOverlayScreen(props : IImageOverlay) {
    const [mainImage , setMainImage] = useState<IMiniImage>({
        id:-1,
        author:"",
        srcImage:"",
    })

    const { miniImageList , mainMiniImage } = props;

    useEffect(() =>{
        setMainImage(mainMiniImage)
    },[])

    const setMiniImage = (isPrev : boolean) =>{
        if(mainImage.id){
            let tempid = 0;
            if(isPrev){
                tempid = mainImage.id - 1;
            } else{
                tempid = mainImage.id + 1;
            }

            const tempMiniImage: IMiniImage = miniImageList.find((miniImage: IMiniImage) => miniImage.id === tempid) || {
                id:-1,
                author:"",
                srcImage:"",
            };
            
            tempMiniImage.id !== -1 && setMainImage(tempMiniImage)
        }
    }

    const downloadImage = () =>{
        // const  link = document.createElement("a");
        // link.download = "";
        // link.href = mainImage.srcImage;
        // link.click();
        window.open(mainImage.srcImage, '_self');
    }
 
    return (
        <div className="imageoverlay-container">
            <h4 className="imageoverlay-nameauthor app-mainfont">
                {
                    mainImage.author && mainImage.author
                }
            </h4>
            <img src={ iconwhitecancel } alt="" className="imageoverlay-cancel" onClick={ props.close }/>
            <img src={ iconwhitedownload } alt="" className="imageoverlay-download" onClick={ downloadImage }/>
            {
                mainImage.id > 1 && (
                    <div className="imageoverlay-leftarrow imageoverlay-arrow" onClick={ () =>{ setMiniImage(true) } }>
                        <img src={ iconleftarrow } alt="" />
                    </div>
                )
            }
            {
                mainImage.id < miniImageList[miniImageList.length - 1].id && (
                    <div className="imageoverlay-rightarrow imageoverlay-arrow"  onClick={ () =>{ setMiniImage(false) } }>
                        <img src={ iconrightarrow } alt="" />
                    </div>
                )
            }

            <img alt="" className="imageoverlay-mainimage" src={ mainImage.srcImage && mainImage.srcImage }></img>
            
            <div className="imageoverlay-miniimages">
                {
                    miniImageList.map((miniImage:IMiniImage , index:number) =>(
                        <img alt="" src={ miniImage.srcImage } onClick={ () =>{ setMainImage(miniImage) }} className={ mainImage.id === miniImage.id ? "imageoverlay-miniimage--active" : ""}></img>
                    ))
                }
            </div>
        </div>
  );
}

export default ImageOverlayScreen;
