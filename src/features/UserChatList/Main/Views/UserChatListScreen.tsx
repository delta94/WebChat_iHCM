import React, { useState } from "react";
import HeaderScreen from "../../Header/Views/HeaderScreen";
import UserChatScreen from "../../UserChat/Views/UserChatScreen";
import "./UserChatListScreen.css";
import { IUserChat } from "../../UserChat/Models/UserChatModel";
import NoUserChatFound from "../../NoUserChatFound/Views/NoUserChatFound";
import CustomInputScreen from "../../../../libraries/Features/CustomInput/Views/CustomInputScreen";
import { connect } from "react-redux";
import { getConversationList } from "../../../../redux/Actions/ConversationList.action";
import { useEffect } from "react";
import { IConversationState } from "../../../../redux/Reducers/ConversationList.reducer";

const iconsearch = require("../../../../libraries/Icons/iconsearch.svg")
  .default;

const styleCustomInput = {
  backgroundImage: `url('${iconsearch}')`,
  backgroundPosition: "3% 50%",
  padding: "12px 20px 12px 40px",
  borderRadius: "0.7rem",
  fontSize: "1rem",
};

function UserChatListScreen(props: any) {
  // const { conversationList } = props;

  const conversationList = [
    {
      avatar: "https://www.w3schools.com/w3images/avatar2.png",
      hasReadLastMess: false,
      id: 1,
      isActive: false,
      isGroup: false,
      isOnline: true,
      lastMess:
        "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
      name: "Trung Đức",
      setIsActive: null,
      timeToReadLastMess: "09:09",
    },
    {
      avatar: "https://www.w3schools.com/w3images/avatar2.png",
      hasReadLastMess: false,
      id: 2,
      isActive: false,
      isGroup: true,
      isOnline: false,
      lastMess:
        "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
      name: "Hội người yêu chim",
      setIsActive: null,
      timeToReadLastMess: "09:09",
    },
    {
      avatar: "https://www.w3schools.com/w3images/avatar2.png",
      hasReadLastMess: true,
      id: 3,
      isActive: false,
      isGroup: true,
      isOnline: true,
      lastMess:
        "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
      name: "Hội người yêu chim",
      setIsActive: null,
      timeToReadLastMess: "09:09",
    },
    {
      avatar: "https://www.w3schools.com/w3images/avatar2.png",
      hasReadLastMess: true,
      id: 4,
      isActive: false,
      isGroup: false,
      isOnline: true,
      lastMess:
        "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
      name: "Trung Đức",
      setIsActive: null,
      timeToReadLastMess: "09:09",
    },
  ];

  const [activedUserChat, setActivedUserChat] = useState({
    isGroup: false,
    id: -1,
  });

  useEffect(() => {
    const id = 3;
    props.getConversationList(id);
  }, []);

  const setUserChatIsAcTive = (isGroup: boolean, id: number) => {
    setActivedUserChat({
      isGroup,
      id,
    });
  };

  const ShowConversationList = (conversationList: IConversationState[]) => {
    if (conversationList.length === 0) {
      return <NoUserChatFound></NoUserChatFound>;
    }
    return conversationList.map(
      (conversationState: IConversationState, idx: number) => (
        <UserChatScreen
          key={idx}
          id={conversationState.id}
          hasReadLastMess={conversationState.hasReadLastMess}
          isGroup={conversationState.isGroup}
          isOnline={conversationState.isGroup}
          name={conversationState.name}
          lastMess={conversationState.lastMess}
          timeToReadLastMess={conversationState.timeToReadLastMess}
          avatar={conversationState.avatar}
          isActive={
            conversationState.isGroup === activedUserChat.isGroup &&
            conversationState.id === activedUserChat.id
          }
          setIsActive={setUserChatIsAcTive}
        ></UserChatScreen>
      )
    );
  };

  return (
    <div className="userchatlist-container">
      <div className="userchatlist-top">
        <HeaderScreen></HeaderScreen>
        <CustomInputScreen
          style={styleCustomInput}
          class="searchinput-container"
          placeHolder="Tìm kiếm cuộc trò chuyện"
          isMultiline={false}
        ></CustomInputScreen>
      </div>
      <div className="userchatlist-bottom">
        {ShowConversationList(conversationList)}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    conversationList: state.conversationList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getConversationList: (id: number) => dispatch(getConversationList(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserChatListScreen);
