import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ENUM_KIND_OF_CONVERSATIONDETAIL } from '../../../../../libraries/Constants/KindOfConversationDetail';
import IconCirclePanel from '../../../../../libraries/Features/IconCirclePanel/Views/IconCirclePanelScreen';
import { IMiniImage } from '../../../../../libraries/Features/ImageOverlayFullScreen/Models/ImageOverlay';
import ImageOverlayScreen from '../../../../../libraries/Features/ImageOverlayFullScreen/Views/ImageOverlayScreen';
import FileChatScreen from '../../../Conversation/ChatList/ContextChat/FileChat/Views/FileChatScreen';
import { IBodyConversationDetail } from '../../../ConversationDetail/Body/Models/BodyConversationDetail';
import { IHeaderConversationDetail } from '../../../ConversationDetail/Header/Models/HeaderConversationDetail';
import ConversationDetailScreen from '../../../ConversationDetail/Main/Views/ConversationDetailScreen';
import './PersonalDetailScreen.css';


const iconvideocall = require("../../../../../libraries/Icons/iconvideocall.svg").default;
const iconbrownnoti = require("../../../../../libraries/Icons/iconbrownnoti.svg").default;
const iconturnoffnoti = require("../../../../../libraries/Icons/iconturnoffnoti.svg").default;
const iconbrownmessage = require("../../../../../libraries/Icons/iconbrownmessage.svg").default;
const iconsearch = require("../../../../../libraries/Icons/iconsearch.svg").default;

const miniImageList :IMiniImage[] =[
  {
      index:1,
      author:"Trung Đức",
      srcImage:"https://i.pinimg.com/736x/26/da/78/26da780891a603e8f9793810350ac13a.jpg",
  },
  {
      index:2,
      author:"Chi Chi",
      srcImage:"https://external-preview.redd.it/LRmT8yJPpoqGulM3_Js5IskqmxqPwgb196NFUtX08oY.jpg?auto=webp&s=8cafc04e8600b49eee044ec92d833b986e2c33d9",
  },
  {
      index:3,
      author:"Chi Chi",
      srcImage:"https://external-preview.redd.it/LRmT8yJPpoqGulM3_Js5IskqmxqPwgb196NFUtX08oY.jpg?auto=webp&s=8cafc04e8600b49eee044ec92d833b986e2c33d9",
  },
  {
      index:4,
      author:"Chi Chi1",
      srcImage:"https://external-preview.redd.it/LRmT8yJPpoqGulM3_Js5IskqmxqPwgb196NFUtX08oY.jpg?auto=webp&s=8cafc04e8600b49eee044ec92d833b986e2c33d9",
  },
  {
      index:5,
      author:"Chi Chi1",
      srcImage:"https://external-preview.redd.it/LRmT8yJPpoqGulM3_Js5IskqmxqPwgb196NFUtX08oY.jpg?auto=webp&s=8cafc04e8600b49eee044ec92d833b986e2c33d9",
  },
  {
      index:6,
      author:"Chi Chi3",
      srcImage:"https://external-preview.redd.it/LRmT8yJPpoqGulM3_Js5IskqmxqPwgb196NFUtX08oY.jpg?auto=webp&s=8cafc04e8600b49eee044ec92d833b986e2c33d9",
  },
  {
      index:7,
      author:"Chi Chi3",
      srcImage:"https://external-preview.redd.it/LRmT8yJPpoqGulM3_Js5IskqmxqPwgb196NFUtX08oY.jpg?auto=webp&s=8cafc04e8600b49eee044ec92d833b986e2c33d9",
  },
  {
      index:8,
      author:"Chi Chi3",
      srcImage:"https://wallpaperaccess.com/full/629735.jpg",
  },
  {
      index:9,
      author:"Chi Chi4",
      srcImage:"https://wallpaperaccess.com/full/629735.jpg",
  },
  {
      index:10,
      author:"Chi Chi5",
      srcImage:"https://wallpaperaccess.com/full/629735.jpg",
  },
  {
      index:11,
      author:"Chi Chi5",
      srcImage:"https://wallpaperaccess.com/full/629735.jpg",
  },
  {
      index:12,
      author:"Chi Chi55",
      srcImage:"https://wallpaperaccess.com/full/629735.jpg",
  },
  {
      index:13,
      author:"Chi Chi556",
      srcImage:"https://wallpaperaccess.com/full/629735.jpg",
  },
  {
      index:14,
      author:"Chi Chi556",
      srcImage:"https://wallpaperaccess.com/full/629735.jpg",
  },
]


