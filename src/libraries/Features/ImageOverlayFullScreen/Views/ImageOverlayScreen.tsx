import React, { useEffect, useState } from 'react';
import { IImageOverlay, IMiniImage } from '../Models/ImageOverlay';
import './ImageOverlayScreen.css';

const iconwhitecancel = require("../../../Icons/iconwhitecancel.svg").default;
const iconwhitedownload = require("../../../Icons/iconwhitedownload.svg").default;
const iconleftarrow = require("../../../Icons/iconleftarrow2.svg").default;
const iconrightarrow = require("../../../Icons/iconrightarrow2.svg").default;

// const FileSaver = require('file-saver');


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
    const [amountOfMiniImages , setAmountOfMiniImages] = useState<number>(12);
    const [numPage , setNumPage] = useState<number>(1);
    const [mainImage , setMainImage] = useState<IMiniImage>({
        id:-1,
        author:"",
        srcImage:"",
    })

    const { miniImageList , mainMiniImage } = props;


    useEffect(() =>{
        setMainImage(mainMiniImage);

    },[mainMiniImage])

    useEffect(() =>{
        resizeByScreen();
    },[])

    useEffect(() =>{
        window.addEventListener('resize', resizeByScreen);

        return () => window.removeEventListener('resize', resizeByScreen);
    },[])

    useEffect(() =>{
        window.addEventListener('keydown', setMiniImageByKeyBoardEvent);

        return () => window.removeEventListener('keydown', setMiniImageByKeyBoardEvent);
    })

    const resizeByScreen = () =>{
        const windowWidth = window.innerWidth;
        if(windowWidth <= 1024){
            setAmountOfMiniImages(5)
        } else{
            setAmountOfMiniImages(12)
        }
    }

    const setMiniImageByKeyBoardEvent = (e: KeyboardEvent) =>{
        if(e.keyCode === 37){
            setMiniImage(true)
        }else if(e.keyCode === 39){
            setMiniImage(false)
        }
    } 

    const setMiniImage = (isPrev : boolean) =>{
        if(mainImage.id){
            let tempid = 0;
            if(isPrev){
                tempid = mainImage.id - 1;
                tempid < (numPage - 1) * amountOfMiniImages && setNumPage(prev => prev - 1);
            } else{
                tempid = mainImage.id + 1;
                tempid > numPage * amountOfMiniImages && setNumPage(prev => prev + 1);
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
        var link = document.createElement("a");
        // If you don't know the name or want to use
        // the webserver default set name = ''
        link.setAttribute('download', "123");
        link.href = mainImage.srcImage;
        document.body.appendChild(link);
        link.click();
        link.remove();
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
                        <div></div>
                    </div>
                )
            }
            {
                mainImage.id < miniImageList[miniImageList.length - 1].id && (
                    <div className="imageoverlay-rightarrow imageoverlay-arrow"  onClick={ () =>{ setMiniImage(false) } }>
                        <img src={ iconrightarrow } alt="" />
                        <div></div>
                    </div>
                )
            }

            <img alt="" className="imageoverlay-mainimage" src={ mainImage.srcImage && mainImage.srcImage }></img>
            
            <div className="imageoverlay-miniimages">
                {
                    miniImageList.map((miniImage:IMiniImage , index:number) =>(
                        (index + 1 > (numPage - 1) * amountOfMiniImages && index + 1 <= numPage * amountOfMiniImages) && <img alt="" src={ miniImage.srcImage } key={ index } onClick={ () =>{ setMainImage(miniImage) }} className={ mainImage.id === miniImage.id ? "imageoverlay-miniimage--active" : ""}></img>
                    ))
                }
            </div>
        </div>
  );
}

export default ImageOverlayScreen;
