import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CircleAvatarScreen from '../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import IconCirclePanel from '../../../../../libraries/Features/IconCirclePanel/Views/IconCirclePanelScreen';
import { IHeaderConversationDetail } from '../Models/HeaderConversationDetail';
import './HeaderConversationDetailScreen.css';

const iconleftarrow = require("../../../../../libraries/Icons/iconleftarrow.svg").default;
// const iconsearch = require("../../../../../libraries/Icons/iconsearch.svg").default;

function HeaderConversationDetailScreen(props : IHeaderConversationDetail) {
  let { id } : any = useParams();
  console.log(id);
  const history = useHistory();

  const redirectToConversation = () =>{
    history.push(props.backPage);
  }

  return (
    <div className="headerconversationdetail-container app-mainfont">
      <div className="headerconversationdetail-top">
        <div className="headerconversationdetail-back">
          <div onClick={ redirectToConversation }>
            <img src={ iconleftarrow } alt="" ></img>
            Quay lại
          </div>
        </div>
        <div>
          {
            props.eleSearch
          }
        </div>
      </div>
      <div className="headerconversationdetail-avatar">
          <h4>
            {
              props.name
            }
          </h4>
          <span>
            {
              props.title
            }
          </span>

          <CircleAvatarScreen
            src={ props.srcImage }
            width={"75px"}
            height={"75px"}
            isOnline={false}
            class={"headerconversationdetail-avatar-image"}
            alt={""}
          ></CircleAvatarScreen>

          <div className="headerconversationdetail-option app-mainfont">
            {
              props.eleOption
            }
          </div>
        </div>
    </div>
  );
}

export default HeaderConversationDetailScreen;
