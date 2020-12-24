import React from 'react';
import { useHistory } from 'react-router-dom';
import CircleAvatarScreen from '../../../../../../libraries/Features/CircleAvatar/Views/CircleAvatarScreen';
import './HeaderCreateGroupScreen.css';

const iconleftarrow = require("../../../../../../libraries/Icons/iconleftarrow.svg").default;

function HeaderCreateGroupScreen() {
    const history = useHistory();

    const redirectToConversation = () =>{
      history.push("/");
    }
    return (
        <div className="headercreategroup-container app-mainfont">
            <div className="headerdetailconversation-back">
                <div onClick={ redirectToConversation }>
                    <img src={ iconleftarrow } alt="" ></img>
                    Quay lại
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
            </div>
        </div>
    );
}

export default HeaderCreateGroupScreen;
