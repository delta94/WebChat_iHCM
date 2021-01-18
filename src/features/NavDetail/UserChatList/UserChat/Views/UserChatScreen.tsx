import React from "react";
import "./UserChatScreen.css";
import CircleAvatarScreen from "../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen";
import { IConversationState } from "../../../../../redux/Reducers/ConversationList.reducer";
import { useHistory } from "react-router-dom";
import CustomBadgeScreen from "../../../../../libraries/Features/CustomBadge/Views/CustomBadgeScreen";
import { useWindowSize } from "../../../../../libraries/Hooks/useWindowSize";

const iconunread = require("./Icons/iconunread.svg").default;

function UserChatScreen(props: IConversationState) {
  const history = useHistory();
  const [width, height] = useWindowSize();

  const redirectToChatDetail = () => {
    let kind = "personal";
    if (props.isGroup) {
      kind = "group";
    }
    history.push(`/${kind}/${props.id}`);

    props.setIsActive(props.isGroup, props.id);
  };

  const renderUserImage = () => {
    let widthAva="48px";
    let heightAva="48px";
    if (width < 768) {
      widthAva="40px";
      heightAva="40px";
    }
    return (
      <CircleAvatarScreen
        class=""
        width={ widthAva }
        height={ heightAva }
        src={props.avatar}
        alt="avatar"
        isOnline={props.isOnline}
      />
    );
  };

  return (
    <div
      className={
        props.isActive
          ? "userchat-container userchat-container-active"
          : "userchat-container"
      }
      onClick={redirectToChatDetail}
    >
      <div className="userchat-image">
        {
          renderUserImage()
        }
      </div>
      <div className="userchat-context">
        <div className="userchat-context-top">
          <span
            className={
              props.hasReadLastMess
                ? "userchat-username app-mainfont"
                : "userchat-username app-mainfont userchat-unreadcontext"
            }
          >
            {props.name}
          </span>
          {props.isGroup && (
            <CustomBadgeScreen
              text="Nhóm"
              class="userchat-groupchat"
            ></CustomBadgeScreen>
          )}
          <span className="userchat-timeoflastmess app-mainfont">
            {props.timeToReadLastMess}
          </span>
        </div>
        {props.hasReadLastMess ? (
          <div className="userchat-context-bottom">
            <h4 className="userchat-contextoflastmess">{ props.lastMess }</h4>
          </div>
        ) : (
          <div className="userchat-context-bottom">
            <h4 className="userchat-contextoflastmess userchat-unreadcontext">
              {props.lastMess}
            </h4>
            <img src={iconunread} className="userchat-icon-unread" alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default UserChatScreen;
