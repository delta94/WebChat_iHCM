import React from "react";
import { ENUM_KIND_OF_ICONPANEL } from "../../../Constants/KindOfIconPanel";
import { Skeleton } from "./LoadingSkeletons";
import './SkeletonNavbarDetailScreen.css';

function SkeletonNavbarDetailScreen(props: any) {
  const { iconpanel } = props;

  const showUserChatContext = () => {
    if(iconpanel === ENUM_KIND_OF_ICONPANEL.NOTI){
      return (
        <div>
          <div className="notification-context2">
            <Skeleton borderRadius={25} />
          </div>
          <span className="notification-time2">
            <Skeleton borderRadius={25} />
          </span>
        </div>
      )
    } else{
      return (
        <>
          <div className="userchat-context-top">
            <span className={ "userchat-username2" }>
              <Skeleton borderRadius={25} />
            </span>
            {
              iconpanel === ENUM_KIND_OF_ICONPANEL.MESSAGES && (
                <>
                  <span className="userchat-groupchat2">
                    <Skeleton borderRadius={25} />
                  </span>
                  <span className="userchat-timeoflastmess2">
                    <Skeleton borderRadius={25} />
                  </span>
                </>
              )
            }
          </div>
          <div className="userchat-context-bottom">
            <h3 className="userchat-contextoflastmess">
              <Skeleton borderRadius={25} />
            </h3>
            {
              iconpanel === ENUM_KIND_OF_ICONPANEL.MESSAGES && (
                <div className="userchat-icon-unread2">
                  <Skeleton borderRadius={25} />
                </div>
              )
            }
          </div>
        </>
      ) 
    }
  }

  return (
    <div className={iconpanel === ENUM_KIND_OF_ICONPANEL.NOTI ? "userchat-container notification-container" : "userchat-container" }>
      <div className="userchat-image2">
        <Skeleton borderRadius={25} />
      </div>
      <div className="userchat-context">
        {
          showUserChatContext()
        }
      </div>
    </div>
);
  
}

export default SkeletonNavbarDetailScreen;