function PersonalDetailScreen(props : any) {
    const [activeLi , setActiveLi] = useState<number>(ENUM_KIND_OF_CONVERSATIONDETAIL.IMAGE);
    const [isOpenOverlay , setIsOpenOverlay] = useState<boolean>(false);
    const [iconnoti , setIconnoti] = useState(iconbrownnoti);
    const [mainImage , setMainImage] = useState<IMiniImage>({
      index:-1,
      author:"",
      srcImage:"",
    })

    const closeImageOverlayByEscKey = (e: KeyboardEvent) =>{
      if(e.keyCode === 27){
        setIsOpenOverlay(false);
      }
    }

    useEffect(() =>{
      window.addEventListener('keydown', closeImageOverlayByEscKey );

      return() =>{
        window.removeEventListener('keydown', closeImageOverlayByEscKey );
      }
    })
    
    const toggleOverlay = (miniImage: IMiniImage) =>{
      setIsOpenOverlay(prev => !prev);
      setMainImage(miniImage);
    }

    const toggleNoti = ()=>{
      if(iconnoti === iconbrownnoti){
        setIconnoti(iconturnoffnoti)
      } else{
        setIconnoti(iconbrownnoti)
      }
    }

    const onChangeActiveLi = (num: number) =>{
        setActiveLi(num);
    }

    const showMainBody = () =>{
        switch (activeLi) {
          case ENUM_KIND_OF_CONVERSATIONDETAIL.IMAGE:
            return (
              <div className="bodyconversationdetail-main-body-image bodyconversationdetail-main-body-tab">
              {
                miniImageList.map((miniImage: IMiniImage , index: number) => (
                  <img alt="" onClick={ () =>{ toggleOverlay(miniImage) } } src={ miniImage.srcImage } key={ index }></img>
                ))
              }
              </div>
            )
          case ENUM_KIND_OF_CONVERSATIONDETAIL.FILE:
            return (
              <div className="bodyconversationdetail-main-body-fileandlink bodyconversationdetail-main-body-tab">
                <FileChatScreen isFile={ true } isCurrent={ true } context="https://morioh.com/p/b82afe6648dd" datetime=""></FileChatScreen>
                <FileChatScreen isFile={ true } isCurrent={ true } context="https://morioh.com/p/b82afe6648dd" datetime=""></FileChatScreen>
                <FileChatScreen isFile={ true } isCurrent={ true } context="https://morioh.com/p/b82afe6648dd" datetime=""></FileChatScreen>
                <FileChatScreen isFile={ true } isCurrent={ true } context="https://morioh.com/p/b82afe6648dd" datetime=""></FileChatScreen>
                <FileChatScreen isFile={ true } isCurrent={ true } context="https://morioh.com/p/b82afe6648dd" datetime=""></FileChatScreen>
                <FileChatScreen isFile={ true } isCurrent={ true } context="https://morioh.com/p/b82afe6648dd" datetime=""></FileChatScreen>
                <FileChatScreen isFile={ true } isCurrent={ true } context="https://morioh.com/p/b82afe6648dd" datetime=""></FileChatScreen>
                <FileChatScreen isFile={ true } isCurrent={ true } context="https://morioh.com/p/b82afe6648dd" datetime=""></FileChatScreen>
                <FileChatScreen isFile={ true } isCurrent={ true } context="https://morioh.com/p/b82afe6648dd" datetime=""></FileChatScreen>          
                <FileChatScreen isFile={ true } isCurrent={ true } context="https://morioh.com/p/b82afe6648dd" datetime=""></FileChatScreen>          
              </div>
            )
          case ENUM_KIND_OF_CONVERSATIONDETAIL.LINK:
            return (
              <div className="bodyconversationdetail-main-body-fileandlink bodyconversationdetail-main-body-tab">
                <FileChatScreen isFile={ false } isCurrent={ true } context="https://morioh.com/p/b82afe6648dd" datetime=""></FileChatScreen>
              </div>
            )
        
          default:
            break;
        }
    }

    const eleUl = (
        <ul className="bodyconversationdetail-main-header-li--small">
          <li 
          className={ activeLi === ENUM_KIND_OF_CONVERSATIONDETAIL.IMAGE ? "bodyconversationdetail-main-header-li--active" : "" } 
          onClick={ () => { onChangeActiveLi(ENUM_KIND_OF_CONVERSATIONDETAIL.IMAGE) } }
          >
          Hình ảnh
          </li>

          <li 
          className={ activeLi === ENUM_KIND_OF_CONVERSATIONDETAIL.FILE ? "bodyconversationdetail-main-header-li--active" : "" } 
          onClick={ () => { onChangeActiveLi(ENUM_KIND_OF_CONVERSATIONDETAIL.FILE) } }
          >
          Tài liệu
          </li>
          <li 
          className={ activeLi === ENUM_KIND_OF_CONVERSATIONDETAIL.LINK ? "bodyconversationdetail-main-header-li--active" : "" } 
          onClick={ () => { onChangeActiveLi(ENUM_KIND_OF_CONVERSATIONDETAIL.LINK) } }
          >
          Link
          </li>
      </ul>
    )

    const body:IBodyConversationDetail = {
        showMainBody: showMainBody,
        eleUl: eleUl
    }

    const eleOption: React.ReactElement = (
        <>
            <div>
                <IconCirclePanel srcIcon={ iconbrownmessage } class="" padding="0.8rem"></IconCirclePanel>
                <p>Tin nhắn</p>
            </div>
            <div>
                <IconCirclePanel srcIcon={ iconvideocall } class="" padding="0.8rem"></IconCirclePanel>
                <p>Gọi video</p>
            </div>
            <div>
              <IconCirclePanel srcIcon={ iconnoti } class="" padding="0.8rem" onClick={ toggleNoti }></IconCirclePanel>
              <p>Thông báo</p>
            </div>
        </>
    );

    const eleSearch: React.ReactElement = (
      <img src={ iconsearch } alt=""/>
    );

    const header:IHeaderConversationDetail = {
        name: "Trung Đức",
        title: "iSoft",
        srcImage: "https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg",
        eleOption: eleOption,
        eleSearch: eleSearch,
    }

    return (
      <>
        <ConversationDetailScreen header={ header } body={ body }></ConversationDetailScreen>
        {
          isOpenOverlay && ( <ImageOverlayScreen close={ toggleOverlay } miniImageList ={ miniImageList } mainMiniImage={ mainImage }></ImageOverlayScreen> )
        }
      </>
    );
}

export default PersonalDetailScreen;
