import React from "react";
import "./FriendScreen.css";
import CircleAvatarScreen from "../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen";
import { useHistory } from "react-router-dom";
import { useWindowSize } from "../../../../../libraries/Hooks/useWindowSize";
import { IFriend } from "../Models/Friend";

function FriendScreen(props: IFriend) {
  const history = useHistory();
  const [width, height] = useWindowSize();

  const redirectToChatDetail = () => {
    let kind = "personal";
    
    history.push(`/${kind}/${props.id}`);
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
      className={"userchat-container" }
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
            className={ "userchat-username app-mainfont userchat-unreadcontext" }
          >
            {props.name}
          </span>
        </div>
        <div className="userchat-context-bottom">
            <h3 className="userchat-contextoflastmess">
              {props.context}
            </h3>
          </div>
      </div>
    </div>
  );
}

export default FriendScreen;
