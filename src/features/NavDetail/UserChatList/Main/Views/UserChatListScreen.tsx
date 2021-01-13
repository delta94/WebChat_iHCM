import React, { useState , useEffect , useRef , ChangeEvent } from 'react';
import HeaderUserChatListScreen from '../../Header/Views/HeaderUserChatListScreen';
import UserChatScreen from '../../UserChat/Views/UserChatScreen';
import './UserChatListScreen.css';
import CustomInputScreen from '../../../../../libraries/Features/CustomInput/Views/CustomInputScreen';
import { connect } from 'react-redux';
import { getConversationList } from '../../../../../redux/Actions/ConversationList.action';
import { IConversationState } from '../../../../../redux/Reducers/ConversationList.reducer';
import { useHistory } from 'react-router-dom';
import { ENUM_KIND_OF_CONVERSATION } from '../../../../../libraries/Constants/KindOfConversation';
import DataNotFoundScreen from '../../../../../libraries/Features/DataNotFound/Views/DataNotFoundScreen';
import { ENUM_KIND_OF_NOTFOUNDICON } from '../../../../../libraries/Constants/KindOfNotFoundIcon';

const iconsearch = require("../../../../../libraries/Icons/iconsearch.svg").default;

const styleCustomInput = {
  backgroundImage: `url('${iconsearch}')`,
  backgroundPosition: "3% 50%",
  padding: "12px 20px 12px 40px",
  borderRadius: "0.7rem",
  fontSize: "1rem",
};

const conversationList: IConversationState[] = [
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


function UserChatListScreen(props: any) {
  const typingTimeoutRef = useRef<any>(null);
  const [query , setQuery] = useState<string>("");
  const [activedUserChat , setActivedUserChat] = useState({
    isGroup:false,
    id: -1
  });
  const history = useHistory();

  useEffect(() => {
    const id = 3;
    props.getConversationList(id);

    setUserChatIsAcTiveByPath();
  },[])
  
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>{
    if(typingTimeoutRef.current){
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() =>{
      setQuery(e.target.value);
    },5e2);
  }

  const setUserChatIsAcTiveByPath = () =>{
    const currentPathName = history.location.pathname;
    const arrPath = currentPathName.split("/");
    if(arrPath){
      let isGroup = false;
      let id = parseInt(arrPath[2]);
      if(arrPath[1] === ENUM_KIND_OF_CONVERSATION.GROUP){
        isGroup = true;
      }else if(arrPath[1] === ENUM_KIND_OF_CONVERSATION.PERSONAL){
        isGroup = false;
      }else{
        return;
      }
      if(arrPath.length === 4 && arrPath[2] === "detail"){
        id = parseInt(arrPath[3]);
      }
      setUserChatIsAcTive(isGroup , id);
    }
  }

  const setUserChatIsAcTive = (isGroup:boolean , id:number) =>{
    setActivedUserChat({
      isGroup,
      id,
    });
  };

  const ShowConversationList = () => {
    if (conversationList.length === 0) {
      return <DataNotFoundScreen text={"Không tìm thấy kết quả"} icon={ ENUM_KIND_OF_NOTFOUNDICON.DATA } isPosition={ true }></DataNotFoundScreen>;
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
    <>
      <div className="userchatlist-top">
        <HeaderUserChatListScreen></HeaderUserChatListScreen>
        <CustomInputScreen
          style={styleCustomInput}
          class="searchinput-container"
          placeHolder="Tìm kiếm cuộc trò chuyện"
          isMultiline={false}
          isTextArea={ true }
          onChange={ onChange }
          hasClearText={ true }
        ></CustomInputScreen>
      </div>
      <div className="userchatlist-bottom">
        {
          ShowConversationList()
        }
      </div>
    </>
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
