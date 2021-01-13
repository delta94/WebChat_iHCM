import React from 'react';
import './NavDetailScreen.css';
import { INavDetail } from '../Models/NavDetail';
import { ENUM_KIND_OF_ICONPANEL } from '../../../../libraries/Constants/KindOfIconPanel';
import UserChatListScreen from '../../UserChatList/Main/Views/UserChatListScreen';
import NotificationScreen from '../../NotiList/Main/Views/NotificationListScreen';
import FriendListScreen from '../../FriendList/Main/Views/FriendListScreen';

function NavDetailScreen(props: INavDetail) {

  const { activedIcon } = props;
  const eleInfor = () =>{
    switch (activedIcon) {
      case ENUM_KIND_OF_ICONPANEL.MESSAGES:
        return <UserChatListScreen></UserChatListScreen>
      case ENUM_KIND_OF_ICONPANEL.FRIENDS:
        return <FriendListScreen></FriendListScreen>
      case ENUM_KIND_OF_ICONPANEL.NOTI:
        return <NotificationScreen></NotificationScreen>
    }
  }
  return (
    <div className="body-right-information">
      {
        eleInfor()
      }
    </div>
  );

}

export default NavDetailScreen;