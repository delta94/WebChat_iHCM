import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CircleAvatarScreen from '../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import IconCirclePanel from '../../../../../libraries/Features/IconCirclePanel/Views/IconCirclePanelScreen';
import './HeaderDetailConversationScreen.css';

const iconleftarrow = require("../../../../../libraries/Icons/iconleftarrow.svg").default;
const iconsearch = require("../../../../../libraries/Icons/iconsearch.svg").default;
const iconbrownnoti = require("../../../../../libraries/Icons/iconbrownnoti.svg").default;
const iconvideocall = require("../../../../../libraries/Icons/iconvideocall.svg").default;
const iconbrownmessage = require("../../../../../libraries/Icons/iconbrownmessage.svg").default;

function HeaderDetailConversationScreen(props : any) {
  let { id } : any = useParams();
  const history = useHistory();

  const redirectToConversation = () =>{
    history.push("/");
  }

  return (
    <div className="headerdetailconversation-container app-mainfont">
      <div className="headerdetailconversation-top">
        <div className="headerdetailconversation-back">
          <div onClick={ redirectToConversation }>
            <img src={ iconleftarrow } alt="" ></img>
            Quay lại
          </div>
        </div>
        <div>
          <img src={ iconsearch } alt="" ></img>
        </div>
      </div>
      <div className="headerdetailconversation-avatar">
          <h4>Quang Huy</h4>
          <span>iSoft</span>
          <CircleAvatarScreen
            src={"https://cactusthemes.com/blog/wp-content/uploads/2018/01/tt_avatar_small.jpg"}
            width={"75px"}
            height={"75px"}
            isOnline={false}
            class={"headerdetailconversation-avatar-image"}
            alt={""}
          ></CircleAvatarScreen>
          <div className="headerdetailconversation-option">
            <IconCirclePanel srcIcon={ iconbrownmessage } class="" padding="0.8rem"></IconCirclePanel>
            <IconCirclePanel srcIcon={ iconvideocall } class="" padding="0.8rem"></IconCirclePanel>
            <IconCirclePanel srcIcon={ iconbrownnoti } class="" padding="0.8rem"></IconCirclePanel>
          </div>
        </div>
    </div>
  );
}

export default HeaderDetailConversationScreen;
