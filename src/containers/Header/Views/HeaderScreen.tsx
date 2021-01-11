import React , { useEffect } from 'react';
import CircleAvatarScreen from '../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import IconImageScreen from '../../../libraries/Features/IconImage/Views/IconImageScreen';
import DetailPopupScreen from '../../../libraries/Features/Popup/DetailPopup/Views/DetailPopupScreen';
import MainPopupScreen from '../../../libraries/Features/Popup/MainPopup/Views/MainPopupScreen';
import './HeaderScreen.css';
import { connect } from "react-redux";
import { getCurrentUser } from '../../../redux/Actions/CurrentUser.action';

const iconnoti = require('./Icons/iconnoti.svg').default;
const iconquestion = require('./Icons/iconquestion.svg').default;
const iconprofile = require('./Icons/iconprofile.svg').default;
const iconlogout = require('./Icons/iconlogout.svg').default;
const icon9dots = require('./Icons/icon9dots.svg').default;
const iconmain = require('./Icons/iconmain.svg').default;

function HeaderScreen(props : any) {

  const { currentUser } = props;

  useEffect(() => {
    const id = 2;
    props.getCurrentUser(id);
    return () => { 
    }
  }, [])

  const listEles = [
    {
        onClick: null,
        icon: iconnoti,
        text: "Cài đặt thông báo"
    },
    {
        onClick: null,
        icon: iconprofile,
        text: "Hồ sơ của tôi"
    },
    {
        onClick: null,
        icon: iconquestion,
        text: "Trợ giúp"
    },
    {
        onClick: null,
        icon: iconlogout,
        text: "Đăng xuất"
    },
  ];

  const eleHeader = (
    <div className="detailpopup-header">
      <CircleAvatarScreen 
        isOnline={false}
        src={currentUser.avatar}
        width={'36px'}
        height={'36px'}
        alt={"avatar"}
        class={""}
      ></CircleAvatarScreen>
      <div className="detailpopup-header-right app-mainfont">
        <p>
          {
            currentUser.name
          }
        </p>
        <span>
          {
            currentUser.description
          }
        </span>
      </div>
    </div>
  )

  const eleDetailPopup = <DetailPopupScreen listEles={ listEles } eleHeader={ eleHeader }></DetailPopupScreen>;

  return (
    <div className="header-container">
      <IconImageScreen src={ icon9dots } class="header-icon-9dots" alt="9 dots"></IconImageScreen>
      <IconImageScreen src={ iconmain } class="header-icon-main" alt="9 dots" ></IconImageScreen>
      <div className="header-icon-avatar">
      <MainPopupScreen context={ eleDetailPopup }>
        <div>
        <CircleAvatarScreen 
            isOnline={false}
            src={"https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"}
            width={'36px'}
            height={'36px'}
            alt={"avatar"}
            class={""}
            hasCursor={ true }
          ></CircleAvatarScreen>
        </div>

      </MainPopupScreen>
      </div>

    </div>
  );
}
const mapStateToProps = (state: any) => {
  return {
    currentUser: state.currentUser,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getCurrentUser: (id: number) => dispatch(getCurrentUser(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderScreen)

