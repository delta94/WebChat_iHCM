import React , { useRef , useEffect, Fragment, RefObject, HtmlHTMLAttributes, useCallback, useState} from 'react';
import CircleAvatarScreen from '../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import IconImageScreen from '../../../libraries/Features/IconImage/Views/IconImageScreen';
import './HeaderScreen.css';

const icon9dots = require('./Icons/icon9dots.svg').default;
const iconmain = require('./Icons/iconmain.svg').default;

function HeaderScreen(props : any) {
  const eleRef = useRef<HTMLDivElement>(null);


  return (
    <div className="header-container">
      <IconImageScreen src={ icon9dots } class="header-icon-9dots" alt="9 dots" onClick={ props.toggleNavbar }></IconImageScreen>
      <IconImageScreen src={ iconmain } class="header-icon-main" alt="9 dots" ></IconImageScreen>
      <div onClick={ () =>{props.togglePopup(eleRef)} } ref={ eleRef } className="header-icon-avatar">
        <CircleAvatarScreen 
          isOnline={false}
          src={"https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"}
          width={'36px'}
          height={'36px'}
          alt={"avatar"}
          class={""}
        ></CircleAvatarScreen>
      </div>

    </div>
  );
}

export default HeaderScreen;
